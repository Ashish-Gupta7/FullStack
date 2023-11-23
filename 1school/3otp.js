var btn = document.querySelector("button");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");

btn.addEventListener("click", function(){
    var num1 = Math.floor(Math.random()*10);
    var num2 = Math.floor(Math.random()*10);
    var num3 = Math.floor(Math.random()*10);
    var num4 = Math.floor(Math.random()*10);

    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    box1.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    box2.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    box3.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    box4.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    box1.innerHTML = num1;
    box2.innerHTML = num2;
    box3.innerHTML = num3;
    box4.innerHTML = num4;
})

var votp = document.querySelector(".votp");
var otpmain = document.querySelector(".otpmain");
var otpbox1 = document.querySelector(".optbox1");
var otpbox2 = document.querySelector(".optbox2");
var otpbox3 = document.querySelector(".optbox3");
var otpbox4 = document.querySelector(".optbox4");

votp.addEventListener("click", function(){
    if (box1 === otpbox1) {
        "Verified";
    }else{
        "Not Verified";
    }
})