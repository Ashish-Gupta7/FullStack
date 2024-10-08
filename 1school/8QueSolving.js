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

// Using Recursion => The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function.
// var number = prompt("Enter a number: ");
// var fact = 1;
// if(number !== null && number !== ""){    // ye check karega ki user ne koi number enter kiya ya nhi.
//     function factorial(n){
//         if(n > number){
//             return;    // ye tb tk run nhi hoga jb tk ki n ki value user dwara diye gaye number se bada n ho jae.
//         }
//         fact = fact * n;
//         console.log(`${n} x ${fact} = ${fact}`);
//         n++;
//         factorial(n);  // ye n++ ko uper function me lekr jayega.
//     }
//     factorial(1);
// } else{
//     console.log("Please, Enter a number: ");
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

// Que.36 => Swap two Numbers Using temporary Variable & Without Temporary Variable.
// var a = prompt("Enter a number");
// var b = prompt("Enter a number");
// console.log(`The value of a is: ${a} and The value of b is: ${b}`);
// var temp;
// temp = a;
// a = b;
// b = temp;
// console.log(`Swapped Value => The value of a is: ${a} and The value of b is: ${b}`);

// Que.37 => Convert Kilometers to Miles.
// var a = prompt("Enter kilometer");
// var b = a * 0.621371;
// console.log(`You entered in kilometers: ${a} \nConverted into Miles: ${b}`);

// Que.38 => Convert Celsius to Fahrenheit using.
// var celsius = prompt("Enter celsius value");
// var fahrenheit = (9/5 * celsius) + 32;
// console.log(`You entered in celsius: ${celsius} Degree \nConverted into Fahrenheit: ${fahrenheit} Degree`);

// Que.39 => Check if a number is Positive, Negative, Decimal or Zero.
// var number = Number(prompt("Enter any number: "));
// if(number === 0){
//     console.log(`You entered: ${number}, this is Zero.`);
// } else if(number > 0 && number !== Math.floor(number)){
//     console.log(`You entered: ${number}, this is a Positive Decimal Number.`);
// } else if(number < 0 && number !== Math.floor(number)){
//     console.log(`You entered: ${number}, this is a Negative Decimal Number.`);
// } else if(number < 0){
//     console.log(`You entered: ${number}, this is a Negative Number.`);
// } else if(number > 0){
//     console.log(`You entered: ${number}, this is a Positive Number.`);
// } else{
//     console.log("Please, Enter any number: ");
// }

// Que.40 => Program to print the Table of any user defined number using function.
// var number = parseInt(prompt("Enter a number"));
// var table = "";
// for(i = 1; i <= 10; i++){
//     table = number * i;
//     console.log(`${number} x ${i} = ${table}`);
// }

// Using function =>
// function table(number){
//     var multiply = "";
//     for(i = 1; i <= 10; i++){
//         multiply = number * i;
//         console.log(`${number} x ${i} = ${multiply}`);
//     }
// }
// table(4);
// table(5);

// Que.41 => Program to make a simple calculator using switch case.
// Using if-else =>
// var number1 = prompt("Enter a number1:");
// var number2 = prompt("Enter a number2:");
// var calculate = prompt("What you want to calculate => +, -, x, /");
// if(calculate === "+" || calculate === "plus" || calculate === "Plus"){
//     Addition = number1 + number2;
//     console.log(`${number1} + ${number2} = ${Addition}`);
// } else if(calculate === "x" || calculate === "multiply" || calculate === "Multiply" || calculate === "*"){
//     Multiplication = number1 * number2;
//     console.log(`${number1} x ${number2} = ${Multiplication}`);
// } else if(calculate === "-" || calculate === "minus" || calculate === "Minus"){
//     Substraction = number1 - number2;
//     console.log(`${number1} - ${number2} = ${Substraction}`);
// } else if(calculate === "/" || calculate === "divide" || calculate === "Divide"){
//     Division = number1 / number2;
//     console.log(`${number1} / ${number2} = ${Division}`);
// } else{
//     console.log("Please, Enter a number");
// }

