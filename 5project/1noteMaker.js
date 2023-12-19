// https://codepen.io/nagyalex/pen/ZEWLyaw  =>  CodePen Home Displaying The Character Count of a Textarea.

let makeRememberBtn = document.querySelector("#makeRememberBtn");
let typeHereHidden = document.querySelector(".typeHere");
let centerHidden = document.querySelector(".center");
let closeLine = document.querySelector(".ri-close-line");
let container = document.querySelector(".container");
let resetBtn = document.querySelector(".reset-Btn");
let makeBtn = document.querySelector(".make-Btn");
let title = document.querySelector("#title");
let data = document.querySelector("#data");

makeRememberBtn.addEventListener("click", function(){
    typeHereHidden.style.display = "grid";
    centerHidden.style.display = "none";
    container.style.opacity = ".2";
});

closeLine.addEventListener("click", function(){
    typeHereHidden.style.display = "none";
    centerHidden.style.display = "flex";
    container.style.opacity = "1";
});

title.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        console.log("Entered");
        data.style.cursor = "enter"
    }
});

resetBtn.addEventListener("click", function(){

});