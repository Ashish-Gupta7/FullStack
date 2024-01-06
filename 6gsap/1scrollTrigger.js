// Sabhi boxes ko ek sath animate krne ke liye.
// gsap.from("#page1 .box, #page2 .box, #page3 .box", {
//     rotate: 360,
//     scale: -1,
//     duration: 2,
//     delay: 1,
// })

// scollTrigger =>
// gsap.from("#page1 .box", {
//     rotate: 360,
//     scale: -1,
//     duration: 2,
//     delay: 1,
// });
// gsap.from("#page2 .box", {
//     rotate: 360,
//     scale: -1,
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger : "#page2 .box",  // trigger usey krte h jise animate krna h.
//         scroller: "body",       // trigger ka main parent. most of the time body hi select krte h.
//         markers: true,  // start and end point of animation.
//     }
// });
// gsap.from("#page3 .box", {
//     rotate: 360,
//     scale: -1,
//     duration: 2,
//     delay: 1,
//     scrollTrigger: "#page3 .box"    // direct using scrollTrigger property.
// });
// gsap.from("#page4 .box", {
//     rotate: 360,
//     scale: -1,
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger: "#page4 .box",
//         scroller: "body",
//         markers: true,
//         start: "top 50%", 
//         end: "bottom 175px"
//     }
// });
// gsap.from("#page5 .box", {
//     rotate: 360,
//     scale: -1,
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger: "#page5 .box",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "175px",
//         scrub: 2,   // smooth scrubbing, takes 2 second to "catch up" to the scrollbar. smoothness between 1 to 5.
//     }
// });
// gsap.from("#page6 .box", {
//     rotate: 360,
//     scale: -1,
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger: "#page6 .box",
//         scroller: "body",
//         markers: {
//             startColor: "white", 
//             endColor: "white", 
//             fontSize: "18px", 
//             fontWeight: "bold", 
//             indent: 200,
//         },      // markers ko bhi edit kr skte h.
//         start: "top 50%",
//         end: "175px",
//         scrub: 2,   
//         pin: true, // pin the trigger element while active.

//     }
// });
// gsap.to("#page8 img", {
//     width: "100%",
//     height: "100%",
//     duration: 1.5,
//     delay: .5,
//     scrollTrigger: {
//         trigger: "#page8",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "bottom 0%",
//         scrub: 3,
//         pin: true, // pin the trigger element while active.
//     }
// });

gsap.to("#page9 .page9-circle", {
    duration: 1,
    scale: 2,
    delay: .2,
    scrollTrigger: {
        trigger: "#page9",
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "bottom 0",
        scrub: 2,
        pin: true
    }
});