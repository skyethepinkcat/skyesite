var cook = document.cookie;
console.log(cook);
if (cook == ""){
	setStyleSheetLight();
}
else if (cook =="style=dark"){
	setStyleSheetDark();
}
else if (cook == "style=light"){
	setStyleSheetLight();
}
