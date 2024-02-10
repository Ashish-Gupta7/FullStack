function loader() {
  var timer = document.querySelector(
    "#load1 .load1-text1 .load1-text-inner1 h4:nth-child(1)"
  );
  var grow = 0;
  var int = setInterval(function () {
    if (grow < 100) {
      grow++;
      timer.innerHTML = grow;
    }
  }, 20);

  setTimeout(function () {
    clearInterval(int);
  }, 3000);

  var letterspan = document.querySelector(".load1-text3 h1");
  var letterspanText = letterspan.textContent;
  var splittedText = letterspanText.split("");
  var convert = "";
  splittedText.forEach(function (el) {
    convert = convert + `<span>${el}</span>`;
  });
  letterspan.innerHTML = convert;

  var tl = gsap.timeline();
  tl.from("#loader h1", {
    duration: 0.7,
    delay: 0.2,
    y: 150,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from("#load2", {
    opacity: 0,
  });
  tl.from("#load1 .load1-text3 h2", {
    duration: 0.7,
    delay: -1.3,
    y: 165,
    opacity: 0,
    stagger: 0.2,

  })
  tl.to("#load1 .load1-text-inner2", {
    opacity: 0.4,
  });
  tl.to("#load1 .load1-text2 h1 span:nth-child(1)", {
    opacity: 0.6,
  });
  tl.to("#load1 .load1-text2 h1 span:nth-child(2)", {
    opacity: 0.2,
  });
  tl.to("#load1 .load1-text3 h1 span", {
    opacity: 0.2,
    stagger: 0.05,
  });
  tl.to("#loader", {
    delay: -0.5,
    y: "-100vh",
    ease: "expo.inOut",
  });
}
loader();

function scrollBTn() {
  var scroll = gsap.timeline();
  scroll.from("#page1 #scroll-btn h4", {
    y: -30,
    duration: 1.4,
    opacity: 0,
    repeat: -1,
  });
}
scrollBTn();

gsap.from("#page1 #page1-bigtext .gsapAnime", {
    y: 200,
    duration: .5,
    opacity: 0,
    stagger: {
      amount: .4
    }
})

Shery.mouseFollower({
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .9,
});


var page2inner = document.querySelector("#page2 #page2-inner", {
  
})
var cursorEnterImg = document.querySelector("#page2 #page2-inner img");
var cursorEnterIcon = document.querySelector("#page2 #page2-inner #playBtn i");
cursorEnterImg.addEventListener("mousemove", function(elem){
    cursorEnterIcon.style.left = elem.x + "px"
    cursorEnterIcon.style.top = elem.y + "px"
  })
  
  // var video = document.querySelector("#page2 #page2-inner video");
  // var flag = 0;
  // if(flag = 0){
  
  // }