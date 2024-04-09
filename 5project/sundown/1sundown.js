var forth = document.querySelector(".forth");
var fixedimg = document.querySelector(".fixedimg");

forth.addEventListener("mouseenter", function(){
    fixedimg.style.display = "block";
});
forth.addEventListener("mouseleave", function(){
    fixedimg.style.display = "none";
});

var hoverimg = document.querySelectorAll(".hoverimg");
hoverimg.forEach(function(kuchh){
    // console.log("hhh");     // loop ka size 7 h to ye 7 bar chlega.
    // console.log(kuchh);
    kuchh.addEventListener("mouseenter", function(){
        var dataimg = kuchh.getAttribute("data-img");
        // console.log(dataimg);
        fixedimg.style.backgroundImage = `url(${dataimg})`;
    });
});
var vid1 = document.querySelector("#vid1");
vid1.addEventListener("mouseenter", function(){
    var vid1video = vid1.getAttribute("data-img");
    fixedimg.style.autoplay = `url(${dataimg})`;
})