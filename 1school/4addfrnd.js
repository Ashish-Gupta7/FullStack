var btn1 = document.querySelector(".button1");
var frnd1 = document.querySelector(".frnd1");

var check = 0;

btn1.addEventListener("click", function () {
    if (check == 0) {
        frnd1.innerHTML = "sent...";
        frnd1.style.color = "white";
        btn1.innerHTML = "cancel";
        setTimeout(function () {
            frnd1.innerHTML = "Friend 💖";
            frnd1.style.color = "rgb(100, 255, 100)";
            btn1.innerHTML = "Cancel";
            check = 1;
        }, 3500)
    }
    else {
        frnd1.innerHTML = "Make a mistake";
        frnd1.style.color = "red";
        btn1.innerHTML = "Removing...";
        check = 0;
        setTimeout(function () {
            frnd1.innerHTML = "Know Everyone";
            frnd1.style.color = "rgb(255, 194, 103)";
            btn1.innerHTML = "Add Friend";
        }, 2000)
    }
})


