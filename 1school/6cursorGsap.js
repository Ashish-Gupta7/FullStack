document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y
    });
});