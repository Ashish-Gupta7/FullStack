// Exercise1 =>

// let p = document.querySelector("p");
// let attr = p.getAttribute("class");
// // console.log(attr);
// // p.setAttribute("class", "newPara");    // setAttribute use karne ki wajah se yaha class overwrite kr jati h mtlb class para ht jati h jb class newPara ko use krte h to, lekin que. ke anusar hm chahte h ki dono classes execute ho koi bhi ek doosre ko overwrite n kare. iske liye hi classList ko use karege.

// p.classList.add("newPara");    // p tag me ek aur class newPara ko add kiya gya h.

// Exercise2 =>

// let btn1 = document.querySelector(".btn1");
// let body = document.querySelector("body");
// let mode = "light";

// btn1.addEventListener("click", () => {
//     if(mode === "light"){
//         mode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else{
//         mode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(mode);
// });


// Exercise3 => guess the number
let number = prompt("Enter a number : ");
let random = Math.floor(Math.random() * number) + 1;

let guess = prompt("guess the number or enter 'quit' for quit the game!");

while(true) {
    if(guess == "quit") {
        console.log("Exit!");
        break;
    }
    if(guess == random) {
        console.log("congrates, you guessed correct number and the number was", random);
        break;
    } else if(guess < random) {
        guess = prompt("hint : your entered number is smaller than that number! please guess again! or enter 'quit' for quit the game!");
    } else {
        guess = prompt("hint : your entered number is greater than that number! please guess again! or enter 'quit' for quit the game!");
    }
}