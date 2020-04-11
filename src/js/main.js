import html2canvas from "html2canvas";
import FileSaver from "file-saver";

document.addEventListener("DOMContentLoaded", (e) => {

	const canvas = document.querySelector("canvas#testCanvas");
	const ctx = canvas.getContext("2d");

	const input = document.querySelector("input#file-in");
	input.value = "";

	input.addEventListener("change", () => {
		const file = input.files[0];
		const fr = new FileReader();
		fr.addEventListener("load", () => {
			const img = new Image();
			img.addEventListener("load", () => {
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			});
			img.src = fr.result;
		});
		fr.readAsDataURL(file);
	});

	// ===

	const saveBtn = document.querySelector("button#save");
	const drawer = document.querySelector("#drawer");
	const otherDivs = [...document.querySelectorAll("body > *:not(#drawer)")];

	saveBtn.addEventListener("click", () => {
		otherDivs.forEach(div => div.style.display = "none");
		html2canvas(drawer, { scrollY: -window.scrollY })
			.then(canvas => {
				otherDivs.forEach(div => div.style.display = "");
				canvas.toBlob(blob => FileSaver.saveAs(blob, "gifbb又迫害咗一隻game.jpg"), .95);
			});
	});
	
});