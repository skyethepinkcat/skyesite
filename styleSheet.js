function setStyleSheetDark() {
	document.getElementById("pageStyle").setAttribute("href","dark.css");
	document.getElementById("logo").setAttribute("src","img/icondark.svg");
	document.getElementById("style").checked = true;
	document.cookie = "style=dark";
	document.getElementById("watermark").setAttribute("src","img/kasedark.png");
}
function setStyleSheetLight() {
	document.getElementById("pageStyle").setAttribute("href","light.css");
	document.getElementById("logo").setAttribute("src","img/icon.svg");
	document.getElementById("style").checked = false;
	document.cookie = "style=light";
	document.getElementById("watermark").setAttribute("src","img/kase.png");
}
function swapStyleSheet() {
	cook = document.cookie;
	if (cook=="style=light"){
		setStyleSheetDark();
	}
	if (cook=="style=dark"){
		setStyleSheetLight();
	}
}