// Using switch case =>
// var number1 = Number(prompt("Enter a number1"));
// var number2 = Number(prompt("Enter a number2"));
// var calculate = prompt("What you want to calculate => +, -, x, /");
// switch (calculate){
//     case "+":
//         console.log(`${number1} + ${number2} =`, number1 + number2);
//         break;

//     case "-":
//         console.log(`${number1} - ${number2} =`, number1 - number2);
//         break;

//     case "x":
//         console.log(`${number1} + ${number2} =`, number1 * number2);
//         break;

//     case "/":
//         console.log(`${number1} + ${number2} =`, number1 / number2);
//         break;

//     default:
//         console.log("Please, Enter a number");
//         break;
// }

// Que.42 => Program to check if the numbers have same last digit.
// var num1 = Number(prompt("Enter 1st number: "))
// var num2 = Number(prompt("Enter 2nd number: "))
// var num3 = Number(prompt("Enter 3rd number: "))
// var Rem1 = num1 % 10;
// var Rem2 = num2 % 10;
// var Rem3 = num3 % 10;
// console.log(`${Rem1} ${Rem2} ${Rem3}`);
// if(Rem1 === Rem2 && Rem2 === Rem3 && Rem3 === Rem1){
//     console.log("Last digit of all three numbers are equal.");
// } else if(Rem1 === Rem2){
//     console.log("Last digit of num1 and num2 are equal.");
// } else if(Rem2 === Rem3){
//     console.log("Last digit of num2 and num3 are equal.");
// } else if(Rem1 !== Rem2 !== Rem3){
//     console.log("Last digit of all three numbers are not equal.");
// } else{
//     console.log("Please, Enter number:");
// }

// Que.43 => Program to print the Fibonacci sequence.
// फिबोनाची श्रृंखला => शून्य से शुरू होने वाली संख्याओं का एक क्रम है, जो इस तरह से व्यवस्थित हैं कि श्रृंखला में किसी भी संख्या का मूल्य पिछले दो संख्याओं का जोड़ है। 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610… मतलब पिछली दो संख्याओं के जोड़ से अगली संख्या बनती है और ये ऐसे ही श्रृंखला अनंत तक चलती है।
// var a = 0, b = 1;
// console.log(a);
// console.log(b);
// for(var i = 0; i <= 45; i++){    // ye 45 tk ki series h.
//     var temporary = a + b;
//     console.log(temporary);      // a, b, temporary = 0, 1, 1
//     a = b;                       // b ki value ko a ki value bana diya.
//     b = temporary;               // temporary ki value ko b ki value bana diya.
// }                                // ab wapas se loop chalega aur a aur b ko add krke temporary me save kr dega.

// Que.44 => Program to check Armstrong Number.
// Armstrong number => In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself.
// For example, 153 = 1*1*1 + 5*5*5 + 3*3*3
// Armstrong Numbers =>
// 1 digit -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// 2 digit -> No Armstrong Numbers
// 3 digit -> 153, 370, 371, 407
// 4 digit -> 1634, 8208, 9474
// chatGPT and me =>
// var myNumber = prompt("Enter a number: ");
// var digits = myNumber.toString().length;
// console.log(digits);
// function digitsToArray(number){
//     // Convert the number to a string
//     const numberString = number.toString();
//     // Split the string into an array of characters
//     const digitsArray = numberString.split('').map(Number);
//     return digitsArray;
// }
// const resultArray = digitsToArray(myNumber);
// console.log(resultArray);

// // Using map to raise each element to the power
// var poweredArray = resultArray.map(function(n) {
//     return Math.pow(n, digits);
// });

// // Using reduce to calculate the sum
// var sum = poweredArray.reduce(function(acc, value) {
//     return acc + value;
// }, 0);

