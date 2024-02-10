function circularText() {
    var circle = document.querySelector("#videotext #circle h3");
    var circleText = circle.innerHTML;
    var splittedcircle = circleText.split("");
    var contentCircle = "";
    splittedcircle.forEach(function (cir) {
        contentCircle = contentCircle + `<span>${cir}</span>`
    });
    circle.innerHTML = contentCircle;
    splittedcircle.forEach(function (char, i) {
        var span = document.querySelector("#videotext #circle h3 span");
        span.style.transform = `rotate(${i * 10}deg)`;
        span.textContent = char;
        circle.appendChild(span);
    });
}
circularText();