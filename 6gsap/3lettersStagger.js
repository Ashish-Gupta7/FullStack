// const page2Paragraph = document.querySelector("#page2 p");
// const page2ParaText = page2Paragraph.textContent;
// const page2ParaSplitted = page2ParaText.split("");
// // split ""(nothing) ka mtlb hr ek letter ko alag-alag krdo.

// var page2SpanAddHtml = "";
// page2ParaSplitted.forEach(function(elem2){
//     page2SpanAddHtml = page2SpanAddHtml + `<span>${elem2}</span>`;
// });
// page2Paragraph.innerHTML = page2SpanAddHtml;

// gsap.to("#page2 p span", {
//     duration: 1,
//     color: "red",
//     stagger: .1,
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "body",
//         pin: true,
//         scrub: 3,    
//         start: "top 0%",
//         end: "bottom 0%"
//     }
// });

// const page3Para = document.querySelector("#page3 p");
// const page3ParaText = page3Para.textContent;
// const page3ParaSplitted = page3ParaText.split(" ");
// // yaha split me " "(space) h iska mtlb poore paragraph ko space ke through split kr de.

// var page3SpanAddHtml = "";
// page3ParaSplitted.forEach(function(elem3){
//     page3SpanAddHtml = page3SpanAddHtml + `<span>${elem3} </span>`;
// });
// page3Para.innerHTML = page3SpanAddHtml;

// gsap.to("#page3 p span", {
//     color: "royalblue",
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: "#page3",
//         scroller: "body",
//         pin: true,
//         start: "top 0%",
//         end: "bottom 0%",
//         scrub: true
//     }
// })

// const page4Para = document.querySelector("#page4 p");
// const page4ParaText = page4Para.textContent;
// const page4ParaSplitted = page4ParaText.split("a");
// // yaha split me "a" h iska mtlb poore paragraph ko "a" ke through split kr de.

// var page4SpanAddHtml = "";
// page4ParaSplitted.forEach(function(elem4){
//     page4SpanAddHtml = page4SpanAddHtml + `<span>${elem4} </span>`;
// });
// page4Para.innerHTML = page4SpanAddHtml;

// gsap.to("#page4 p span", {
//     color: "royalblue",
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: "#page4",
//         scroller: "body",
//         pin: true,
//         start: "top 0%",
//         end: "bottom 0%",
//         scrub: true
//     }
// })

// const page1H1 = document.querySelector("#page1 h1");
// const page1H1Text = page1H1.textContent;
// const page1H1TextSplitted = page1H1Text.split("");

// var page1SpanAddHtml = "";
// page1H1TextSplitted.forEach(function(elem1){
//     page1SpanAddHtml = page1SpanAddHtml + `<span>${elem1}</span>`;
// });
// page1H1.innerHTML = page1SpanAddHtml;

// gsap.from("#page1 h1 span", {
//     y: -20,
//     color:"green",
//     stagger: .1,
// });