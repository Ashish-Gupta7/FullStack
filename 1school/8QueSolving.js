// Que.1 => Make a variable user and initialize a value "Ram" and print it on console.

// var a;
// a = "Ram";
// console.log(a);

// Que.2 => Make two variables and print their sum, mul, div, sub.

// var a, b;
// a = 10;
// b = 5;
// console.log("sum =", a+b);
// console.log("sum =", a-b);
// console.log("sum =", a*b);
// console.log("sum =", a/b);

// Que.3 => Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 

// Area = root{s.(s-a).(s-b).(s-c)}
// s = ( a + b + c ) / 2
// var a, b, c, s, A, Area;
// a = 5; b = 6; c = 7;

// s = ( a + b + c ) / 2;
// Area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log(Area);

// Que.4 => Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then print triple their sum.

// var a, b;
// a = Number(prompt("Enter a number"));
// b = Number(prompt("Again, Enter a number"));
// if(a === b){
//     console.log(3 * (a + b));
// } else {
//     console.log(a + b);
// }

// Que.5 => Accept a number from a user and print it on console.

// var a;
// a = Number(prompt("Enter a number"));
// console.log(a);

// Que.6 => Ask a user his/her name and say hello (eg. "Hello Sarthak").

// var Name;
// Name = prompt("Enter your name");
// console.log("Hello", Name);

// Que.7 => Accept two integers from user and print the sum
//    Ex - The sum of 45 & 12 = 57

// var a, b;
// a = Number(prompt("Enter a number"));
// b = Number(prompt("Again, Enter a number"));
// console.log(`The sum of ${a} & ${b} = ${a+b}`);

// Que.8 => Accept the User's name, age and print in following manner
//    Ex - Hello Shery, you are 12 years old.

// var a, b;
// a = prompt("Enter your name");
// b = prompt("Enter your age");
// console.log(`Hello ${a}, you are ${b} years old.`);

// Que.9 => Accept two numbers and print the greatest between them.

// var a, b;
// a = Number(prompt("Enter a number"));
// b = Number(prompt("Again, Enter a number"));
// if(a > b){
//     console.log(a);
// } else{
//     console.log(b);
// }

// Que.10 => Accept the gender from the user (M or F) and print the respective greeting message
//  Ex - Good Morning Sir (on the basis of gender)

// var a;
// a = prompt("Enter your gender");
// if(a === "male" || a === "Male" || a === "M" || a === "m"){
//     console.log("Good Morning Sir");
// } else if(a === "female" || a === "Female" || a === "F" || a === "f") {
//     console.log("Good Morning Ma'am");
// } else{
//     console.log("Invailid input, please enter your gender (eg. male/Male/M/m)");
// }

// Que.11 => Extend the previous program and handle the wrong inputs.Print Good Morning sir for input m or M & Good morning Mam for input F or f else print Wrong Input.    ===>>>    Que.10

// Que.12 => Accept an integer and check whether it is an even number or odd.

// var a = Number(prompt("Enter a number"));
// if( a % 2 === 0 ){
//     console.log("This is a Even number");
// } else{
//     console.log("This is a Odd number");
// }

// Que.13 => Accept name and age from the user. Check if the user is a valid voter or not.
//   Valid - Hello Shery, You are a valid voter.
//   Invalid - Sorry Shery, you can't cast the vote.

// var Name, age;
// Name = prompt("Enter your name");
// age = Number(prompt("Enter your age"));
// if(age >= 18){
//     console.log(`Hello ${Name}, You are a valid voter.`);
// } else{
//     console.log(`Sorry ${Name}, You can't cast the vote, after ${18 - age} years you are eligible for votting.`);
// }

// Que.14 => extend preious program and Print after how many years the user will be eligible.        ===>>>     Que.13

// Que.15 => Write a JavaScript program to find the largest of three given integers.

