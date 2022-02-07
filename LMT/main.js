let myInput = document.getElementById("input");
myInput.onfocus = function () {
  myInput.style.boxShadow = "-5px 5px 2px #3585c7";
}
myInput.onblur = function () {
  myInput.style.boxShadow = "";
}