// // Output the sum
// console.log(sum);
// if(sum == myNumber){
//     console.log(`${myNumber} is an Armstrong Number.`);
// } else{
//     console.log(`${myNumber} is not an Armstrong Number.`);
// }

// 2nd method YT =>
// var number = Number(prompt("Enter a number: "));
// var temporary = number;
// var digits = Number(number.toString().length);
// console.log(`Digits = ${digits}`);
// var sum = 0;
// while(temporary > 0){
//     var num = temporary % 10;
//     console.log(`module = ${num}`);
//     var sum = sum + num ** digits;
//     console.log(`sum = ${sum}`);
//     var leftNumber = temporary / 10;
//     console.log(`divided number = ${leftNumber}`);
//     var convertInt = parseInt(leftNumber);
//     console.log(`divided number convert into integer = ${convertInt}`);
//     temporary = convertInt;
//     console.log(`----------------------\n \n`);
// }
// if(sum == number){
//     console.log("Armstrong number");
// } else{
//     console.log("not an Armstrong number");
// }

// 3rd method only chapGPT =>
// function isArmstrongNumber(number) {
//     // Convert the number to a string to determine the number of digits
//     const numString = number.toString();
//     const numDigits = numString.length;

//     // Calculate the sum of digits each raised to the power of the number of digits
//     let sum = 0;
//     for (let i = 0; i < numDigits; i++) {
//         sum += Math.pow(parseInt(numString[i]), numDigits);
//     }

//     // Check if the sum is equal to the original number
//     return sum === number;
// }

// // Example usage
// const testNumber = 153; // Change this to test different numbers
// if (isArmstrongNumber(testNumber)) {
//     console.log(`${testNumber} is an Armstrong number.`);
// } else {
//     console.log(`${testNumber} is not an Armstrong number.`);
// }

// Que.45 => Program to find Armstrong number in an Interval.
// mtlb user se hm do number mangte h aur usi ke beech me check karenge ki kitne Armstrong number h.
// var num1 = Number(prompt("Please, Enter lower number; "))
// var num2 = Number(prompt("Please, Enter upper number; "))
// console.log(`Armstrong Numbers, Range of ${num1} to ${num2} /-`);
// for (var i = num1; i <= num2; i++) {
//     var temporary = i;
//     var digits = Number(i.toString().length);
//     var sum = 0;
//     while (temporary > 0) {
//         var num = temporary % 10;
//         var sum = sum + num ** digits;
//         var leftNumber = temporary / 10;
//         var convertInt = parseInt(leftNumber);
//         temporary = convertInt;
//     }
//     if(sum == i){
//         console.log(i);
//     }
// }

// Que.46 => Program to check Palindrome using for loop.
// Palindrome string => A string is a palindrom if it is read the same from forward or backward.
// Example => dad, madam
// var string = prompt("Please, Enter a string:")
// var len = string.length;
// var msg = `${string}, It is a Palindrome string.`;
// // string ki counting index ke roop me hoti h isiliye i = 0 h. ex ke liye user dad enter krta h to console pr i ki value 0 aur 1 print hogi. 0 to phle hi chal jayega aur dad me 3 letters h ise 2 se divide krne pr 1 aayega to loop ek baar aur chalega.
// for(var i = 0; i < len/2; i++){
//     // same ex ke anusar string dad ki 0th index "d" aur 1st index "a" print hogi.
//     console.log(string[i]);
//     // same ex /- len = 3 h, 3-1-i(i = 0) = 2 mtlb dad me 2nd index pr "d" h, aur isi prakar 3-1-i(i = 1) = 1 yaha 1st index pr "a" h.
//     console.log(string[len - 1 - i]);
//     if(string[i] != string[len - 1 - i]){
//         msg = `${string}, It is not a Palindrome string.`;
//     }
// }
// console.log(msg);

