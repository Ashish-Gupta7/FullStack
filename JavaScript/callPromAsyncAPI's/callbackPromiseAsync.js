// Synchronous JavaScript =>

// Synchronous ka matlab hota hai ek kaam karte hi doosra kaam karna shuru kar dena. Jab JavaScript synchronous tareeke se kaam karta hai, toh ek kaam ke baad hi doosra kaam shuru hota hai. Yeh code step-by-step execute hota hai, ek line ko execute karne ke baad agle line par jaata hai.
// Example (Udaharan):
// console.log("Shuruwat");
// console.log("Dusri line");
// console.log("Ant");
// Is example mein har console.log statement ek ke baad ek execute hoga, matlab "Shuruwat" print hoga, phir "Dusri line", aur phir "Ant".


// Asynchronous JavaScript =>

// Asynchronous ka matlab hota hai ek kaam karte hue doosre kaam ko wait karne ki zarurat nahi hoti. Jab JavaScript asynchronous tareeke se kaam karta hai, toh kaam ke kuch hisse ko background mein bhej diya jaata hai aur baaki ka code continue karta hai.

// Example (Udaharan):
// console.log("Shuruwat");
// setTimeout(function() {
//     console.log("Thoda dair baad");
// }, 2000);
// console.log("Ant");
// Is example mein setTimeout function ko 2 seconds (2000 milliseconds) ke liye delay kar diya gaya hai. Iss wajah se "Shuruwat" print hoga, phir "Ant", aur doosri line "Thoda dair baad" 2 seconds baad print hoga.

// Call Stack -> Apna college Day-25



// Callback fnc =>

// Jab aap kisi function ke andar ek aur function define karte hain aur usse firse call karte hain, toh use hum callback function kehte hain. Yeh ek common practice hai JavaScript mein, jisme ek function ko doosre function ke parameter ke roop mein pass kiya jaata hai taki wo function execute ho sake jab pehla function pura ho jaye. Callback functions bahut saari scenarios mein istemal hoti hain, jaise asynchronous programming mein ya event handling mein.

// uper setTimeout ke ander ek fnc likha hai to wo bhi ek callback fnc hai.





// Callback hell / Pyramid of Doom =>

// Callback Hell, JavaScript programming mein ek term hai jo un situations ko describe karta hai jab aap bahut saare nested callbacks ka use karte hain, aur code ki readability aur maintainability par asar hota hai.

// Callback Hell tab hota hai jab aap multiple asynchronous operations ko chain karte hain, jismein har ek operation ke baad ek aur operation chalana hota hai. Iska result hota hai ki aapke code mein nested callbacks ki lambi series banti hai, jise padhna aur samajhna mushkil ho jaata hai. Ye code kaafi complex ho jaata hai aur uska debug karna bhi challenging ho jaata hai.

// Yeh ek example hai callback hell ka:

// asyncOperation1(function(result1) {
//     asyncOperation2(result1, function(result2) {
//         asyncOperation3(result2, function(result3) {
//             // Aur aise hi chalta rahe...
//         });
//     });
// });

// Is tarah ke code ko padhna aur maintain karna mushkil ho jaata hai, aur isko avoid karne ke liye kuch techniques hain, jaise Promises, async/await, ya functional programming concepts jaise ki map, reduce, aur filter ka istemal karna. Ye techniques code ko readable aur maintainable banate hain callback hell se bachane mein.

// Another Example => hum ek aisa fnc banana chahte hai jiski madad se hume kuchh data kuchh samay se mile mtlb humare pas data1, data2, data3, ... hai aur hum chahte hai ki 2sec me data1 console pr print ho phir 2sec baad data2, phir 2sec baad data3 print ho.


// Ek function getData banaya gaya hai jo do parameters le raha hai: dataId aur getNextData.
// function getData(dataId, getNextData){
//     // setTimeout ka upyog karke ek delay ke saath ek asynchronous operation ko simulate kiya gaya hai.
//     setTimeout( () => {
//         // Console par "data" aur dataId ka value print kiya gaya hai.
//         console.log("data", dataId);
//         // Agar getNextData mojood hai,
//         if(getNextData){
//             // To getNextData ko invoke kiya gaya hai.
//             getNextData();
//         }
//     }, 2000); // Delay set kiya gaya hai 2000 milliseconds (2 seconds) ke liye.
// }

