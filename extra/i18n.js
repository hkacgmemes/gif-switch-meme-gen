import React from "react";
import ReactStringReplace from "react-string-replace";

const locales = {
	hk: {
		_lang: "香港",
		_name: "Gifbb 迫害各種遊戲生成器",
		_out_filename: "gifbb又迫害咗一隻game",
		whatever: "是但啦",
		suggested: "建議：",
		output: "出圖",
		acgIsNotFuckPolitics: "ACG is not *uck 政治",
		urHead: "$1你個頭",
		createdBy: "created by 相馬",
		withIdeasFrom: "with ideas from $1's $2",
		mrHonTool: "項生鬧得好寫得好生成器",
	},
	en: {
		_lang: "English",
		_name: "Gifbb (Joshua Wong) persecuting every game generator",
		_out_filename: "joshua_prosecuted_another_game",
		whatever: "Whatever",
		suggested: "Suggested: ",
		output: "Generate",
		acgIsNotFuckPolitics: "ACG is not *uck politics",
		urHead: "$1 your head",
		createdBy: "created by Souma (相馬)",
		withIdeasFrom: "with ideas from $1's $2",
		mrHonTool: "Mr. Hon is so right to blame and write about generator",
	},
	es: {
		_lang: "Español",
		_name: "Joshua Wong acosar de varios generadores de juegos.",
		_out_filename: "joshua_persiguió_otro_juego",
		whatever: "lo que sea",
		suggested: "Sugirió: ",
		output: "Hacer",
		acgIsNotFuckPolitics: "ACG is not *uck política",
		urHead: "Es extraño $1",
		createdBy: "created by Souma",
		withIdeasFrom: "con ideas de $2 de $1",
		mrHonTool: "El Sr. Hon está bien y escribe bien generador",
	},
	th: {
		_lang: "ไทย",
		_name: "Joshua Wong การประหัตประหารเกมต่าง ๆเครื่องมือการผลิต",
		_out_filename: "joshua_รังแกเกมอื่น",
		whatever: "อะไรก็ตาม",
		suggested: "แนะนำ: ",
		output: "สร้าง",
		acgIsNotFuckPolitics: "ACG is not *uck การเมือง",
		urHead: "แปลกนะ $1",
		createdBy: "สร้างโดย Souma (相馬)",
		withIdeasFrom: "ด้วยแนวคิดจาก$2ของ $1",
		mrHonTool: "นายฮอนคำสาปได้ดีมากเขียนได้ดีมากสร้างเครื่องมือ",
	},
	vn: {
		_lang: "Tiếng Việt",
		_name: "Máy phát điện Gifbb (Joshua Wong) bức hại mọi trò chơi",
		_out_filename: "joshua_đã_truy_tố_một_trò_chơi_khác",
		whatever: "Bất cứ điều gì",
		suggested: "Đề xuất: ",
		output: "Tạo",
		acgIsNotFuckPolitics: "ACG is not *uck politics",
		urHead: "$1 đổ lỗi",
		createdBy: "được tạo bởi Souma (相馬)",
		withIdeasFrom: "với ý tưởng từ $2 của $1",
		mrHonTool: "Máy phát điện Ông Hon rất đúng khi đổ lỗi và viết về",
	},
};

const lang = (locale) => locale ? locales[`${locale}`.toLowerCase()] : locales;

const getLocaleWithFormatting = (localeName, key, args) => {

	const locale = lang(localeName);
	if (!locale) {
		return null;
	}

	const entry = locale[key];
	if (!entry) {
		return null;
	}

	if (!args || !Array.isArray(args) || args.length === 0) {
		return entry;
	}

	return ReactStringReplace(
		getLocaleWithFormatting(localeName, key),
		/(\$\d+)/g,
		(match, i) => {
	        const replaceWith = [null, ...args];
	        return React.cloneElement(replaceWith[match.substring(1)], { key: i });
		}
    );
};

module.exports = { locales, lang, getLocale: getLocaleWithFormatting };