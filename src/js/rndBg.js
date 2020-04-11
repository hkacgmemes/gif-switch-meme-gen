import bg0 from "../img/acg_is_not_fk_politics/0.gif";
import bg1 from "../img/acg_is_not_fk_politics/1.gif";
import bg2 from "../img/acg_is_not_fk_politics/2.gif";
import bg3 from "../img/acg_is_not_fk_politics/3.gif";
import bg4 from "../img/acg_is_not_fk_politics/4.gif";
import bg5 from "../img/acg_is_not_fk_politics/5.gif";
import bg6 from "../img/acg_is_not_fk_politics/6.gif";
import bg7 from "../img/acg_is_not_fk_politics/7.gif";
import bg8 from "../img/acg_is_not_fk_politics/8.gif";

document.addEventListener("DOMContentLoaded", (e) => {
	const backgrounds = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];
	const randomBgIndex = parseInt(Math.random() * backgrounds.length);
	console.log(`background index: ${randomBgIndex}`);
	document.body.style.background = `url(${backgrounds[randomBgIndex]})`;
});