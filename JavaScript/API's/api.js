// API ya "Application Programming Interface" ek tarah ka bridge hota hai jo ek software application aur doosri application ya service ke beech communication ko facilitate karta hai. Ye ek set ke rules, protocols, aur tools ko provide karta hai jo developers ko doosre software components ke saath interact karne mein madad karta hai.
// Agar aap ek building ki analogy lenge, toh API us building ke darwaze aur windows ki tarah hai jo doosri jagah se usme jaane aur usse baat karne ke liye istemal hota hai. Agar aap kisi service ya functionality ko apne application mein integrate karna chahte hain, jaise ki payment gateway, to aap unki API ka istemal karke apne application ko unke system se connect kar sakte hain.
// Jaise hi aap API ka istemal karte hain, aap unki di gayi commands, functions, aur data formats ka istemal karke unse interaction kar sakte hain. Ye aapko naye features ko develop karne mein aur existing features ko extend karne mein madad karta hai, kyunki aapko khud se sab kuch dobaara likhne ki zarurat nahi hoti.
// Is tarah se, API ek important concept hai jo developers ko alag-alag software components ko integrate karne mein madad karta hai aur unhe ek seamless experience provide karta hai.


//       Fetch API           =>                 Fetch API ek tarah ka tool hai jo web browsers mein mojood hai aur JavaScript developers ko server se data fetch karne aur web applications mein integrate karne ka ek naya tareeqa deta hai.
// Ye XMLHttpRequest (XHR) ko replace karta hai, jo traditional tareeqe se server se data fetch karne ke liye istemal hota tha.
// Sochiye aap ek web application bana rahe hain aur aapko kisi server se data lena hai, jaise ki JSON data (jaise ki ek list of users ya koi blog post). Fetch API ka istemal karke aap server se data ko retrieve kar sakte hain bina page ko refresh kiye ya browser ko navigate kiye. Ye ek asynchronous tareeqa hai, yaani aapke application ke kaam ko rokne ke bajaye, wo data fetch hota rahta hai aur aapke application ke baaki kaam chalti rahti hai.

// The Fetch API provides an interface for fetching (sending/receiving) resources.           =>           Fetch API ek aisa interface hai jo resources (jaise ki data) ko fetch karne (bhejne/lena) aur receive karne ke liye istemal hota hai. Yani ki, aap Fetch API ka istemal karke server se data ko retrieve kar sakte hain ya data ko server ko bhej sakte hain.

// It uses Request and Response objects.               =>                 Fetch API Request aur Response objects ka istemal karta hai. Jab aap data fetch karne ke liye server ko request bhejte hain, tab aap ek Request object ka istemal karte hain. Jab server se response milta hai, tab aap ek Response object ka istemal karte hain.

// The fetch method is used to fetch a resource(data).                   =>                Fetch method ko resource (yaani ki data) fetch karne ke liye istemal kiya jata hai. Yani ki, jab aap kisi URL se data fetch karna chahte hain, tab aap fetch method ka istemal karte hain. Ye method aapko server se data retrieve karne mein madad karta hai aur wo data aapke JavaScript code mein available ho jata hai.

// manlo ki hum koi restaurent me jate hai aur waha par kuchh bhi khane ke liye order krte hai aur waiter order lekr chala jata hai aur thodi der me khana lekr aa jata hai, ab hume bilkul pta nhi hota hai ki uss khane ko kisne, kaise, kab banaya hai hume bas final jo output hota hai khane ka wahi bas milta hai aur hume sirf usi se mtlb hota hai. isi tarah api's bhi hoti hai ki humne koi request bheji aur uss request ne api server pr jakr kya kiya, kaise data response kiya, wo data kitna accurate hai, kaise uss data ko prepare kiya gaya hai, ye sab se hume mtlb nhi hota hai hume sirf jo output milta hai usse hi mtlb hota hai.

// jab bhi hum kisi browser pr koi link ya kuchh bhi search(request bhejna) krte hai to wo browser hume ek page ya kuchh data(response dena) deta hai. ab yahi kaam hum apne code ki madad se karna chahte hai. 
// google pr free apis search karoge to aapko bahot sari free me available apis mil jayegi, aur isi tarah freely available ek api hai => 
// free-apis.github.io/#/browse        ya phir        browse all free apis
// aap iss link ko endpoints ke sath search krte hai aur aapko koi object ya array ke roop me data milta hai to phir sahi hai aur yadi koi error show hota hai to phir aap brave me saved version Wayback Machine ka use kre isme jarur output milega.

