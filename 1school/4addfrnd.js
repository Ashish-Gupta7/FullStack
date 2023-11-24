var btn = document.querySelector("button");
var frnd = document.querySelector(".frnd");

var check = 0;

btn.addEventListener("click", function(){
    if(check == 0){
    frnd.innerHTML = "sent...";
    frnd.style.color = "white";
    btn.innerHTML = "cancel";
    setTimeout(function(){
        frnd.innerHTML = "Friend 💖";
        frnd.style.color = "rgb(100, 255, 100)";
        btn.innerHTML = "Cancel";
        check = 1;
    }, 3500)}
    else{
        frnd.innerHTML = "Make a mistake";
        frnd.style.color = "red";
        btn.innerHTML = "Removing...";
        check = 0;
        setTimeout(function(){
            frnd.innerHTML = "Know Everyone";
            frnd.style.color = "rgb(255, 194, 103)";
            btn.innerHTML = "Add Friend";
        }, 2000)
    }
})