// // getData function ko call kiya gaya hai:
// getData(1, () => {
//     // getData ko call karne ke baad ek callback function diya gaya hai:
//     getData(2, () => {
//         // getData ko dobara call karne ke baad ek aur callback function diya gaya hai:
//         getData(3, () => {
//             // getData ko teesri baar call karne ke baad ek aur callback function diya gaya hai:
//             getData(4, () => {
//                 // getData ko chaar baar call karne ke baad, "continue..." console par print kiya gaya hai.
//                 console.log("continue...");
//             })
//         })
//     })
// })

// // callback hell => idustry me sirf getData(1, callbackFnc) nhi hota hai isme beech me aur bhi kai tarah ke data hote hai jo iss tarah ke code ki readability bahot kam kr deta hai isliye jab bhi callback hell ki sthiti banane lage to aap promises ka use kare.












// Promises => Promise ek JavaScript feature hai jo asynchronous programming ko handle karne ke liye istemal hota hai. Yeh ek object hota hai jo future value ya operation ko represent karta hai. Yeh future value ho sakta hai, ya toh resolved ho (successfully complete ho), ya fir rejected ho (error aaye).

// let promise = new Promise( (resolve, reject) => {...} )         yaha resolve aur reject fnc ke do handlers/parameters hain.
// resolve and reject are callbacks provided by JS.

// Resolve (Successfully kam hona): Jab ek promise ka kaam safalta purvak complete ho jaata hai, tab uss promise ko resolve kaha jaata hai.

// Reject (error milna): Jab ek promise ka kaam nakaamyab ho jaata hai, tab uss promise ko reject kaha jaata hai.

// Promise ki "pending" condition tab hoti hai jab promise banaya jata hai, lekin abhi tak resolve ya reject nahi hua hai. Yani ki, promise ka kaam abhi pura nahi hua hai aur hume abhi tak pata nahi hai ki woh resolve hoga ya reject hoga.

// PromiseState => (1.)Pending, (2.)Fulfilled (resolve), (3.)Rejected (reject)
// example => manlo ki humne amazon pr koi order place kiya hai jab tak uss order ki dilivery nhi hoti hai aur na hi amazon ya humne uss order ko reject kiya tab tak ki sthiti(state) me order "Pending" ki state me rahta hai, aur yadi order diliver ho jata hai to order "Fulfilled" state pr aa jata hai jise resolve hona bhi kahte hai, aur yadi kisi bhi tarah se order reject/cancel hota hai to order "Rejected" state pr aa jata hai aur ise reject hona bhi kahte hai.

// A JS Promise object can be:
// "Pending" = the result is undefined.
// "Resolved" = the result is a value(fulfilled)
// "Rejected" = the result is an error object

// Example1 =>
// let promise = new Promise( (resolve, reject) => {
//     console.log("i am a promise");
// } );
// console.log(promise);

// output
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

// explaination => kyuki humne promise ko na to resolve kiya aur na hi reject kiya hai isliye promiseState pending me hai aur Promise bhi. aur result bhi hume tabhi milega jab resolve ya raject kiya jaye. kyuki promise ek object hai isliye prototype bhi hota hai promise ka.


// Example2 =>
// let promise = new Promise( (resolve, reject) => {
//     console.log("i am a promise");
//     resolve("success")                      // isme kisi bhi tarah ka msg print kara skte hai lekin hume pta hai ki resolve mtlb kaam successfully complete hona to isiliye yaha success print karaya hai.
// } );
// console.log(promise);

// output
// Promise {<fulfilled>: 'success'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "success"

// explaination => kyuki yaha humne promise ko resolve kr diya hai isliye promiseState fulfilled hai aur result jo resolve se print karaya gaya wahi hai.


// Example3 => 
// let promise = new Promise( (resolve, reject) => {
//     console.log("i am a promise");
//     reject("error");
// } );
// console.log(promise);

// output
// Promise {<rejected>: 'error'}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: "error"


