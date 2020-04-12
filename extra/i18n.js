const locales = {
	hk: {
		_name: "Gifbb 迫害各種遊戲生成器",
		whatever: "是但啦",
		suggested: "建議",
		output: "出圖",
		acgIsNotFuckPolitics: "ACG is not *uck 政治",
		urHead: "你個頭",
		createdBy: "created by 相馬",
		withIdeasFrom: "with ideas from ",
		mrHonTool: "項生鬧得好寫得好生成器",
	},
	th: {
		_name: "Joshua Wong การประหัตประหารเกมต่าง ๆเครื่องมือการผลิต",
		whatever: "อะไรก็ตาม",
		suggested: "แนะนำ",
		output: "สร้าง",
		acgIsNotFuckPolitics: "ACG is not *uck การเมือง",
		urHead: "แปลก",
		createdBy: "created by โสม",
		withIdeasFrom: "ด้วยแนวคิดจาก ",
		mrHonTool: "นายฮอนคำสาปได้ดีมากเขียนได้ดีมากสร้างเครื่องมือ",
	},
};

module.exports = (locale) => locales[`${locale}`.toLowerCase()];