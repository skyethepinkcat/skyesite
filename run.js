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
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

