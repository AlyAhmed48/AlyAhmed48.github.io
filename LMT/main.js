let myInput = document.getElementById("input");
myInput.onfocus = function () {
  myInput.style.boxShadow = "-2px 2px 15px #00000025";
}
myInput.onblur = function () {
  myInput.style.boxShadow = "";
}