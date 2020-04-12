export default function () {
	if (typeof document !== 'undefined') {	
		const backgrounds = [
			require("./acg_is_not_fk_politics/0.gif"),
			require("./acg_is_not_fk_politics/1.gif"),
			require("./acg_is_not_fk_politics/2.gif"),
			require("./acg_is_not_fk_politics/3.gif"),
			require("./acg_is_not_fk_politics/4.gif"),
			require("./acg_is_not_fk_politics/5.gif"),
			require("./acg_is_not_fk_politics/6.gif"),
			require("./acg_is_not_fk_politics/7.gif"),
			require("./acg_is_not_fk_politics/8.gif"),
			require("./acg_is_not_fk_politics/9.gif"),
			require("./acg_is_not_fk_politics/10.gif"),
			require("./acg_is_not_fk_politics/11.gif"),
			require("./acg_is_not_fk_politics/12.gif"),
			require("./acg_is_not_fk_politics/13.gif"),
		];
		const randomBgIndex = parseInt(Math.random() * backgrounds.length);
		document.body.style.background = `url(${backgrounds[randomBgIndex]})`;
	}
};