// Exapmle4 => phle yadi reject likhege to reject hoga promise aur yadi resolve phle likhege to resolve hoga promise.
// let promise = new Promise( (resolve, reject) => {
//     console.log("i am a promise");
//     reject("error");
//     resolve("success")
// } );
// console.log(promise);


// Generally hum programming ke ander khud promises ko create nhi krte hai. hum api's ke pas data ke liye request bhejte hai aur api's hume promises bhejta hai inhi promises se hum data nikalte hai, data check krte hai overall promises ko handle krte hai.

// api's me promises kaise kam krti hai =>
// function getData(dataId, getNextData){
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log("setTimeout chalne ke baad =>", dataId);
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 4000)
//     } );
// }
// let final = getData("Hello dataId, dataId isliye kyuki ye phla argument hai jo phle parameter pr jayega")
// console.log(final);

// 4sec baad jab hum final ko dobara console pr print karayege tb bhi stat pending hi rahegi kyuki humne iss promise ko resolve ya reject nhi kiya hai.


// function getData(dataId, getNextData){
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             resolve("success");
//             console.log("setTimeout chalne ke baad =>", dataId);
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 4000)
//     } );
// }
// let final = getData("Hello dataId, dataId isliye kyuki ye phla argument hai jo phle parameter pr jayega")
// console.log(final);

// ab 4sec baad promise resolve krne ki wajah se stat fulfilled ho jayegi.


// Generally hum programming ke ander fulfilled aur rejected pr hi kaam krte hai kyuki agar koi user koi order place krta hai to jab tk wo order resolve ya reject na ho tb tk wo pending me hi rahega aur hum iss pending ka kuchh nhi kr skte hai. result pending pr undefined hi dikhega.
//  Ab hume itna to pta hai ki real programming me Api's ke through hi promises ko hum fetch krte hai aur uss promise pr fulfilled ya rejected hone pr hi kaam krte hai. ab ye kaam krne ke liye do method hai =>
// (1.) promise.then( (res) => {...} )        fulfilled hone pr. yaha res ka mtlb result hai.  ye fnc tabhi pas hoga jab hamara promise fulfilled hoga.
// (2.) promise.catch( (err) => {...} )       rejected hone pr. yaha err ka mtlb error hai.    ye fnc tabhi pas hoga jab hamara promise rejected hoga.

// .then() ka use sirf async ke sath hota hai ya phir sync ke sath bhi kr skte hai ? =>
// .then() JavaScript mein promise chaining ke liye use hota hai. Ye synchronous aur asynchronous dono ke sath kaam karta hai.

// Database se kuch maangne ke liye request bhejte waqt async ka istemal karna behtar hota hai. async ka istemal isliye kiya jata hai taaki request bhejne ke baad aage ke code ko rukne ki zarurat na pade aur dusri operations ko roka na jaye. Is tarah se, aapke program mei aur code execute ho sakta hai jab tak database se response nahi milta. Isse aapke program ki performance bhi behtar hoti hai.

// Example1 =>
// let getPromise = () => {
//     return new Promise( (resolve, reject) => {
//         console.log("i am a promise");
//         resolve("success");                      //  yaha reject agar kr de to aage jo promise.then me likha hai vo kabhi print nhi hoga.
//     } )
// }
// let promise = getPromise();
// promise.then( (res) => {
//     console.log("promise fulfilled", res);
// })


// Example2 =>
// let getPromise = () => {
//     return new Promise( (resolve, reject) => {
//         console.log("i am a promise");
//         reject("rejected");                         //  yaha resolve agar kr de to aage jo promise.catch me likha hai vo kabhi print nhi hoga.
//     } )
// }
// let promise = getPromise();
// promise.catch( (err) => {
//     console.log("promise rejected", err);
// } )


// Promise chaining => Promise chaining ek concept hai jo JavaScript mein use hota hai asynchronous programming mein. Iska basic aim hota hai ke aap multiple asynchronous operations ko sequence mein run kar sakein. Yeh ek tarah ka design pattern hai jismein aap ek promise ko doosre promise ke sath chain kar sakte hain.

// Example1 =>
// function asyncFunc1() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log("data1");
//             resolve("successData1")
//         }, 3000)
//     } )
// }

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// })


