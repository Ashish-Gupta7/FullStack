var forth = document.querySelector(".forth");
var dataimghover = document.querySelector(".dataimghover");
var hoverimg = document.querySelectorAll(".hoverimg");

    
hoverimg.forEach(function(e){   
    e.addEventListener("mouseenter", function(){
        var img = e.getAttribute("data-img");
        dataimghover.style.backgroundImage = `url(${img})`;
        console.log(e);
    });
});