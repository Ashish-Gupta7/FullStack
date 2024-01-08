function time(){
    var a = 0;
    setInterval(function() {
        a = a + Math.floor(Math.random()*15);
        if(a < 100){
            document.querySelector("#loader h1").innerHTML = a + "%";
        } else{
            a = 100;
            document.querySelector("#loader h1").innerHTML = a + "%";
        }
        console.log(a);
    }, 100);
}

var tl = gsap.timeline();
time();

tl.to("#loader h1", {
    duration: 1.8,
    onStart: time(),
});
tl.to("#loader", {
    top: "-100vh",
    scale: 0,
    duration: 1,
    delay: .3
});

gsap.to("#page1 h1", {
    transform: "translateX(-100%)",
    duration: 100,
    fontWeight: 1,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        pin: true,
        scrub: 5,
        start: "top 0",
        end: "bottom 0"
    }
});