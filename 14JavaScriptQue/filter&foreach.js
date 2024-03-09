// (1.) make an array which contains string, NaN and numbers and remove everything except strings and put it in new Array.     code explaination ke liye phind use kare.
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

// (2.) filter.
// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var newNum = numbers.filter( num => num > 4 );
// console.log(newNum);

// (3.) 
// var books = [
//     {title: "book 1", genre: "maths", publish: 1990, edition: 2016, chapter: ["avakalan", "samakalan", "number system", "lcm hcf"]},
//     {title: "book 2", genre: "science", publish: 1991, edition: 2017, chapter: ["periodic", "friction", "non-friction"]},
//     {title: "book 3", genre: "social science", publish: 1992, edition: 2018, chapter: ["geography", "history"]},
//     {title: "book 4", genre: "english", publish: 1993, edition: 2019, chapter: []},
//     {title: "book 5", genre: "hindi", publish: 1993, edition: 2020, chapter: []},
//     {title: "book 6", genre: "english", publish: 1994, edition: 2010, chapter: []},
//     {title: "book 7", genre: "maths", publish: 1995, edition: 2011, chapter: ["vector", "trigonometric", "avakalan"]},
//     {title: "book 8", genre: "english", publish: 1996, edition: 2012, chapter: []},
//     {title: "book 9", genre: "maths", publish: 1997, edition: 2013, chapter: []},
//     {title: "book 10", genre: "hindi", publish: 1993, edition: 2014, chapter: []},
//     {title: "book 11", genre: "social science", publish: 1993, edition: 2016, chapter: ["history", "polity"]},
//     {title: "book 12", genre: "english", publish: 1991, edition: 2020, chapter: []},
//     {title: "book 13", genre: "sanskrit", publish: 1990, edition: 2014, chapter: []}
// ]

// 3a = jiska bhi genre maths h uss object ko print karo.
// var newList = books.filter( gen => gen.genre === "maths" );
// console.log(newList);

// 3b = jo bhi 1993 ke baad aur 1993 ko publish huaa hai usey print kare.
// var newList = books.filter( publ => publ.publish >= 1993 );
// console.log(newList);

// 3c = aisa ek naya array banao jisme genre maths ho, publish 1993 ke baad hua ho aur edition 2013 ke pahle ka ho.
// var newList = books.filter( elm => elm.genre === "maths" && elm.publish > 1993 && elm.edition < 2013 )
// console.log(newList);

// 3d, 1st method = ek aisa new array banao jiska chapter avakalan ho.
// var newList = books.filter( chap => chap.chapter.includes("avakalan") )
// console.log(newList);

// 2nd method = using some() function = 
// some() => some() method ek condition check karta hai. Yeh method ek array ke har element par iterate karta hai aur uske saath ek function apply karta hai. Agar kisi bhi element par function true return karta hai, toh some() method immediately true return karta hai. Agar koi bhi element par function false return nahi karta, toh some() method false return karta hai. Yeh method ek condition check karne ke liye use hota hai jab aapko check karna hai ki kya array mein kisi bhi element par condition true hoga.
// filter() => filter() method ek array return karta hai jismein sirf woh elements hain jo ek specific condition par pass hote hain. Yeh method bhi ek array ke har element par iterate karta hai, lekin isme ek condition check hota hai. Agar element condition par pass hota hai, toh woh element naya array mein include hota hai. Agar nahi, toh woh element naya array mein include nahi hota. Yeh method ek array ke elements ko filter karne ke liye use hota hai.
// difference between some() and filter => some() method sirf check karta hai ki kya array mein kisi bhi element par condition true hoga, aur iske baad true ya false return karta hai.  // filter() method ek naya array return karta hai jismein sirf woh elements hain jo condition par pass hote hain.

// var newList = books.filter( chap => chap.chapter.some( (chapter) => chapter === "avakalan" ) )
// console.log(newList);

// 3rd method => every() ye false ko return krta h new array me. jaise some() true return krta h usi tarah ye false return krta h.
// var newList = books.filter( chap => chap.chapter.every( (chap) => chap === "avakalan" ) );
// console.log(newList);

// 4th method => sirf 0th index pr
// var newList = books[0].chapter.filter( chapter => chapter === "avakalan" );
// console.log(newList);

