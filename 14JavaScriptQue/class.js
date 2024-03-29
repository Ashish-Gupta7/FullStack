// (1.) make an array which contains string, NaN and numbers and remove everything except strings and put it in new Array.
// isme filter ka use hoga aur filter ko true/false ke roop me return kiya jata h tb jake naya array milta h.

// var arr = [1,2,3,4,"hllo",5,"34","hii","6",6, NaN, {val1: "ash", val2: 2, val3: "3", val4: NaN}, [11,22,33]];

// 1st =>
// var newArr = arr.filter (function(str){
//     var ret = typeof str === 'string';
//     return ret;
// })

// 2nd =>
// var newArr = arr.filter (function(str){
//     return typeof str === "string"
// })

// 3rd => arrow function.
// var newArr = arr.filter( (str) => {
//     return typeof str === "string"
// })

// 4th => isme aur 3rd wale me sirf str pr lage bracket ka fark h, yadi aap arrow function me sirf ek parameter dete h to usey bracket me rakhe ya na rakhe koi fark nhi padta h.
// var newArr = arr.filter( str => {
//     return typeof str === "string"
// })

// 5th => 
// var newArr = arr.filter(str => typeof str === "string");




// (2.) Make a function which takes an array and returns the count of the numbers as an object.
//      Example = [1,1,1,2,3,4,32,2,2,4] => {1: 3, 2: 3, 3: 1, 4: 2, 32: 1}

// 1st method =
// var arr = [1,1,1,2,3,4,32,2,2,4];
// var obj = {};
// arr.forEach( elm => {
//     if(obj[elm] === undefined){
//         obj[elm] = 1;
//     } else{
//         obj[elm]++;
//     }
// } )

// 2nd method =
// function numbers(arr) {
//     let count = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (count[arr[i]] === undefined) {
//             count[arr[i]] = 1;
//         } else {
//             count[arr[i]]++;
//         }
//     }
//     return count;
// }
// var array = [1, 1, 1, 2, 3, 4, 32, 2, 2, 4];
// console.log(numbers(array));



// (3.) Make a function which accepts two parameters, array and object and check whether that array contains that object with same values.

// function checkArrayForObject(arr, obj) {
//     return arr.some(item => Object.keys(obj).every(key => item.hasOwnProperty(key) && item[key] === obj[key]));
// }
// var myArray = [{a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}];
// var myObject = {c: 3, d: 4};
// console.log(checkArrayForObject(myArray, myObject));


// function checkArrayForObject(array, object) {
//     // Check if any element of the array matches the object
//     var compare = array.some(item => {
//         // console.log(item);
//         // console.log(Object.keys(obj));      // isme obj ke key aate h.
//         // Check if all key-value pairs of the object match the current element
//         return Object.keys(object).every(key => {
//             // console.log(item[key], "=", object[key]);
//             // console.log(item.hasOwnProperty(key));
//             return item.hasOwnProperty(key) && item[key] === object[key];
//         });
//     });
//     return compare;
// }

// // Example usage:
// const myArray = [{a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}];
// const myObject = {c: 3, d: 4};

// console.log(checkArrayForObject(myArray, myObject)); // Output: true



// (4.) Make a function which accepts some string and returns an object with following pattern:
// Hello => {H: 'e', l: 'l', o: null};
// function object(convert){
//     let obj = {};
//     for(i = 0; i < convert.length; i++){
//         const objKey = convert[i];
//         const objVal = convert[i + 1];
//         obj[objKey] = objVal || null;
//     }
//     return obj;
// }
// console.log(object("Hello"));



// (5.) Make a function which accepts two strings and returns the string with all the similar letters next to each other.
// example:    hello harsh => 
// function output(str1, str2){
//     var newStr = "";
//     const str2firstVal = str2[0];
//     // const str2RemainingVal = str2.slice(1);
//     const str2RemainingVal = str2.substring(1);
//     newStr = str2firstVal + str1 + str2RemainingVal
//     console.log(newStr);
// }
// output("Hello", "Harsh");




// (6.) niche ek array hai jisme objects hain aur ussme se ek type nam ka key hai iske sabhi alag alag value ke sets banao object ke roop me.

// var arr = [
//     {name: "sofa", type: "interior", price: 12000},
//     {name: "gym bag", type: "sports", price: 1500},
//     {name: "bed", type: "interior", price: 150000},
//     {name: "table", type: "interior", price: 1200},
//     {name: "bottle", type: "essencials", price: 100},
//     {name: "joota", type: "sports", price: 2000},
//     {name: "car", type: "assets", price: 1045678},
//     {name: "toothbrush", type: "essencials", price: 20},
//     {name: "house", type: "assets", price: 12345678},
// ]

// 1st method =
// var obj = {};
// arr.forEach(elm => {
//     if(obj[elm.type] === undefined){
//         obj[elm.type] = [elm];
//     } else{
//         obj[elm.type].push(elm)
//     }
// });

// 2nd method =
// var obj = {};
// arr.forEach( elm => {
//     // console.log(obj[elm.type]);   // output = undefined, undefined ek falsy value h isliye if me false return hoga ise true krne ke liye not! ka sign lga dege.
//     if(!obj[elm.type]){
//         obj[elm.type] = [elm];
//     } else{
//         obj[elm.type].push(elm);
//     }
// } )