// var a, b, c;
// a = Number(prompt("Enter a number for a :"));
// b = Number(prompt("Enter a number for b :"));
// c = Number(prompt("Enter a number for c :"));
// if(a > b && a > c){
//     console.log(`The largest number is a = ${a}`);
// } else if(b > c && b > a){
//     console.log(`The largest number is b = ${b}`);
// } else if(a = b = c){
//     console.log("please enter different numbers");
// } else{
//     console.log(`The largest number is c = ${c}`);
// }

// Que.16 => ask a user his bijli ki units and if it is more than 100 unit calculate bill on the basis of 10 rs/ unit, if more than 50 units 8 rs/unit and if less 7 rs/unit.

// var a;
// a = Number(prompt("Enter your bijli units"));
// if(a >= 100){
//     console.log(`Bijli bill = ${a * 10}`);
// } else if(a > 50 && a < 100){
//     console.log(`Bijli bill = ${a * 8}`);
// } else if(a < 50 && a > 0){
//     console.log(`Bijli bill = ${a * 7}`);
// } else {
//     console.log("Please, Enter valid bijli units.");
// }

// Que.17 => ask a user his salary and if it is more than 1 lakh 30% tax if more than 70k 20% tax and if more than 50k 10% tax and less than that no tax and print tax amount and amount left after paying tax.

// var a = Number(prompt("Enter your salary :"));
// if(a >= 100000){
//     let amt1l = a * 0.3;
//     console.log(`tax amount = ${amt1l} and amount left after paying = ${a - amt1l}`);
// } else if(a >= 70000 && a < 100000){
//     let amt70k = a * 0.2;
//     console.log(`tax amount = ${amt70k} and amount left after paying = ${a - amt70k}`);
// } else if(a > 50000 && a < 70000){
//     let amt50k = a * 0.1;
//     console.log(`tax amount = ${amt50k} and amount left after paying = ${a - amt50k}`);
// } else if(a <= 50000 && a > 0){
//     console.log("No taxes");
// } else {
//     console.log("Enter valid salary");
// }

// Que.18 => Ask a user 3 sides of triangle and check
// equilateral triangle
// isoscales trianle
// scalene triangle

// var side1, side2, side3;
// side1 = Number(prompt("Enter side1 ="));
// side2 = Number(prompt("Enter side2 ="));
// side3 = Number(prompt("Enter side3 ="));

// if(isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0){
//     console.log("Please enter valid positive numbers for the side lengths.");
// } else if(side1 === side2 || side2 === side3){
//     console.log("This is a isoscales trianle.");
// } else if(side1 != side2 != side3){
//     console.log("This is a scalene triangle");
// } else if(side1 === side2 === side3){
//     console.log("This is a equilateral triangle.");
// }

// Que.19 => Accept a year and check if it a leap year or not (google to find out what's a leap year).

// var a;
// a = Number(prompt("Enter any year:"));
// if(isNaN(a) || a <= 0){
//     console.log("Please, Enter valid year.");
// } else if((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0 ){
//     console.log(`${a} is a Leap Year.`);
// } else{
//     console.log(`${a} is not a Leap Year.`);
// }

// Que.20 => You are given a variable marks. Your task is to print:
// - A+ if marks is greater than 90.
// - A if marks is greater than 80 and less than or equal to 90.
// - B+ if marks is greater than 70 and less than or equal to 80.
// - B if marks is greater than 60 and less than or equal to 70.
// - C if marks is greater than 45 and less than or equal to 60.
// - D if marks is greater than or equal to 33 and less than or equal to 45.
// - F if marks is less than 33.

// var a = Number(prompt("Enter your Marks:"));
// if(isNaN(a) || a > 100 || a < 0){
//     console.log("Please, Enter your valid Marks");
// } else if(a > 90){
//     console.log("A+");
// } else if(a > 80 && a <= 90){
//     console.log("A");
// } else if(a > 70 && a <= 80){
//     console.log("B+");
// } else if(a > 60 && a <=70){
//     console.log("B");
// } else if(a > 45 && a <= 60){
//     console.log("C");
// } else if(a >= 33 && a <= 45){
//     console.log("D");
// } else{
//     console.log("F");
// }

// Que.21 => Accept an integer and Print hello world n times.