// 5th method => 
// var avakalan = false;
// var newList = books.forEach( chap => {
//     if(chap.chapter.includes("avakalan")){
//         avakalan = true;
//     }
// } )
// console.log(avakalan);


// 3e = chapter property ki value me total kitne chapters likhe gaye hai.
// 1st = poore array ka total h.
// var len = 0;
// books.forEach( elm => {
//     len += elm.chapter.length;
// } )
// console.log(len);

// 2nd = har ek object ka total h.
// books.forEach( elm => {
//     console.log(elm.chapter.length);
// } )
// console.log(books);

// 3f = har ek object ki property chapter ki value ko usi ke total length me covert krdo.
// books.forEach( elm => {
//     elm.chapter = elm.chapter.length;
// } )
// console.log(books);

// 3g = ek naya array banao aur usme book 1 se book 7 tk title walo ko rakho.
// var newArr = books.filter( elm => {
//     return elm.title.split(" ")[1] <= 7;
// })
// console.log(newArr);

// 3h = books array ke har book object ke chapter property ki value ko ek string mein convert karein jismein chapter array ki length (chapters ki count) hai. ye ek naye array me hona chahiye books wala array waisa hi rahe.
// var newArr = [];
// books.forEach( elm => {
//     var newList = {...elm};
//     newList.chapter = elm.chapter.length.toString()
//     newArr.push(newList)
// } )
// console.log(newArr);

// 3i = books array ke har book object ke chapter property ki value ko ek string mein convert karein jismein chapter array ki length (chapters ki count) hai, lekin sirf agar chapter array mein kisi bhi element hai.
// var newArr = [];
// books.forEach( elm => {
//     var newList = {...elm};
//     if(newList.chapter.length > 0){
//         newList.chapter = newList.chapter.length;
//         newArr.push(newList);
//     }
// } )
// console.log(newArr);

// 3j = books array ke har book object ke chapter property ki value ko ek string mein convert karein jismein chapter array ki length (chapters ki count) hai, lekin sirf agar chapter array mein "avakalan" chapter hai. ye ek naye array me save rhe.
// var newArr = [];
// books.forEach( elm => {
//     var newList = {...elm};
//     if(newList.chapter.includes("avakalan")){
//         newList.chapter = newList.chapter.length.toString();
//         newArr.push(newList);
//     };
// } )
// console.log(newArr);

// 3k = ek array banao usme sirf maths genre wale ko rakho aur uske title ko print karo.
// var newArr = books.filter( elm => elm.genre === "maths" ).forEach( elm => console.log(elm.title));

// 3l = books array ke har book object ke chapter property ki value ko ek string mein convert karein jismein chapter array ki length (chapters ki count) hai, lekin sirf agar chapter array mein "avakalan" chapter hai, aur sirf un book objects ke liye jo "maths" genre hai. ye ek naye array me rakho.
// var newArr = [];
// books.forEach( elm => {
//     var newList = {...elm};
//     if(newList.genre === "maths"){
//         newList.chapter = newList.chapter.length.toString();
//         newArr.push(newList);
//     }
// });
// console.log(newArr);

// 3m = books array ke har book object ke chapter property ki value ko ek string mein convert karein jismein chapter array ki length (chapters ki count) hai, lekin sirf agar chapter array mein "avakalan" chapter hai, aur sirf un book objects ke liye jo "maths" genre hai, aur unke publish year 1990 se jyada hai, aur unke edition year 2010 se jyada hai, ye ek naye array me banao.
// var newArr = [];
// books.forEach( elm => {
//     var newList = {...elm};
//     if(newList.chapter.includes("avakalan") && newList.genre === "maths" && newList.publish > 1990 && newList.edition > 2010){
//         newList.chapter = newList.chapter.length.toString();
//         newArr.push(newList);
//     }
// } )
// console.log(newArr);

// 3n = ek aisa naya object banao jisme ek genre nam ki property h iske sabhi alag alag value ke sets banao.
// 1st method =
// var obj = {};
// books.forEach( elm => {
//     if(obj[elm.genre] === undefined){
//         obj[elm.genre] = [elm];
//     } else{
//         obj[elm.genre].push(elm)
//     }
// } )
// console.log(obj);

