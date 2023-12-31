const tl = gsap.timeline({ paused: true });

tl.to("#hiddenMenu",
    {
        x: -400,
        duration: 1,
    }
);


const navBtn = document.querySelector(".navBtn");
const closeBtn = document.querySelector("#top-hiddennav-closeBtn");
const hiddenMenu = document.querySelector("#hiddenMenu");

navBtn.addEventListener("click", function () {
    tl.play();
});
closeBtn.addEventListener("click", function () {
    tl.reverse();
});