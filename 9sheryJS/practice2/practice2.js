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