// 2nd method =
// var obj = {};
// arr.forEach( elm => {
//     // console.log(obj[elm.genre]);   // output = undefined, undefined ek falsy value h isliye if me false return hoga ise true krne ke liye not! ka sign lga dege.
//     if(!obj[elm.genre]){
//         obj[elm.genre] = [elm];
//     } else{
//         obj[elm.genre].push(elm);
//     }
// } )

// 3rd method = using ternary operator.
// var obj = {};
// books.forEach( elm => {
//     !obj[elm.genre] ? obj[elm.genre] = [elm] : obj[elm.genre].push(elm);
// } )
// console.log(obj);



// (4.) Ek array mein se sirf even numbers ko filter karke naya array banayein.
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var newArr = arr.filter( elm => elm % 2 === 0 );
// console.log(newArr);

// (5.) Ek array mein se sirf odd numbers ko filter karke unka sum nikalein.
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var newArr = arr.filter( elm => elm % 2 !== 0 )
// var sum = 0;
// newArr.forEach( elm => {
//     sum = sum + elm;
// } )
// console.log(sum);

// (6.) Ek array of strings hai, jismein se sirf 5 character se zyada wale strings ko filter karke unka length print karein.
// var arr = ["math", "science", "social science", "english", "hindi"];
// 1st =
// var newArr = arr.filter( elm => elm.length > 5 );
// console.log(newArr);
// console.log(newArr.length);

// 2nd = 
// var check = [];
// arr.forEach( elm => {
//     if(elm.length > 5){
//         check.push(elm.length)
//     }
// })
// console.log(check);

// (7.) Ek array hai jismein objects hain, aur har object ka name field hai. Sirf woh objects ko filter karein jinmein name ka length 5 se zyada ho.
// var arr = [
//     {name: "Ashish"},
//     {name: "Kapil"},
//     {name: "Shiva"},
//     {name: "Ankit"},
//     {name: "Aman"},
//     {name: "Nitish"},
//     {name: "Durgesh"},
//     {name: "Nilesh"},
// ]
// 1st
// var newArr = arr.filter( elm => elm.name.length > 5 )
// console.log(newArr);

// 2nd
// var newArr = [];
// arr.forEach( elm => {
//     if(elm.name.length > 5){
//         newArr.push(elm);
//     }
// } )
// console.log(newArr);

// 3rd using 2nd
// var newnewArr = [];
// newArr.forEach( elm => {
//     var newnew = {...elm};
//     newnew.name = newnew.name.length
//     newnewArr.push(newnew)
// } )
// console.log(newnewArr);


// (8.) Make a function which takes an array and returns the count of the numbers as an object.      code explaination ke liye phind use kare.
// example => [1,1,1,2,3,4,3,5,6,3,54,6,3,2,4,5,2,1,1,3,6,7,8,6,5,4,3,5];   =>    {1: 5, 2: 3, 3: 6, 4: 3, 5: 4, 6: 4, 7: 1, 8: 1, 54: 1}
// var arr = [1,1,1,2,3,4,3,5,6,3,54,6,3,2,4,5,2,1,1,3,6,7,8,6,5,4,3,5];
// var obj = {};

// 1st method = ye property ki value ko array me store karega.
// arr.forEach( elm => {
//     if(obj[elm] === undefined){
//         obj[elm] = [elm];
//     } else{
//         obj[elm].push(elm);
//     }
// } )

// 2nd method = ye count karega.
// arr.forEach( elm => {
//     if(obj[elm] === undefined){
//         obj[elm] = 1;
//     } else{
//         obj[elm]++
//     }
// } )

// 3rd method = ternary operator.
// arr.forEach( elm => {
//     !obj[elm] ? obj[elm] = 1 : obj[elm]++;
// } )

// 4th method = using map().
// arr.map( elm => !obj[elm] ? obj[elm] = 1 : obj[elm]++ )

// 5th method = using for loop.
// function num(arr){
//     let count = {};
//     for(i = 0; i < arr.length; i++){
//         if(!count[arr[i]]){
//             count[arr[i]] = 1;
//         } else{
//             count[arr[i]]++;
//         }
//     }
//     return count;
// }
// var array = [1,1,1,2,3,4,3,5,6,3,54,6,3,2,4,5,2,1,1,3,6,7,8,6,5,4,3,5];
// console.log(num(array));


