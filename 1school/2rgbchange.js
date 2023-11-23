var btn = document.querySelector("button");
var box = document.querySelector(".box");

btn.addEventListener("click", function(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    console.log(red, green, blue);
})