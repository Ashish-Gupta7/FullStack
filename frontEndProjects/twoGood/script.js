function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
}
locomotive();

function loading() {
    var tl = gsap.timeline();
    tl.from("nav", {
        y: -10,
        opacity: 0
    })
    tl.from("#page1 #text h1", {
        y: 200,
        duration: .5,
        stagger: .2,
    })
}
loading();

function circularText() {
    var circle = document.querySelector("#page1 #video-container #videotext #circle h3");
    var circleText = circle.innerHTML;
    var splittedcircle = circleText.split("");
    var contentCircle = "";
    splittedcircle.forEach(function (cir) {
        contentCircle = contentCircle + `<span>${cir}</span>`
    });
    circle.innerHTML = contentCircle;
    splittedcircle.forEach(function (char, i) {
        var span = document.querySelector("#page1 #video-container #videotext #circle h3 span");
        span.style.transform = `rotate(${i * 10}deg)`;
        span.textContent = char;
        circle.appendChild(span);
    });
}
circularText();

function playVideo() {
    var videoContainer = document.querySelector("#page1 #video-container");
    var playBtn = document.querySelector("#playBtn");
    var video = document.querySelector("#page1 #video-container video");
    var videoText = document.querySelector("#page1 #video-container #videotext");
    var bookImage = document.querySelector("#page1 #video-container img");

    videoContainer.addEventListener("mouseenter", function () {
        gsap.to(playBtn, {
            opacity: 1,
            scale: 1
        })
    })
    videoContainer.addEventListener("mouseleave", function () {
        gsap.to(playBtn, {
            scale: 0,
            opacity: 0
        })
    })
    videoContainer.addEventListener("mousemove", function (dets) {
        gsap.to(playBtn, {
            left: dets.x - 37.5,
            top: dets.y - 37.5,
        })
    })
    var flag = 0;
    videoContainer.addEventListener("click", function () {
        if (flag == 0) {
            var tl1 = gsap.timeline();
            tl1.to(videoText, {
                scale: 0,
                opacity: 0,
                duration: .5,
                rotate: "360deg"
            }, "same1")
            tl1.to(bookImage, {
                scale: 0,
                duration: .5
            }, "same1")
            tl1.to(playBtn, {
                scale: 0,
                duration: .5
            }, "same1")
            tl1.to(video, {
                scale: 1,
                duration: .5
            }, "same2")
            tl1.to(playBtn, {
                innerHTML: "pause"
            }, "same2")
            tl1.to(playBtn, {
                delay: .2,
                scale: 1,
                duration: .5,
                padding: "6vh 1.6vw",
                backgroundColor: "black",
            }, "same2")
            video.play();
            flag = 1;

        } else {
            var tl2 = gsap.timeline();
            video.pause();
            tl2.to(playBtn, {
                scale: 0,
                duration: .5,
                padding: "4.8vh 1.5vw"
            }, "same3")
            tl2.to(video, {
                delay: .2,
                scale: 0,
                duration: .5
            }, "same3")
            tl2.to(playBtn, {
                innerHTML: "play"
            }, "same4")
            tl2.to(playBtn, {
                delay: .2,
                scale: 1,
                duration: .5,
                backgroundColor: "#FC5400",
            }, "same4")
            tl2.to(bookImage, {
                scale: 1,
                duration: .5
            }, "same4")
            tl2.to(videoText, {
                scale: 1,
                opacity: 1,
                duration: .5,
                rotate: "360deg"
            }, "same4")
            flag = 0;
        }
    })
}
playVideo();

function mouseFollower() {
    var mouseFollower = document.querySelectorAll("#mouseFollower");
    var imgInner1 = document.querySelector("#page3 .imgInner1");
    var imgInner2 = document.querySelector("#page3 .imgInner2");
    var imgInner3 = document.querySelector("#page3 .imgInner3");
    var imgInner4 = document.querySelector("#page3 .imgInner4");

    imgInner1.addEventListener("mouseenter", function () {
        gsap.to(mouseFollower, {
            scale: 1,
            opacity: 1,
            backgroundColor: "#F7F2EC",
            transform: "translate(-50%, -50%)"

        })
    })
    imgInner1.addEventListener("mouseleave", function () {
        gsap.to(mouseFollower, {
            scale: 0,
            opacity: 0
        })
    })
    imgInner1.addEventListener("mousemove", function (elem1) {
        gsap.to(mouseFollower, {
            left: elem1.x,
            top: elem1.y
        })
    })

    imgInner2.addEventListener("mouseenter", function () {
        gsap.to(mouseFollower, {
            scale: 1,
            opacity: 1,
            backgroundColor: "#ECECEC",
            transform: "translate(-50%, -50%)"
        })
    })
    imgInner2.addEventListener("mouseleave", function () {
        gsap.to(mouseFollower, {
            scale: 0,
            opacity: 0
        })
    })
    imgInner2.addEventListener("mousemove", function (elem1) {
        gsap.to(mouseFollower, {
            left: elem1.x,
            top: elem1.y
        })
    })
    imgInner3.addEventListener("mouseenter", function () {
        gsap.to(mouseFollower, {
            scale: 1,
            opacity: 1,
            backgroundColor: "#EDE6E6",
            transform: "translate(-50%, -50%)"
        })
    })
    imgInner3.addEventListener("mouseleave", function () {
        gsap.to(mouseFollower, {
            scale: 0,
            opacity: 0
        })
    })
    imgInner3.addEventListener("mousemove", function (elem1) {
        gsap.to(mouseFollower, {
            left: elem1.x,
            top: elem1.y
        })
    })
    imgInner4.addEventListener("mouseenter", function () {
        gsap.to(mouseFollower, {
            scale: 1,
            opacity: 1,
            backgroundColor: "#D6E0E0",
            transform: "translate(-50%, -50%)"
        })
    })
    imgInner4.addEventListener("mouseleave", function () {
        gsap.to(mouseFollower, {
            scale: 0,
            opacity: 0
        })
    })
    imgInner4.addEventListener("mousemove", function (elem1) {
        gsap.to(mouseFollower, {
            left: elem1.x,
            top: elem1.y
        })
    })
}
mouseFollower();