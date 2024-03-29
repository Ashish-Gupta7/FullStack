var menu = document.querySelector("#main #nav #menu")


var flag = 0;
menu.addEventListener("click", function menuClickAnim() {
    if (flag === 0) {
        gsap.to("#main-content", {
            duration: -1,
            display: "none"
        })
        gsap.to("#main #nav #menu i:nth-child(2)", {
            duration: .5,
            rotate: "135deg",
            opacity: 0
        })
        gsap.to("#main #nav #menu i:nth-child(1)", {
            duration: .5,
            rotate: "180deg",
            opacity: 1
        })
        gsap.to("#topZero", {
            top: 0,
            duration: .5,
        })
        flag = 1;
    }
    else{
        gsap.to("#main-content", {
            display: "block"
        })
        gsap.to("#main #nav #menu i:nth-child(1)", {
            duration: .5,
            rotate: "0deg",
            opacity: 0
        })
        gsap.to("#main #nav #menu i:nth-child(2)", {
            duration: .5,
            rotate: "0deg",
            opacity: 1
        })
        gsap.to("#topZero", {
            top: "-100vh",
            duration: .5,
        })
        flag = 0;
    }
})
menuClickAnim();

// var mode = document.querySelector(".mode");
// var svg = document.querySelector(".mode svg");
// mode.addEventListener("click", function(){
//     svg.style.backgroundColor = "#000"
// })

// var mode = document.querySelector(".mode");
// var svg = document.querySelector(".mode svg");
// svg.setAttribute("fill", "#000"); // SVG fill color change
// mode.addEventListener("click", function(){
//     svg.setAttribute("fill", "#000");
// });
function theme() {
    var mode = document.querySelector("#topZero #footer .mode");
    var flag = 0;

    mode.addEventListener("click", function () {
        if (flag === 0) {
            document.documentElement.style.setProperty("--bgcolorPrimary", "#fff");
            document.documentElement.style.setProperty("--txtColor", "#000");
            flag = 1;
        } else {
            document.documentElement.style.setProperty("--bgcolorPrimary", "#000");
            document.documentElement.style.setProperty("--txtColor", "#fff");
            flag = 0;
        }
    });
}

// Call the theme function after its definition
theme();
