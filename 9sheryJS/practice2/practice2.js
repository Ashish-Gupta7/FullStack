const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),     // select your query.
    smooth: true
});

function theme() {
    var button = document.querySelector("nav button");
    var buttondiv = document.querySelector("nav button div")
    var flag = 0;

    button.addEventListener("click", function () {
        if (flag === 0) {
            document.documentElement.style.setProperty("--bgcolor", "#000");
            document.documentElement.style.setProperty("--textcolor", "#fff");
            gsap.to(buttondiv, {
                marginLeft: 25,
                duration: .5,
                ease: Expo.easeInOut
            })
            flag = 1;
        } else {
            document.documentElement.style.setProperty("--bgcolor", "#fff");
            document.documentElement.style.setProperty("--textcolor", "#000");
            gsap.to(buttondiv, {
                marginLeft: 0,
                duration: .5,
                ease: Expo.easeInOut
            })
            flag = 0;
        }
    });
}
theme();

function navBar() {
    var tl = gsap.timeline();
    tl.from(".navAnime2", {
        duration: 1.5,
        y: -20,
        opacity: 0
    })
    tl.from(".navAnime1", {
        stagger: {
            amount: .1
        },
        duration: 1,
        y: 15,
        opacity: 0
    }, "same")
    tl.from(".navAnime3", {
        stagger: {
            amount: .1
        },
        duration: 1,
        y: 15,
        opacity: 0
    }, "same")
}
navBar();

Shery.textAnimate("#texthead h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 20,
    delay: 0.1,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});
  
gsap.from(".anime1", {
    opacity: 0,
    y: 10,
    ease: Power3,
    duration: 3.5
})

// Shery.imageEffect("#inner2 img", {
//     style: 4,
//     debug: true
// })



// Shery.imageEffect("#page4", {
//     style:3,
//     debug: true,
//     gooey: true,
// }); 