// Que.47 => Program to sort words in Alphabetical Order.
// var string = prompt("Enter a striing: ");
// var stringArray = string.split(" ");    // string ko words ke roop me Array me convert kr dega.
// stringArray.sort();    // ye array hi return krta h aur ye phle capital aur phir small letter ko arrange krta h.
// console.log(string);
// console.log(stringArray);
// console.log(stringArray.join(" "));    // ye array ko wapas string me convert krta h.

// Que.48 => Program to replace characters of a string.
// var string = "Mr. Red has a red car and red bike."
// console.log(string);
// var reg = RegExp("red", "gi");
// var newstr = string.replace(reg, "blue");
// console.log(newstr);

//Que.49 => Add two numbers without using any Arithmetic Operator.
// function addWithoutArithmeticOperators(a, b) {
//     while (b !== 0) {
//         // Calculate the carry
//         let carry = a & b;
//         // XOR to get the sum without carry
//         a = a ^ b;
//         // Left shift carry to add it to the sum in the next iteration
//         b = carry << 1;
//     }
//     return a;
// }
// Example usage
// const result = addWithoutArithmeticOperators(5, 7);
// console.log(result); // Output: 12

// Que.50 => Program to reverse a string using for loop.
// var string = prompt("Enter a string: ")

// Que.51 => Given an array of numbers, use map() to create a new array that contains the square of each number.
// let arr = [2, 3, 6, 56, 327, 33];
// let ans = arr.map((val) => val * val);
// console.log(ans);

// Que.52 Use filter() to return an array of only the even numbers from an array of integers.
// let arr = [2, 3, 4, 54, 6, 34, 2, 21, 4, 5, 5, 6, 379];
// let ans = arr.filter((val) => val % 2 === 0);
// console.log(ans);

// Que.53 Transform an array of strings into an array of their lengths using map().
// let arr = ["durgu", "durgain", "durgeswari", "durgesh"];
// let ans = arr.map((val) => val.length);
// console.log(ans);

// Que.54 Given an array of student objects, filter out students whose scores are less than 50.
// let arr = [
//   { name: "durgu", score: 78 },
//   { name: "durgain", score: 34 },
//   { name: "durgashwari", score: 87 },
//   { name: "durgesh", score: 25 },
// ];
// let ans = arr.filter((val) => val.score < 50);
// console.log(ans);

// Que.55 Use map() to convert an array of Fahrenheit temperatures to Celsius.
// let arr = [46, 73, 87.7, 24];
// let ans = arr.map((val) => {
//   let cel = ((val - 32) * 5) / 9;
//   return cel;
// });
// console.log(ans);

// Que.56 Filter out words from an array that are shorter than 5 characters.
// let arr = ["durgu", "durgain", "durgeswari", "durgesh", "dur", "durg"];
// let ans = arr.filter((val) => val.length < 5);
// console.log(ans);

// Que.57 Create a new array of objects using map(), where each object includes the original array value and its index.
// let arr = [2, 3, 4, 54, 6, 34, 2, 21, 4, 5, 5, 6, 379];
// let ans = arr.map((val, index) => {
//   return { val: val, index: index };
// });
// console.log(ans);

// Que.58 Use filter() to get an array of prime numbers from an array of integers.
// let arr = [2, 3, 4, 54, 7, 19, 6, 34, 2, 21, 4, 5, 5, 6, 379];
// let isPrime = (val) => {
//   if (val < 2) return false;
//   for (let i = 2; i <= Math.sqrt(val); i++) {
//     if (val % i === 0) return false;
//   }
//   return true;
// };
// let ans = arr.filter(isPrime);
// console.log(ans);

// Que.59 Transform an array of prices, applying a 10% discount using map().
// let arr = [2, 3, 4, 54, 7, 19, 6, 34, 2, 21, 4, 5, 5, 6, 379];
// let ans = arr.map((val) => val - (val * 10) / 100);
// console.log(ans);

