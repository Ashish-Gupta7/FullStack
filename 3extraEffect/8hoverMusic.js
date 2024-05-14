var audio = document.getElementById("myAudio");
var h3 = document.querySelector("#main h3");

h3.addEventListener("mouseover", function() {
    audio.play();
});

h3.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});

// Modern browsers ki security policies ki wajah se, bina user interaction (jaise click, touch, etc.) ke audio play karna directly page load hone par allowed nahi hai. Yeh policy users ko unwanted aur surprise audio playback se protect karne ke liye implement ki gayi hai.