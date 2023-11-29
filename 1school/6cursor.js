var text1 = document.querySelector(".text1");
var text2 = document.querySelector(".text2");
var text3 = document.querySelector(".text3");
var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");

main.addEventListener("mousemove", function(kuchhbhi){
    cursor.style.left = kuchhbhi.x + "px";
    cursor.style.top = kuchhbhi.y + "px";
});
text1.addEventListener("mouseenter", function(){
    cursor.style.scale = 3.6;
    // text1.style.color = "red";   
});
text1.addEventListener("mouseleave", function(){
    cursor.style.scale = 1;
    text1.style.color = "white";
});

text2.addEventListener("mouseenter", function(){
    cursor.style.scale = 3.6;
    text2.style.color = "blue";
});
text2.addEventListener("mouseleave", function(){
    cursor.style.scale = 1;
    text2.style.color = "white";
})

text3.addEventListener("mouseenter", function(){
    cursor.style.scale = 3.6;
    text3.style.color = "green";
});
text3.addEventListener("mouseleave", function(){
    cursor.style.scale = 1;
    text3.style.color = "white";
})











// main.addEventListener me main ki jagah document bhi likh skte h jo poore html page pr event chalata h ya fir window bhi likh skte h jo poore window pr event chalata h.

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

// // jb html page yani document me jakr koi key press krte h to console pr hllo print ho jata h. keypress ka jb use krte h to isme hm shift, ctrl, num lock, esc, arrow up jaise keys ka use nhi kr skte h.
// document.addEventListener("keypress", function(){
//     console.log("hllo");
// })

// // jb html page yani document me koi key press krte h to console pr hllo print ho jata h.
// document.addEventListener("keydown", function(){
//     console.log("hllo");
// })

// // jb html page yani document me koi key press krke chhodne pr console pr hllo print ho jata h.
// document.addEventListener("keyup", function(){
//     console.log("hllo");
// })

// // jb aap function ko koi bhi parameter dekr usey console pr print krte h to jo event chal rha h uski sabhi properties dekhne ko milti h.
// document.addEventListener("keydown", function(kuchhbhi){
//     console.log(kuchhbhi);
// })