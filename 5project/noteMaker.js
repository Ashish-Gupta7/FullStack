// https://codepen.io/nagyalex/pen/ZEWLyaw  =>  CodePen Home Displaying The Character Count of a Textarea.

let makeRememberBtn = document.querySelector("#makeRememberBtn");
let typeHereHidden = document.querySelector(".typeHere-Hidden");
let centerHidden = document.querySelector(".center-Hidden");

makeRememberBtn.addEventListener("click", function(){
    typeHere.style.display = "grid";
    center.style.display = "none";
});