// Example2 =>
// function asyncFunc1() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log("data1");
//             resolve("successData1")
//         }, 3000)
//     } )
// }
// function asyncFunc2() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log("data2");
//             resolve("successData2")
//         }, 3000)
//     } )
// }
// function asyncFunc3() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log("data3");
//             resolve("successData3")
//         }, 3000)
//     } )
// }

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// })
// console.log("fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })
// console.log("fetching data3...");
// let p3 = asyncFunc3();
// p3.then((res) => {
//     console.log(res);
// })

// ye teeno ek sath fetch hoge aur teeno ka data ek sath hi print ho jayega. jabki hum aisa nhi chahte hai hm chahte hai ki ek ek krke data fetch ho aur phir print ho iske liye promise chaining krni hogi.
// generally ye jo ayncFunc wale fnc bane hai usey hum fetch krte hai aur p1 p2 ki tarah hi promise ko handle krte hai.

// Example3 =>

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("successData1")
//         }, 3000)
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("successData2")
//         }, 3000)
//     });
// }
// function asyncFunc3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data3");
//             resolve("successData3")
//         }, 3000)
//     });
// }

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//         console.log("fetching data3...");
//         let p3 = asyncFunc3();
//         p3.then((res) => {
//             console.log(res);
//         })
//     })
// })

// simplified =>
// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//     console.log(res);
//     console.log("fetching data2...");
//     asyncFunc2().then((res) => {
//         console.log(res);
//         console.log("fetching data3...");
//         asyncFunc3().then((res) => {
//             console.log(res);
//         })
//     })
// })

// actual promise chaining => ise callback ki jagah samajhna thoda aasan hai pr itna bhi aasan nhi hai isliye async await ek aur naya tareeka hai.

// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//     console.log(res);
//     console.log("fetching data2...");
//     return asyncFunc2();
// }).then((res) => {
//     console.log(res);
//     console.log("fetching data3...");
//     return asyncFunc3();
// }).then((res) => {
//     console.log(res);
// });


// Example4 =>
// function getData(dataId){          // kyuki hum promises ko use kr rhe hai isliye callback ka use nhi karege.
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000);
//     })
// }
// getData(1).then((res) => {
//     console.log(res);
//     return getData(2);
// }).then((res) => {
//     console.log(res);
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })















// Async-await        =>       Async-await ek feature hai JavaScript mein jo promises ko handle karne ke liye istemal hota hai, particularly asynchronous code ko likhne aur manage karne ke liye. Ye modern JavaScript syntax hai jo ES2017 mein introduce hua tha.

// Async-await ka use karte waqt, aap asynchronous code ko synchronous code ki tarah likh sakte hain, jo code ko easy to read aur maintainable banata hai. Async-await ka use promises ke saath hota hai, jisse complex asynchronous operations ko simplify kiya ja sake.

// Yeh kaise kaam karta hai:

// async keyword use kiya jata hai function ke pehle, jise async function kehte hain. Ye function ek promise return karta hai.
// await keyword ko async function ke andar use kiya jata hai, jo ek promise ko wait karne ke liye use hota hai. Jab await keyword ka use hota hai, tab JavaScript runtime wait karta hai jab tak promise resolve nahi hoti ya reject nahi hoti.
// Async function ka use karke, aap sequential code likh sakte hain, jismein har ek asynchronous operation ko await keyword ke saath use karke handle kiya ja sakta hai.

// Example1 => 
// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log("weather data");
//             resolve("success");
//         }, 2000);
//     });
// }

// async function getWeatherData(){
//     await api();     // 1st
//     await api();     // 2nd
// }
// getWeatherData();

// Example2 => 
// function getData(dataId){       
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000);
//     })
// }
// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("completed");
// }
// getAllData();

// using ifee =
// (async function (){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("completed");
// }) ();


// IFEE => An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. function ko call na krna pade.
// 1st method
// (function () {
//   // …
// })();

// 2nd method
// (() => {
//   // …
// })();
  
// 3rd method
// (async () => {
//   // …
// })();
  




// Overall ye samajh me aaya ki callback hell ki sthiti hone lage to usse accha hai ki promise chain ka use karo ya phir isse bhi accha hoga yadi aap async-await ko use kare.           async-await >> promise chain >> callback hell