// (0.) Hello world program =>
// 1st =>
// var a = "Hello world";
// console.log(a);
// 2nd =>
// alert(a);
// 3rd =>
// var msg = prompt("say hello world");
// if(msg.toLowerCase() == "hello world"){
//     console.log(`Correct! ${msg}`);
// } else {
// console.log("incorrect input");;
// }
// 4th =>
// var msg;
// do {
//   msg = prompt("say hello world");
// } while (msg.toLowerCase()!= "hello world");
// console.log(`Correct! ${msg}`);
// 5th =>
// var body = document.querySelector("body");
// body.innerText = "Hello World";
// 6th =>
// var body = document.querySelector("body");
// body.classList.add("hll");
// var hll = document.querySelector(".hll");
// hll.innerText ="Hello World"
// 7th =>
// var a = "Hello World";
// for(let i = 0; i < a.length; i++){
//     console.log(a);
// }
// 8th =>
// var a =  "Hello World".split('');
// console.log(a);
// a.forEach((elm) => {
//     console.log(elm);
// })
// 9th =>
// var a = "hello World";
// var h1 = document.createElement( 'H1' );
// document.body.appendChild(h1);
// var b = h1.innerText = "hello world";
// document.querySelector("body").prepend(a)
// 10th =>
// document.write("Hello World");



// Que.1 => Make a variable user and initialize a value "Ram" and print it on console.

// var a;
// a = "Ram";
// console.log(a);



// Que.2 => sum, mul, div, sub calculater.

// 1st =>
// var a, b;
// a = 10;
// b = 5;
// console.log("sum =", a+b);
// console.log("sub =", a-b);
// console.log("mul =", a*b);
// console.log("div =", a/b);

// 2nd =>
// let sum = (a, b) => {
//      return a + b;
// }
// console.log(sum(2, 3));

// 3rd =>

// function sum() {
//     let arr = [...arguments];
//     if (arr.length === 2) {
//         return arr[0] + arr[1];
//     }
// };
// console.log(sum(4, 6));

// 4th =>
// let arr = [23, 21, 42, 46, 35, 57, 133, 2334, 13];
// console.log(arr.reduce((a, b) => { return a+b},0));

// 5th =>
// let sum = (a, b) => {
//     let cal = [a+b, a-b, a*b, a/b];
//     return cal;
// }
// console.log(sum(2, 3));



// Que.3 => Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// Area = Square root of √s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2.
var area = function(a, b, c) {
    var s = (a+b+c)/2;
    var mul = s*(s-a)*(s-b)*(s-c);
    return Math.sqrt(mul);
}
console.log(area(5,6,7));