function splitting1() {
    var split1 = document.querySelectorAll(".split1");
    split1.forEach(function (el1) {
        var text1 = el1.textContent;
        var splittedtext1 = text1.split("");
        var content1 = "";
        splittedtext1.forEach(function (elem1) {
            content1 += `<span>${elem1}</span>`;
        })
        el1.innerHTML = content1;
    });
}
splitting1();

var main1 = document.querySelector("#main1");
var isAnimating = false;
main1.addEventListener("mouseenter", function () {
    if (!isAnimating) {
        isAnimating = true;
        var tl1 = gsap.timeline();
        tl1.to("#main1 h1 span", {
            opacity: 0,
            duration: .5,
            stagger: {
                amount: 1
            },
        }, "same")
        tl1.to("#main1 h2 span", {
            opacity: 1,
            delay: .3,
            duration: .5,
            stagger: {
                amount: 1
            },
            onComplete: function () {
                isAnimating = false;
            }
        }, "same")
    }
})

main1.addEventListener("mouseleave", function () {
    if (!isAnimating) {
        isAnimating = true;
        var tl1 = gsap.timeline();
        tl1.to("#main1 h2 span", {
            opacity: 0,
            duration: .5,
            stagger: {
                amount: 1
            },
        }, "any")
        tl1.to("#main1 h1 span", {
            opacity: 1,
            delay: .3,
            duration: .5,
            stagger: {
                amount: 1
            },
            onComplete: function () {
                isAnimating = false;
            }
        }, "any")

    }
})
// Gsap me kisi bhi do elements ko same variable Dene pr vo elements ek hi time pr work krte h. Ye variable un dono ke last me curly bracket ke phle double quotes me likhte h. jaisa ki yaha "same" ko likha gya h.