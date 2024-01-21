const letterStagger = document.querySelector(".load:nth-child(3) h1");
const letterStaggerText = letterStagger.textContent;
const letterStaggerTextSplitted = letterStaggerText.split("");

var letterSpanAddHtml = "";
letterStaggerTextSplitted.forEach(function (elem1) {
  letterSpanAddHtml = letterSpanAddHtml + `<span>${elem1}</span>`;
});
letterStagger.innerHTML = letterSpanAddHtml;

var tl = gsap.timeline();
tl.from("#loader .load h1", {
  y: 130,
  duration: 1,
  delay: 0.3,
  opacity: 0,
  stagger: 0.3,
});
tl.to("#loader .load:nth-child(2) h1 span", {
  delay: 0.2,
  duration: 0.4,
  opacity: 0.2,
});
tl.to("#loader .load:nth-child(3) h1 span", {
  delay: 0.01,
  opacity: 0.2,
  stagger: 0.05,
});

gsap.from("#loader .load:nth-child(3) h2", {
    delay: 1.08,
    y: 130,
    opacity: 0.2,
    stagger: 0.05,
});
gsap.to("#loader .load:nth-child(1) h1", {
  delay: 3,
  opacity: 0.5,
});
gsap.to("#loader .load:nth-child(4) h6", {
    delay: 3,
    duration: .3,
    opacity: 1
})
gsap.to("#loader", {
  delay: 3.6,
  top: "-110%",
  ease: "power3.in",
});

var loading = document.querySelector("#loader .load #loading h3");
var grow = 0;
var count = setInterval(function () {
  if (grow < 100) {
    grow++;
    loading.innerHTML = grow;
  }
}, 30);

setTimeout(function () {
  clearInterval(count);
}, 3000);


