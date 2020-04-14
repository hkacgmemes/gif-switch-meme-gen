export default function () {
	if (typeof document !== 'undefined') {	
		const backgrounds = [
			require("./acg_is_not_fk_politics/00.gif"),
			require("./acg_is_not_fk_politics/01.gif"),
			require("./acg_is_not_fk_politics/02.gif"),
			require("./acg_is_not_fk_politics/03.gif"),
			require("./acg_is_not_fk_politics/04.gif"),
			require("./acg_is_not_fk_politics/05.gif"),
			require("./acg_is_not_fk_politics/06.gif"),
			require("./acg_is_not_fk_politics/07.gif"),
			require("./acg_is_not_fk_politics/08.gif"),
			require("./acg_is_not_fk_politics/09.gif"),
			require("./acg_is_not_fk_politics/10.gif"),
			require("./acg_is_not_fk_politics/11.gif"),
			require("./acg_is_not_fk_politics/12.gif"),
			require("./acg_is_not_fk_politics/13.gif"),
			require("./acg_is_not_fk_politics/14.gif"),
			require("./acg_is_not_fk_politics/15.gif"),
			require("./acg_is_not_fk_politics/16.gif"),
			require("./acg_is_not_fk_politics/17.gif"),
			require("./acg_is_not_fk_politics/18.gif"),
			require("./acg_is_not_fk_politics/19.gif"),
		];
		const randomBgIndex = parseInt(Math.random() * backgrounds.length);
		document.body.style.background = `url(${backgrounds[randomBgIndex]})`;
	}
};