// var a = parseInt(prompt("Enter a number"));
// if(a > 0){
//     for(let i = 0; i <= a; i++){
//         console.log("Hello World");
//     }
// } else{
//     console.log("Enter a positive number.");
// }

// Que.22 => Print natural number up to n. 

// var a = parseInt(prompt("Enter a number:"));
// if(a > 0){
//     console.log(`Natural Numbers under ${a}`);
//     for(let i = 1; i <= a; i++){
//         console.log(i);
//     }
// } else{
//     console.log("Please, Enter a natural number");
// }

// Que.23 => Reverse for loop. Print n to 1.

// var a = parseInt(prompt("Enter a number"));
// if(a > 0){
//     console.log(`Natural Numbers under ${a}`);
//     for(let i = a; i >= 1; i--){
//         console.log(i);
//     }
// } else{
//     console.log("Please, Enter a natural number");
// }

// Que.24 => Take a number as input and print its table
//    5 * 1 = 5
//    5 * 2 = 10 ... up to 10 terms

// var a = parseInt(prompt("Enter a number:"));
// if(!isNaN(a)){
// 	for(let i = 1; i <= 10; i++){
// 		let table = a * i;
// 		console.log(`${a} * ${i} = ${table}`);
// 	}
// } else{
// 	console.log("Please, Enter a positive integer number.");
// }

// Que.25 => Sum up to n terms.
// The formula to find the sum of n terms in AP is Sn = n/2 (2a+(n−1)d), in which a = first term, n = number of terms, and d = common difference between consecutive terms. Actual formula => n/2(n+1)

// Using formula =>
// var n = parseInt(prompt("Enter a number:"));
// if(!isNaN(n) && n > 0){
// 	let sum = (n/2) * (n+1);
// 	console.log(sum);
// } else{
// 	console.log("Please, Enter a positive integer number.");
// }

// Using loop =>
// var n = parseInt(prompt("Enter a number:"));
// if(!isNaN(n) && n > 0){
// 	var sum = 0;
// 	for(let i = 1; i <= n; i++){
// 		sum = sum + i;
// 	}
// 	console.log(`Sum of the first ${n} natural numbers = ${sum}`);
// } else{
// 	console.log("Invalid Input, Please Enter valid number.");
// }

// Que.26 => Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Sheryians" instead of the number and for multiples of five print "coding". For numbers multiples of both three and five print "Sheryians coding school".

// var n = parseInt(prompt("Enter a number which is greater than 0 and less than 100 :"));
// if(!isNaN(n) && n > 0 && n < 101){
// 	for(let i = 1; i <= n; i++){
// 		if(i % 15 === 0){
// 			console.log(`${i} = Sheryians Coding School`);
// 		} else if (i % 5 === 0){
// 			console.log(`${i} = Coding`);
// 		} else if(i % 3 === 0){
// 			console.log(`${i} = Sheryians`);
// 		} else{
// 			console.log(i);
// 		}
// 	}
// } else{
// 	console.log("Invalid input, Please Enter valid number which is between 0 and 100.");
// }

// Que.27 => Factorial of a number.

// var n = parseInt(prompt("Enter a number which is greater than 0:"));
// if(!isNaN(n) && n > 0){
// 	var factorial = 1;
// 	for(let i = 1; i <= n; i++){
// 		factorial = factorial * i;
// 	}
// 	console.log(factorial);
// } else{
// 		console.log("Invalid input, Please Enter valid number.");
// }

// Que.28 => Print the sum of all even & odd numbers in a range seperately.

// var n = parseInt(prompt("Enter a number:"));
// if(!isNaN(n) && n > 0){
// 	var evenSum = 0, oddSum = 0;
// 	for(let i = 1; i <= n; i++){
// 		if(i % 2 === 0){
// 			console.log(`Even Number = ${i}`);
// 			evenSum = Number(evenSum + i);
// 		} else{
// 			console.log(`Odd Numbers = ${i}`);
// 			oddSum = Number(oddSum + i);
// 		}
// 	}
// 	console.log(`Sum of First ${n} even natural numbers = ${evenSum}`);
// 	console.log(`Sum of First ${n} Odd natural numbers = ${oddSum}`);
// } else{
// 	console.log("Invalid input, Please Enter valid number.");
// }

