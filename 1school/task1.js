var bulb = document.querySelector("#bulb");
var btn = document.querySelector("#btn");

var qw = 0;

btn.addEventListener("click", function(){
    if (qw == 0) {
        bulb.style.backgroundColor = "yellow";
        bulb.style.borderColor = "black";
        bulb.innerHTML = "ON";
        btn.innerHTML = "ON"
        btn.style.backgroundColor = "yellow"
        console.log("if");
        qw = 1;
    }else{
        bulb.style.backgroundColor = "white";
        bulb.style.borderColor = "rgb(44, 38, 38)";
        bulb.innerHTML = "OFF";
        btn.innerHTML = "OFF"
        btn.style.backgroundColor = "white"
        console.log("else");
        qw = 0;
    }
})