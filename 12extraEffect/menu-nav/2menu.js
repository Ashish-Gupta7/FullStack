var menu = document.querySelector("#main #menu");
var line1 = document.querySelector("#main #menu line1");
var line2 = document.querySelector("#main #menu line2");
var line3 = document.querySelector("#main #menu line3");

menu.addEventListener("click", function(){
    gsap.to(line1, {
        rotate: ""
    })
})