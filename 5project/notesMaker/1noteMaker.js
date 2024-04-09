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

makeRememberBtn.addEventListener("mouseover", function(){
    makeRememberBtn.style.opacity = ".4";
    makeRememberBtn.style.cursor = "pointer";
});
makeRememberBtn.addEventListener("mouseleave", function(){
    makeRememberBtn.style.opacity = "1";
});

closeLine.addEventListener("mouseover", function(){
    closeLine.style.opacity = ".4";
    closeLine.style.cursor = "pointer";
});
closeLine.addEventListener("mouseleave", function(){
    closeLine.style.opacity = "1";
});

resetBtn.addEventListener("mouseover", function(){
    resetBtn.style.opacity = ".4";
    resetBtn.style.cursor = "pointer";
});
resetBtn.addEventListener("mouseleave", function(){
    resetBtn.style.opacity = "1";
});

makeBtn.addEventListener("mouseover", function(){
    makeBtn.style.opacity = ".4";
    makeBtn.style.cursor = "pointer";
});
makeBtn.addEventListener("mouseleave", function(){
    makeBtn.style.opacity = "1";
});

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