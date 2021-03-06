import React, { Fragment, useRef } from 'react';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import FileSaver from "file-saver";
// const html2canvas = process.browser ? require('html2canvas') : null;
const dom2image = process.browser ? require('dom-to-image') : null;


import { getLocale } from "../../extra/i18n";
import ItemSwitcher from "../ItemSwitcher/";
import GifSwitch from "../GifSwitch/";
import GifIPhone from "../GifIPhone/";
import GifPc from "../GifPc/";

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

		dom2image.toJpeg(drawer.current, {
			quality: .9
		})
		    .then(function (dataUrl) {
		    	FileSaver.saveAs(dataUrl, `${getLocale(lang, "_out_filename")}.jpg`);
		        otherDivs.forEach(e => e.style.display = "");
		    });
	}

	function getDrawer() {
		switch (`${item}`.toLowerCase()) {
    		case "iphone":
				return GifIPhone;
    		case "pc":
				return GifPc;
    		case "switch":
    		default:
				return GifSwitch;
    	}
	}

	function getDrawerRecommendedResolution() {
		switch (`${item}`.toLowerCase()) {
    		case "iphone":
    			return "2436x1125 or 19.5:9"
    		case "pc":
    			return "1920x1080 or 16:9"
    		case "switch":
    		default:
    			return "1280x720 or 16:9";
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
		        	{ getLocale(lang, "suggested") } { getDrawerRecommendedResolution() }, 24bit
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