// Example => 
// const URL = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(URL);
// console.log(promise);           // jab hum promise ko log krte hai to wo phle to pending me hota hai phir data thodi hi der me fetch ho jata hai aur state fulfilled ho jati hai aur result me kai sari cheeje milti hai. result me yadi status 200 hai iska mtlb hai ki jo data aap chahte the vo data aapko mil gaya hai.

// promises se data nikalne ke liye humne promises chaining aur async-await ko padha hai aur async-await jada behtar hai chaining se isliye async-await ko use karege.


// const URL = "https://cat-fact.herokuapp.com/facts";
// const getFacts = async () => {    // kyuki hum promises ke sath seal kr rhe hai to apne function ko async banane ke liye function se phle async likh dege.
//     console.log("Getting Data...");
//     let response = await fetch(URL);     // kisi bhi api ko call krke data mangwana asynchronous kam hai. yaha se jo bhi return hota hai generally usey programming me response kahte hai. aur kyuki ye fetch krna ek asynchronous kam hai mtlb ise kuchh time lag skta hai isliye isse phle await likh dege.
//     console.log(response);            // yaha ye response as an object ki tarah hai. ye JSON formate me hai.
// }
// getFacts();   // ise hum console pr seedha call kare to jada acche se samajh aayega ki data fetch hone me actualy thoda time lagta hai uske baad hi Response milta hai. 
// generally jab koi naya data aata hai to page ke reload hone pr aata hai lekin yaha aisa nhi ho rha hai thode se delay ke baad Response aata hai bina page ke reload hue. ye sari information runtime pr hi aa hri hai.

// fetch method ka syntax => let promise = fetch(url[,option])   yaha ye option optional hota hai. yadi hum option me koi value nhi dete hai to fetch automatic hi GET request ko option ki jagah pr access kr leta hai. wo request jinka kam sirf data ko kahi se lana hota hai unhe GET request kahte hai. browser me jab bhi koi link bhejte hai to normally browser bhi GET request hi bhejta hai. 
// jab aap console pr response ko dekhte ho to kuchh ajeeb sa data milta hai wahi yadi aap iss link ko browser pr run karoge to to kuchh aur hi data milega ye dono hi alag-alag hoge aur readable nhi hoge ise readable banane ke liye kuchh terms padhte hai => 
// (1.) AJAX => Asynchronous JavaScript & XML.
// (2.) JSON => JavaScript Object Notation.
// (3.) json() method => returns a second promise that resolves with the result of parsing the response body text as JSON. (Input in JSON, Output is JS Object). ye second promise deta hai kyuki phla wala fetching krte samay aa chuka hota hai. json() bhi asynchronous h.
// phle ke time me API request ya network request bhejne ke baad jo data aata tha wo XML ke formate me aata tha iske liye hume XML ko bhi padhna padta tha, lekin ab ke time me JSON formate me data aata hai jise samajhna aasan hai XML ki tulna me. JSON ko dekhne me ye JS object jaisa dikhta hai lekin ye JS object nhi hota hai.
// kyuki XML ko JSON ne replace kr diya hai isliye ab ke time me data fetch krna(req krna , response milna) usey hum AJAJ(Asynchronous JS & JSON) kahte hai, lekin ye jada popular term nhi hai isliye hum aaj bhi AJAX hi bolte hai.



// const URL = "https://cat-fact.herokuapp.com/facts";
// const getFacts = async () => {
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();        // ye data ko js object ke roop me dega.
//     console.log(data);                       // yaha data print ho rha hai jo ki ek array hai aur iss array me 5 objects hai. har ek object me kuchh details di gayi hai inn details me se text hai jo cat facts batata hai.
// }
// getFacts();


// const URL = "https://cat-fact.herokuapp.com/facts";
// const getFacts = async () => {
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     console.log(data[2].text);             // 3rd index ka text print karaya gya hai. 
//     console.log(data[1].text);             // 2nd index ka text print karaya gya hai.
//     console.log(data[1].text);             // 1st index ka text print karaya gya hai.
//     console.log(data[4].text);             // 4th index ka text print karaya gya hai.
// } 
// getFacts();







// HTML page me print karane ke liye =>
// const catFacts = document.querySelector("#catFacts");
// const catFactsBtn = document.querySelector("#catFactsBtn");

// const URL = "https://cat-fact.herokuapp.com/facts";
// const getFacts = async () => {
//     let response = await fetch(URL);
//     let data = await response.json();
//     catFacts.innerText = data[2].text;
// }

// catFactsBtn.addEventListener("click", function(){
//     getFacts();
// })

// or

// catFactsBtn.addEventListener("click", getFacts);











