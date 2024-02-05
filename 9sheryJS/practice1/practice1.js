// Shery.imageEffect("Element", configurations)

Shery.imageEffect("#mainBack", {
  style: 6,
  debug: true,
  gooey: true,
});

var textEffects = document.querySelectorAll(".textEffect");
textEffects.forEach(function (el) {
  var h1s = el.querySelectorAll(".textEffect h1");
  var mainBack = document.querySelector("#mainBack");
  var index = 0;
  var flag = false;
  mainBack.addEventListener("click", function () {
    if (!flag) {
      flag = true;
      gsap.to(h1s[index], {
        top: "-100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], {

            
            top: "100%",
          });
          flag = false;
        },
      });

      index++;
      if (index === h1s.length) {
        index = 0;
      }

      gsap.to(h1s[index], {
        top: "0%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