// (9.) Ek array mein objects hain, jinmein 'age' property hai. Sirf woh objects ko filter karein jinmein age 18 se zyada ho.
// var arr = [
//     {age: 19},
//     {age: 15},
//     {age: 18},
//     {age: 23},
//     {age: 12},
//     {age: 44},
//     {age: 18},
// ]
// var newArr = arr.filter( elm => elm.age > 18 );
// console.log(newArr);


// (10.) Ek array hai jismein strings hain, unmein se sirf woh strings filter karein jo 'a' se start hoti hain.
// var arr = ["shibbu", "ashish", 'ash', "Ankit", "shiva", "kapil", "akash", "sahil", 'abhi'];
// var newArr = arr.filter( elm => elm.startsWith("a") );
// console.log(newArr);


// (11.) Ek array mein objects hain, jinmein price aur quantity fields hain. Sirf woh objects ko filter karein jinmein price 1000 se zyada hai aur quantity 5 se zyada hai. Fir har filtered object ka price aur quantity ka product calculate karein aur sabhi products ka sum nikalein.
// var arr = [
//     {price: 700, quantity: 6},
//     {price: 1700, quantity: 3},
//     {price: 7000, quantity: 6},
//     {price: 1500, quantity: 10},
//     {price: 600, quantity: 2},
//     {price: 1600, quantity: 8},
//     {price: 2100, quantity: 9}
// ]
// var newArr = arr.filter( elm => elm.price > 1000 && elm.quantity > 5 )
// var total = 0;
// newArr.forEach( elm => {
//     total = total + elm.price * elm.quantity;
// } )
// console.log(total);


// (12.) Ek array hai jismein objects hain, jinmein 'grade' field hai. Sirf woh objects ko filter karein jinmein grade 'A' hai aur unke corresponding marks print karein.
// var arr = [
//     {id: 123456, grade: "A", marks: 100},
//     {id: 123457, grade: "A", marks: 90},
//     {id: 123458, grade: "B", marks: 70},
//     {id: 123459, grade: "A", marks: 95},
//     {id: 123450, grade: "C", marks: 50}
// ]
// var newArr = arr.filter( elm => elm.grade === "A" );
// 1st = direct print in console.
// newArr.forEach( elm => {
//     console.log({grade: elm.grade, marks: elm.marks});
// } )

// 2nd = create new array. ye map() se bhi ho jayega.
// var nArr = [];
// newArr.forEach( elm => {
//     nArr.push({grade: elm.grade, marks: elm.marks})
// } )
// console.log(nArr);


// (13.) Ek array hai jismein objects hain, jinmein nested arrays bhi shamil hain. Har object ke andar ek grades field hai, jo ek array hai. Sirf woh objects ko filter karein jinke grades array mein sabhi elements 70 se zyada hain, aur unke name field ko print karein. ek aur banao jisme name na aaye.
// var arr = [
//     {name: "Ash 1", grades: [70, 67, 85]},
//     {name: "Ash 2", grades: [70, 70, 70]},
//     {name: "Ash 3", grades: [75, 67, 85]},
//     {name: "Ash 4", grades: [74, 77, 85]},
//     {name: "Ash 5", grades: [92, 67, 85]},
//     {name: "Ash 6", grades: [78, 97, 85]}
// ]

// // 1st = with name.
// var newArr = arr.filter( elm => { 
//     return elm.grades[0] > 70 && elm.grades[1] > 70 && elm.grades[2] > 70;
// } )
// console.log(newArr);

// // 2nd = without name.
// var nArr = [];
// var nnewArr = arr.forEach( elm => {
//     var newList = {...elm.grades};
//     nArr.push(newList);
// } )
// var nnArr = nArr.filter( elm => elm[0] > 70 && elm[1] > 70 && elm[2] > 70 )
// console.log(nnArr);

// // 3rd = using every method.
// var newArr = arr.filter( elm => elm.grades.every( elm => elm > 70 ) )
// newArr.forEach( elm => {
//     console.log(elm.name);
// } )

