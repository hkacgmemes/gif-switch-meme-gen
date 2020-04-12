import { Fragment, useRef } from 'react';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';

import FileSaver from "file-saver";
const html2canvas = process.browser ? require('html2canvas') : null;

import ItemSwitcher from "../ItemSwitcher/";
import GifSwitch from "../GifSwitch/";
import GifIPhone from "../GifIPhone/";

const Drawer = ({ router }) => {

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
		html2canvas(drawer.current, { scrollY: -window.scrollY })
			.then(canvas => 
				canvas.toBlob(blob => FileSaver.saveAs(blob, "gifbb又迫害咗一隻game.jpg"), "image/jpeg", .9)
			);
	}

	function renderGifbb() {

		switch (router.query.item) {
    		case "iphone":
				return (<GifIPhone drawer={drawer} canvas={canvas} />);
    		case "switch":
    		default:
				return (<GifSwitch drawer={drawer} canvas={canvas} />);
    	}
	}

	return (
		<Fragment>
			<ItemSwitcher />
			<p>
		        <span>
		        	建議： 1280 x 720, 24bit
		        </span>
		        <br/>
		        <input id="file-in" type="file" accept="image/*" onChange={sauceChg} ref={fileIn} />
		    </p>
		    { renderGifbb() }
		    <p>
		    	<button id="save" onClick={saveImage}>出圖</button>
		    </p>
		</Fragment>
	)
};

export default withRouter(Drawer);