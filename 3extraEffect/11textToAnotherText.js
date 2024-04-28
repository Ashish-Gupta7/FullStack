var h1 = document.querySelectorAll("h1");
// console.log(h1);
h1.forEach(elm => {
    var h1Text = elm.textContent;
    // console.log(h1Text);
    var splitted = h1Text.split("");
    // console.log(splitted);
    
    var spanCont = "";
    splitted.forEach(elm => {
        // console.log(elm);
        spanCont += `<span>${elm}</span>`;
        // console.log(spanCont);
    });
    elm.innerHTML = spanCont;
});


gsap.from("#main .text h1:nth-child(1) span", {
    letterSpacing: "1.2vw",
    stagger: .05,
    rotate: "180deg",
    opacity: 0
});
gsap.to("#main .text h1:nth-child(1) span", {
    delay: 1.2,
    stagger: -.1,
    rotate: "90deg",
    display: "none",
    mixBlendMode: "difference"
}, "same");
gsap.to("#main .text h1:nth-child(2) span", {
    delay: 1.4,
    stagger: "-.15",
    rotate: "90deg",
    opacity: 1
}, "same")