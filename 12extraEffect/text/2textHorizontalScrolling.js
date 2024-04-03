gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

function textScrolling() {
    gsap.to(".main1-inner1", {
        x: -1000,
        scrollTrigger: {
            trigger: "#main1",
            scroller: "#main",
            start: "top 60%",
            end: "bottom 0",
            scrub: 5,
        }
    })

    gsap.from(".main1-inner2", {
        x: -1000,
        scrollTrigger: {
            trigger: "#main1",
            scroller: "#main",
            start: "top 60%",
            end: "bottom 0%",
            scrub: 5,
        }
    })

}
textScrolling();