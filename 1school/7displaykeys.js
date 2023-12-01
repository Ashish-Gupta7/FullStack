var h1 = document.querySelector("h1");

// window.addEventListener("keypress", function(kuchhbhi){
//     console.log(kuchhbhi);
//     // h1.innerHTML = kuchhbhi.key;
//     h1.textContent = kuchhbhi.key;
// });

// window.addEventListener("keydown", function(kuchhbhi){
//     console.log(kuchhbhi);
//     h1.textContent = kuchhbhi.key;
// });

// window.addEventListener("keydown", function(kuchhbhi){
//     console.log(kuchhbhi);
//     h1.textContent = kuchhbhi.key;
// });

// space ka keyCode 32 h ye aap document me space press kare aur keybourdEvent pr keyCode dekh skte h kyuki space press krne pr document pr kuchhh bhi print nhi hota to hmm space press krne pr document pr SPACE ko print karayenge iske liye hmme keybourdEvent se keyCode ki jarurat padegi.

window.addEventListener("keydown", function(kuchhbhi){
    if(kuchhbhi.keyCode == 32){
        h1.textContent = "SPACE"
        console.log(kuchhbhi);
    }else{
        console.log(kuchhbhi);
        h1.textContent = kuchhbhi.key;
    };
});