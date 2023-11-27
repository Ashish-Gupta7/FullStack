var text = document.querySelector(".text");
var cursor = document.querySelector(".cursor");

// // jb html page yani document me enter krte h to console pr hllo print ho jata h.
// document.addEventListener("mouseenter", function(){
//     console.log("hllo");
// })
// // jb html page yani document me se leave krte h to console pr hllo print ho jata h.
// document.addEventListener("mouseleave", function(){
//     console.log("hllo");
// })
// // jb html page yani document me mouse ko move krte h to console pr hllo print ho jata h.
// document.addEventListener("mousemove", function(){
//     console.log("hllo");
// })
// jb html page yani document me jakr koi key press krte h to console pr hllo print ho jata h. keypress ka jb use krte h to isme hm shift, ctrl, num lock, esc, arrow up jaise keys ka use nhi kr skte h.
document.addEventListener("keypress", function(){
    console.log("hllo");
})