// jb window ko scroll kiya jaye to ye function chala dena.

var scroll = document.querySelector("#scroll");
window.addEventListener("scroll", function(){
    scroll.classList.toggle("addedBtn", window.scrollY > 500)

    // jb window ko y-axis pr 500 ya usse uper tk scroll kiya jaye to addeBtn ko #scroll me ek class ke roop me add kr de.

})


// neeche likhe iss addEventListener "click" ke alava ek aur method h uske liye =>
// function backToTop(){
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// }
// ye likhna padta aur html me ek attribute onclick = "backToTop()" likhna padta.

scroll.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})