// Que.29 => Print all the numbers which are either divisible by 3 or 5 in a range.

// var n = parseInt(prompt("Enter a number:"));
// if(!isNaN(n) && n > 0){
// 	for(let i = 1; i <= n; i++){
// 		if(i % 3 === 0 || i % 5 === 0){
// 			console.log(i);
// 		}
// 	}
// } else{
//  	console.log("Invalid input, Please Enter valid number.");
// }

// Que.30 => Print all the factors of a number.

// var n = parseInt(prompt("Enter a number:"));
// if(!isNaN(n) && n > 0){
// 	for(let i = 1; i <= n; i++){
// 		if(n % i === 0){
// 			console.log(`Factorial of ${n} = ${i}`);
// 		}
// 	}
// } else{
// 	console.log("Invalid input, Please Enter valid number.");
// }

// Que.31 => Print the sum of all factors of a number, 50 - 1 + 2 + 5 + 10 + 25 = 43.

// var n = parseInt(prompt("Enter a number:"));
// if(!isNaN(n) && n > 0){
// 	var sum = 0;
// 	for(let i = 1; i <= n; i++){
// 		if(n % i === 0){
// 			console.log(i);
// 			sum = sum + i;
// 		}
// 	}
// 	console.log(`Sum of all factors of ${n} = ${sum}`);
// } else{
// 		console.log("Invalid input, Please Enter valid number.");
// }

// Que.32 => Accept a number and check if it a perfect number or not.
//   A number whose sum of factors(excluding number itself)  = Number 
//   Ex -  6 = 1, 2, 3 = 6

// var n = parseInt(prompt("Enter a number:"));
// if(!isNaN(n) && n > 0){
// 	var sum = 0;
// 	for(let i = 1; i <= n; i++){
// 		if(n % i === 0){
// 			console.log(i);
// 			sum = sum + i;
// 		}
// 	}
// 	console.log(`Sum = ${sum}`);
// 	if(sum === n * 2){
// 		console.log(`${n} is a perfect number.`);
// 	} else{
// 		console.log("This number is not a perfect number.");
// 	}
// } else{
// 	console.log("Invalid input, Please Enter valid number.");
// }

// Que.33 => ask a user string and a number and addon the string n number of times (if number is 3 and string is "hey" print "heyheyhey").

// var str, n;
// str = prompt("Enter any text:");
// n = parseInt(prompt("Enter a number:"));
// if(isNaN(str) && n > 0 && !isNaN(n)){
// 	var result = "";
// 	for(let i = 1; i <= n; i++){
// 		result = result + str;
// 	}
// 	console.log(`"${result}"`);
// } else{
// 	console.log("Invalid input, Please Enter valid things.");
// }

// Que.34 => Seprate each digit of a number and print it on the new line.

// var a = parseInt(prompt("Enter a number:")).toString();
// if(!isNaN(a)){
// 	for(let i = 0; i <= a.length; i++){
// 		console.log(a[i]);
// 	}
// } else {
//     console.log("Invalid input, Please enter a valid number.");
// }

// Que.35 => Check if the number is Prime or not.

// var n = parseInt(prompt("Enter a number:"));
// function checkPrimeNumber() {
// 	if (!isNaN(n) && n > 0) {
// 		if (n === 1) {
// 			console.log(`${n} is neither prime number nor composite number.`);
// 		} else if (true) {
// 			var result;
// 			for (let i = 2; i < n; i++) {
// 				if (n % i === 0) {
// 					result = `${n} is not a prime Number.`;
// 					break;
// 				} else {
// 					result = `${n} is a prime Number.`;
// 				}
// 			}
// 			console.log(result);
// 		}
// 	} else {
// 		console.log("Invalid input, Please enter a valid number Or negative numbers are not a prime number.");
// 	}
// }
// checkPrimeNumber();