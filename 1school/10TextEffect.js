function splitting1() {
    var split1 = document.querySelectorAll(".split1");
    split1.forEach(function(el1) {
    var text1 = el1.textContent;
    var splittedtext1 = text1.split("");
    var content1 = "";
    splittedtext1.forEach(function(elem1){
        content1 = content1 + `<span>${elem1}</span>`;
    })
    el1.innerHTML = content1;
});
}
splitting1();
var tl1 = gsap.timeline();
tl1.to("#main1 h1 span", {
    opacity:0,
    duration: 1,
    stagger: .2,
}, "same")
tl1.to("#main1 h2 span", {
    opacity: 1,
    duration: 1,
    delay: .7,
    stagger: .2
}, "same")
// Gsap me kisi bhi do elements ko same variable Dene pr vo elements ek hi time pr work krte h. Ye variable un dono ke last me curly bracket ke phle double quotes me likhte h. jaisa ki yaha "same" ko likha gya h.


var tl2 = gsap.timeline();
tl2.from("#main2 h1", {
    duration: 1,
    y: -100,
})
tl2.to("#main2 h1", {
    delay: .5,
    duration: 1,
    opacity: 0
}, "scroll")
tl2.to("#main2 h1", {
    delay: 1,
    duration: 1,
    y: 50,
    opacity: 1
}, "scroll")