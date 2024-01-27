var text = document.querySelector("#text h1");
var textcontent = text.textContent;
// console.log(textcontent);

var splittedtext = textcontent.split("");
// console.log(splittedtext);

var content = "";
splittedtext.forEach(function(el) {
    content = content + `<span>${el}</span>`;
});
console.log(content);
text.innerHTML = content

gsap.from("#text h1 span", {
    y: -10,
    color: "red",
    stagger: .2,
});
// .addEventListener("mouseenter", function(){
// });