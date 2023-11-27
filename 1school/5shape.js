var btn = document.querySelector("button");
var main = document.querySelector(".main");

var arr = ["rect", "tri", "rho", "circle", "star", "msg", "close"];

btn.addEventListener("click", function(){
    var rdm = Math.floor(Math.random()*arr.length);
    main.classList.toggle(arr[rdm]);
    console.log(rdm);
})