// // 4th = ye unn naamo ko return krta h jinme koi na koi to 70 se jada wale h.
// var newArr = arr.filter( elm => elm.grades.some( elm => elm > 70 ) )
// newArr.forEach( elm => {
//     console.log(elm.name);
// } )


// (14.) Ek array hai jismein objects hain, jinmein students field hai jo ek array hai. Har student ka ek marks array hai. Sirf woh students ko filter karein jinke sabhi marks ka average 80 se zyada hai, aur unke name field ko print karein.
// var students = [
//     {name: "Ashish", marks: [70, 73, 75]},
//     {name: "Jimit", marks: [79, 83, 95]},
//     {name: "Shiva", marks: [90, 83, 75]},
//     {name: "Aman", marks: [60, 93, 75]}
// ];

// students.filter( elm => (elm.marks[0] + elm.marks[1] + elm.marks[2]) / 3 > 80).forEach( elm => console.log(elm.name) );


// (15.) Ek array hai jismein objects hain, jinmein books field hai jo ek array hai. Har book ka ek ratings array hai. Sirf woh books ko filter karein jinke sabhi ratings 4 se zyada hai, aur unke title field ko print karein.
// var library = [
//     {title: "book1", ratings: [3, 5, 4]},
//     {title: "book2", ratings: [4, 5, 4]},
//     {title: "book3", ratings: [4, 4, 4]},
//     {title: "book4", ratings: [8, 5, 7]},
//     {title: "book5", ratings: [9, 5, 4]},
//     {title: "book6", ratings: [6, 7, 8]}
// ]
// var newArr = library.filter( elm => elm.ratings.every( elm => elm > 4 ) )
// console.log(newArr);


// (16.) Ek array hai jismein objects hain, jinmein orders field hai jo ek array hai. Har order ka ek items field hai jo ek array hai. Sirf woh orders ko filter karein jinke sabhi items ka total price 500 se zyada hai, aur unke orderId field ko print karein.
// var ordersArray = [
//     { orderId: 1, items: [{ name: "Product 1", price: 200 }, { name: "Product 2", price: 300 }] },
//     { orderId: 2, items: [{ name: "Product 3", price: 150 }, { name: "Product 4", price: 400 }] },
//     { orderId: 3, items: [{ name: "Product 5", price: 250 }, { name: "Product 6", price: 350 }] },
//     { orderId: 4, items: [{ name: "Product 7", price: 400 }, { name: "Product 8", price: 200 }] },
//     { orderId: 5, items: [{ name: "Product 9", price: 100 }, { name: "Product 10", price: 450 }] },
//     { orderId: 6, items: [{ name: "Product 11", price: 100 }, { name: "Product 12", price: 250 }] },
//     { orderId: 7, items: [{ name: "Product 13", price: 100 }, { name: "Product 14", price: 350 }] }
// ];

// var newArr = ordersArray.filter( elm => {
//     var total = elm.items.reduce( (acc, elm) => acc + elm.price, 0 )
//     return total > 500;
// });
// newArr.forEach( elm => console.log(elm.orderId));


// (17.) Ek array hai jismein objects hain, jinmein employees field hai jo ek array hai. Har employee ka ek projects array hai. Sirf woh employees ko filter karein jinke sabhi projects ke end dates future mein hain, aur unke name field ko print karein.
// let employees = [
//     { name: "John", projects: [{ name: "Project 1", endDate: "2025-01-01" }, { name: "Project 2", endDate: "2026-03-15" }] },
//     { name: "Jane", projects: [{ name: "Project 3", endDate: "2024-12-31" }, { name: "Project 4", endDate: "2023-10-20" }] },
//     { name: "Doe", projects: [{ name: "Project 5", endDate: "2027-08-10" }, { name: "Project 6", endDate: "2026-06-30" }] },
//     { name: "Alice", projects: [{ name: "Project 7", endDate: "2025-05-20" }, { name: "Project 8", endDate: "2024-11-15" }] },
//     { name: "Bob", projects: [{ name: "Project 9", endDate: "2023-09-01" }, { name: "Project 10", endDate: "2024-02-28" }] }
// ];

// var newArr = employees.filter( elm => {
//     let dates = elm.projects.every( elm => new Date(elm.endDate) > new Date())
//     return dates
// } )
// newArr.forEach( elm => console.log(elm.name));