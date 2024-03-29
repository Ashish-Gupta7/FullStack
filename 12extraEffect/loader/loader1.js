var color = document.querySelectorAll("#main .color");
var pink = document.querySelector("#main .pink");
var green = document.querySelector("#main .green");
var yellow = document.querySelector("#main .yellow");

var loader = gsap.timeline();

loader.to(yellow, {
    bottom: -100,
    height: "-20%",
    duration: 1,
    delay: 1
})
loader.to(green, {
    delay: -.5,
    bottom: "-100",
    height: "-20%",
    duration: .8,
})
loader.to(pink, {
    delay: -.4,
    bottom: "-100",
    height: "-20%",
    duration: .5,
})