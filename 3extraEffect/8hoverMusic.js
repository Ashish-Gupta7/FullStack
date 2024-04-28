var audio = document.getElementById("myAudio");
var h3 = document.querySelector("#main h3");

h3.addEventListener("mouseover", function() {
    audio.play();
});

h3.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});