function menuPageAnime() {

    var menuBtn = document.querySelector("#main #navPage nav button");
    var menuClick = document.querySelector("#main #menu-click");
    var menuClickInner = document.querySelector("#main #menu-click #menu-click-inner");
    var homePage = document.querySelector("#main #menu-click #homePage");
    var page1 = document.querySelector("#main #menu-click #menu-click-inner .page1");
    var page2 = document.querySelector("#main #menu-click #menu-click-inner .page2");
    var page3 = document.querySelector("#main #menu-click #menu-click-inner .page3");
    var page4 = document.querySelector("#main #menu-click #menu-click-inner .page4");
    var page5 = document.querySelector("#main #menu-click #menu-click-inner .page5");

    var flag = 0
    var isAnimating = false
    menuBtn.addEventListener("click", function () {
        if (!isAnimating) {
            isAnimating = true;
            if (flag == 0) {
                flag = 1
                var tl = gsap.timeline({ onComplete: () => isAnimating = false });
                tl.to(homePage, {
                    clipPath: "polygon(8% 20%, 92% 20%, 100% 100%, 0% 100%)",
                })
                tl.to(homePage, {
                    clipPath: "polygon(8% 20%, 92% 20%, 92% 100%, 8% 100%)",
                })
                tl.to(homePage, {
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                    // borderRadius: 10,
                    rotate: "-23.4deg",
                    top: "32.9%",
                    left: "20%",
                })
                tl.to(homePage, {
                    display: "none"
                }, "page")
                tl.to(page1, {
                    opacity : 1,
                }, "page")
                tl.set([page2, page3, page4, page5], {
                    zIndex : 0
                })
                tl.to(menuClickInner, {
                    display: "block"
                }, "page")
                tl.to("#menu-click .page1 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 1
                })
                tl.to(page2, {
                    rotate: "-19deg",
                    top: "36%",
                    left: "33.5%",
                })
                tl.to("#menu-click .page2 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 1
                })
                tl.to(page3, {
                    rotate: "-13.8deg",
                    top: "28.7%",
                    left: "37%"
                })
                tl.to("#menu-click .page3 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 1
                })
                tl.to(page4, {
                    rotate: "-8.6deg",
                    top: "23%",
                    left: "42%"
                })
                tl.to("#menu-click .page4 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 1
                })
                tl.to(page5, {
                    rotate: "-3.2deg",
                    top: "19.8%",
                    left: "47%"
                })
                tl.to("#menu-click .page5 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 1
                })
                tl.to(menuBtn, {
                    innerHTML: "close"
                })

            } else {
                flag = 0
                var tlr = gsap.timeline({ onComplete: () => isAnimating = false });
                tlr.to("#menu-click .page5 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 0
                })
                tlr.to(page5, {
                    rotate: "-3.2deg",
                    top: "150%",
                    left: "47%",
                    zIndex: 100,
                }, "pageReturn")
                tlr.to("#menu-click .page4 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 0
                })
                tlr.to(page4, {
                    rotate: "-8.6deg",
                    top: "140%",
                    left: "42%",
                    zIndex: 101,
                    delay: ".2"
                }, "pageReturn")
                tlr.to("#menu-click .page3 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 0
                })
                tlr.to(page3, {
                    rotate: "-13.8deg",
                    top: "130%",
                    left: "37%",
                    zIndex: 102,
                    delay: ".4"
                }, "pageReturn")
                tlr.to("#menu-click .page2 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 0
                })
                tlr.to(page2, {
                    rotate: "-19deg",
                    top: "120%",
                    left: "33.5%",
                    zIndex: 103,
                    delay: ".6"
                }, "pageReturn")
                tlr.to(menuBtn, {
                    innerHTML: "MENU"
                })

                tlr.to("#menu-click .page1 h3", {
                    delay: -.5,
                    duration: .3,
                    opacity: 0
                }, "homeReturn")
                tlr.to(page1, {
                    opacity: 0
                }, "homeReturn")
                tlr.to(homePage, {
                    display: "block",
                    rotate: "0deg",
                    top: "0%",
                    left: "0%",
                }, "homeReturn")
                tlr.to(homePage, {
                    clipPath: "polygon(8% 20%, 92% 20%, 100% 100%, 0% 100%)",
                })
                tlr.to(homePage, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                })
            }
        }
    })
}
menuPageAnime();