// Que.61 Use filter() to remove null or undefined values from an array.
// let arr = [
//   23,
//   434,
//   "",
//   34,
//   "",
//   null,
//   undefined,
//   0,
//   -0,
//   typeof null,
//   typeof undefined,
//   typeof Array,
//   NaN,
//   false,
//   [],
//   {},
// ];

// let ans = arr.filter((val) => {
//   return val !== null && val !== undefined;
// });

// console.log(ans);

// Que.62 Given an array of people objects, filter out people older than 30.
// let arr = [
//   { name: "durgu", age: 78 },
//   { name: "durgain", age: 34 },
//   { name: "durgashwari", age: 87 },
//   { name: "durgesh", age: 25 },
// ];
// let ans = arr.filter((val) => val.age > 30);
// console.log(ans);

// Que.63 Use map() to capitalize the first letter of each string in an array.
// let arr = ["durgu", "durgain", "durgeswari", "durgesh"];
// let ans = arr.map((val) => {
//   if (val.length === 0) return val;
//   return val.charAt(0).toUpperCase() + val.slice(1);
// });
// console.log(ans);

// Que.64 Filter out objects from an array where the active property is false.
// let arr = [
//   { name: "durgu", age: 78, active: false },
//   { name: "durgain", age: 34, active: true },
//   { name: "durgesh", age: 25, active: true },
//   { name: "durgashwari", age: 87, active: false },
// ];
// let ans = arr.filter((val) => !val.active);
// console.log(ans);

// Que.65 Use map() to create an array of only the names from an array of user objects.
// let arr = [
//   { name: "durgu", age: 78, active: false },
//   { name: "durgain", age: 34, active: true },
//   { name: "durgesh", age: 25, active: true },
//   { name: "durgashwari", age: 87, active: false },
// ];
// let ans = arr.map((val) => val.name);
// console.log(ans);

// Que.66 Given an array of words, filter out the words that contain more than 10 characters.
// let arr = ["durgu", "durgain", "durgeshwari", "durgesh", "dur", "durg"];
// let ans = arr.filter((val) => val.length > 10);
// console.log(ans);

// Que.67 Use map() to round an array of floating-point numbers to the nearest integer.
// let arr = [1.2, 2.5, 3.7, 4.1, 5.9];
// let ans = arr.map((num) => Math.round(num));
// console.log(ans);

// Que.68 Filter out all negative numbers from an array using filter().
// let arr = [-23, -233, 78, 36, -66, 37, -0, 0, 32];
// let ans = arr.filter((val) => val < 0);
// console.log(ans);

// Que.69 Given an array of numbers, use map() to return an array where each number is doubled if it’s odd.
// let arr = [2, 3, 4, 54, 7, 19, 6, 34, 2, 21, 4, 5, 5, 6, 379];
// let ans = arr.map((val) => {
//   return val % 2 === 0 ? val : val * 2;
// });
// console.log(ans);

// Que.70 Use filter() to return an array of strings that contain the letter 'a' from an array of words.
// let arr = ["durgu", "durgain", "durgeshwari", "durgesh", "dur", "durg"];
// let ans = arr.filter((val) => {
//   for (let i = 0; i < val.length; i++) {
//     if (val[i].toLowerCase() === "a") {
//       return true;
//     }
//   }
// });
// console.log(ans);

// second method =>
// let ans = arr.filter((val) => val.toLowerCase().includes("a"));
// console.log(ans);

// Que.71 Create a new array of objects using map() where each object contains the original string and its reversed version.
// let arr = ["durgu", "durgain", "durgeshwari", "durgesh", "dur", "durg"];
// let ans = arr.map((val) => {
//   return {
//     original: val,
//     reversed: val.split("").reverse().join(""),
//   };
// });
// console.log(ans);

// Que.72 Given an array of arrays where each inner array contains numbers, use map() to return an array of the sum of each inner array.
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let ans = arr.map((val) => val.reduce((a, b) => a + b, 0));
// console.log(ans);

// Que.73
