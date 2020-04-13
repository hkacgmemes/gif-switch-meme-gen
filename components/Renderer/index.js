import React, { Fragment, useRef } from 'react';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import FileSaver from "file-saver";
const html2canvas = process.browser ? require('html2canvas') : null;


import { getLocale } from "../../extra/i18n";
import ItemSwitcher from "../ItemSwitcher/";
import GifSwitch from "../GifSwitch/";
import GifIPhone from "../GifIPhone/";

const Drawer = ({
	router: {
		query: {
      		lang = "hk",
			item
		}
	}
}) => {

	const fileIn = useRef();
	const canvas = useRef();
	const drawer = useRef();

	function sauceChg() {
		const ctx = canvas.current.getContext("2d");

		const file = fileIn.current.files[0];
		const fr = new FileReader();
		fr.addEventListener("load", () => {
			const img = new Image();
			img.addEventListener("load", () => {
				ctx.drawImage(img, 0, 0, canvas.current.width, canvas.current.height);
			});
			img.src = fr.result;
		});
		fr.readAsDataURL(file);
	}

	function saveImage() {
		const otherDivs = document.querySelectorAll(".app > *:not(.drawer)");

		otherDivs.forEach(e => e.style.display = "none");
		html2canvas(
			drawer.current,
			{
				scale: 1,
				scrollY: -window.scrollY,
			}
		)
			.then(canvas => {
				otherDivs.forEach(e => e.style.display = "");
				canvas.toBlob(blob => FileSaver.saveAs(blob, "gifbb又迫害咗一隻game.jpg"), "image/jpeg", .9);
			});
	}

	function getDrawer(item) {
		switch (`${item}`.toLowerCase()) {
    		case "iphone":
				return GifIPhone;
    		case "switch":
    		default:
				return GifSwitch;
    	}
	}

	function renderGifbb() {
		return React.createElement(
			getDrawer(item),
			{
				id: "drawer",
				drawer,
				canvas,
			}
		);
	}

	return (
		<Fragment>
			<ItemSwitcher />
			<p>
		        <span>
		        	{ getLocale(lang, "suggested") } 1280 x 720, 24bit
		        </span>
		        <br/>
		        <input id="file-in" type="file" accept="image/*" onChange={sauceChg} ref={fileIn} />
		    </p>
		    { renderGifbb() }
		    <p>
		    	<button id="save" onClick={saveImage}>{ getLocale(lang, "output") }</button>
		    </p>
		</Fragment>
	)
};

export default withRouter(Drawer);