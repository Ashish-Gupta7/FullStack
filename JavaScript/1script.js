console.log("WELCOME in JavaScript");
// Invented in 1995 at Netscape corporation(LiveScript).Branden eich is father of JavaScript. it was initially called "LiveScript", lekin us time me Java language bahot popular thi isliye iska naam bhi Java se milta julta rakh diya gya.
// JS is an Interpreted, client-side(JS programs are run by an inerpreter built into the user's web browser, mtlb JS ke programs interpreter ke dwara user ke computer per run ho skta h isliye ise client-side scripting language bhi kahte h), event based, object-oriented scripting language.
// It is a case sensitive language, mtlb issme upeer case lower case, variables, functions in sabhi ka dhyan rakhna padta h.
// JavaScript ko browser me chalane ka kam JavaScript ke engine ka hota h jiska naam 'Spider-Monkey' h.
// In java => Source code -> compiler -> machine code -> output.
// Im JavaScript => Source code -> Interpreter -> output.
// JS me hm semicolon use karen ya n karen isse koi fark nhi padta h.
// JS me hm single ya double quotes kisi ka bhi use kr skte h koi fark nhi padta h, usey hm string hi kahenge.
// language 3 tarah ki hoti h, 1. Markup - ise tags ke roop me likhte h, 2. Programming language - ise compiler run krta h, 3. Scripting language - ise interpreter run krta h.
// JavaScript ek client side Scripting language h isliye ye interpreter ki madad ser run hota h.
// interpreter aur compiler dono ka kam source code ko machine code me badalna hota h.
// Interpreter VS Compiler - ye code ko line by line check krta h jabki compiler ek sath poora code run kr deta h, ye line by line code run krte samay jis bhi line pr error pata h waha pas ruk jata h jb tk ki us error ko theek n kiya jaye lekin compiler poore errors ko ek sath show kr deta h, ye code ko machine language me change krne ke bad us code ko execute bhi krta h jabki compiler sirf machine code me change krta h,ye error ko teji se hatata h jabki compiler dheema hota h,ye edit krne me adhik samay leta h jabki compiler km samay leta h.
// JavaScript can execute not only in the browser, but also on the server.
// We will use JavaScript as a client as well as server side language.
// ECMA JS ka version h jo 2015 me aaya tha aur ab koi bhi JS ka naya version aata h to ECMA ko update kr diya jata h.
// JS me jadatr objects hi hota h, jaise Array, String ye objects hi h.

console.log("WHAT CAN IN-BROWSER JAVASCRIPT DO?");
// JS can dynamically modify an HTML page. JS bina page ko refresh kiye bhi run ho skta h, eg.- kisi page me clock lga hota h vo continue chlta rhta h ye JS ki madad se hota h.
// JavaScript bahot hi safe language h kyuki ye browser ke throw hi run ho jata h ye computer ke cpu vagaira ki permission nhi magta h, jisse hamara computer hackers se safe rahta h.
// JS add new Html and change existing Html from DOM.
// React to Events - (1.) Response from server, (2.) Any key press, (3.) Mouse movement.
// AJax requests - (Asynchronous JavaScript and XML) ye bina page ko reload kiye page ke content ko dynamically change krne ke me madad krti h.
// Get & set cookies & use local storage.
// JS bina server connection ke bhi chal skti h.

console.log("WHAT CAN'T IN-BROWSER JAVASCRIPT DO?");
// Read/Write to & from computer hard disk, mtlb JS ko browser kabhi bhi kisi bhi computer hard disk ko read/write krne ki permission nhi deta h lekin user chahe to permission de skta h.
// same origin policy ke tahat browser kisi bhi site ko dusre site ke user ke data access krne se rokti h, agar ye dono sites handshake krte h to mumkin h ki ye user data share krle.

console.log("What makes JavaScript unique");
// Full integration with Html and Css.
// Simple things ke liye simple API's(Application programming interface)/ complex things are done by simply.
// Major modern browsers enabled by default.

console.log("JS frameworks and libraries");
// Angular, React, jQuery, Vue.js, Ext.js, Ember.js, Node.js, Polymer, Aurelia, Backbone.js

console.log("Internal and External JS");
// External - ise html ki body ke ander likhte h.
// <script src=""></script>
// Internal - ise bhi html ki body ke ander likhte h.
// <script></script>

// defer attribute - iska use external JS me krte h jb html aur css ko phle run krwana ho aur JS ko baad me aisa krne pr aap script tag ko html me kahi bhi likh skte ho jb tk html aur css load nhi hogi tb tk JS run nhi hoga.
// Async attribute - Aap chahte ho ki DOM ke sath sath hi JS bhi load ho jae to Async attribute ko use krte h.

console.log("Word Vs Keyword");
// Word Vs Keyword - Aisa kuchh bhi jiska JS me kuchh bhi mtlb nhi h vo word hoga aur jiska JS me kuchh mtlb hoga vo keyword hoga. Eg.- chacha, money, man, are... ye sb words h aur var, let, const, for, while, if, else... ye sb keywords h.

console.log("Comments");
// single line comment ke liye => double slash '//' ka use krte h.
// multi line comment ke liye => /* ... */ ka use krte h, jaha ... iska mtlb multi line code se h.

// JavaScript Dynamically typed language h iska mtlb other language me pratyek value ko define krna hota h lekin JS me sirf var/let/const ka use krte h jisse pratyek tarah ki values define ho jati h JS ko values ke Data type ke baare me nhi batana padta h, wahi doosri aoor c, c++, java... jaisi languages me values ke data type ko batana padta h.


console.log("TypesInJavaScript");
// 1. Primitive - Number, String, null, undefined, Boolean(true=1, false=0), NaN(not a number), BigInt
/* (a) Boolean => ye 2 tarah ki values ko represent krta h - true or false in dono me se koi ek hi ek time pr aayega.
(b) Undefined => jab bhi variable ko initialise nhi kiya gya ho tb vo variable undefined hota h.
(c) null => A null means absence of a value. */
console.log(typeof(undefined));   // undefined
console.log(typeof(null));   // object
console.log(typeof(NaN));   // number
console.log(typeof(true));   // boolean
console.log(typeof(false));   // boolean
console.log(typeof(""));   // string
console.log(typeof(''));   // string
console.log(typeof(``));   // string, backtick esc ke neeche.
console.log(typeof(1232));   // number
console.log(typeof(abcd));   // undefined, kyuki abcd naam ka koi variable nhi h yadi abcd naam ka koi variable banate h to abcd ka type vahi hoga jo uski value ka type hoga.
console.log(typeof(BigInt));  // function, JS pr use hone wala sabse bada number 9007199254740991 h, agar aapko JS me isse bada koi number use krna h to bigint function ka use krna hoga. 2 ki power 53 minus 1 equal to 9007199254740991 hoti h. ise ES2020 me introduce kiya gya h. eg.-
var maxnum = Number.MAX_SAFE_INTEGER;
console.log(maxnum);
console.log(maxnum++);
console.log(maxnum++);
console.log(maxnum++);
console.log(maxnum++);  // ek badhne ke baad ye ruk gya h.

var bint = 90071992547409914567n;   // 1st method to use bigint, last me n laga dena.
console.log(bint);
console.log(typeof(bint));     // bigint
var bint1 = BigInt(90071992547409914567);    // ye last me zeros ko add kr deta h. bigint function ke dwara.
console.log(bint1);
console.log(typeof(bint1));   // bigint
var bint2 = BigInt('90071992547409914567');    // bigint itne bade wale number ke string ko number me convert kr deta h.
console.log(bint2);
console.log(typeof(bint2));    // bigint


// 2. Reference - (), {}, []  - kahi pas bhi brackets dikhe to waha pas reference hota h aur brackets n ho tb primitive type JS hota h.
// Aisi koi bhi value jise copy karne pr real copy nhi hota h sirf value refer hoti h usey reference type JS kahte h aur jisme real copy ho jae usey Primitive type JS kahte h.
// 1. eg.- var f = 12;    -> f ki apni value 12 h.
//         var g = f;     -> g ki value f ki value ke barabar h.
//         g = 15;
//         console.log(f,g);
//         mtlb g ki value bhi 12 h. yaha f ki value me Brackets nhi h mtlb ye primitive h, isliye f ne Real copy kr liya h. mtlb f ke pas apna 12 aur g ke pas apna 12 h. yaha g ki value ko reset krne pr g ki value reset ho jaegi lekin f ki value pr koi fark nhi padega.
// 2. eg.- var h = [1,2,3,4];      -> yaha h ek reference h jiski values 1,2,3,4 h.
//         var i = h;              -> hmne h ko i ke dwara copy krne ki kosis ki h.
//         i[1] = 8,9;
//         console.log(h,i);
//         kyuki h reference value rakhta h isliye usey directly iss tarah se copy nhi kr skte ye refer hona kahlata h mtlb h ke pas jo 1,2,3,4 h wahi 1,2,3,4 i ke pas bhi h, ,mtlb i ki values ko reset krne pr actual resetting h ke sath bhi ho jaegi.
var f = 12;
var g = f;
g = 15;
console.log(f,g);

var h = [1,2,3,4];
var i = h;
i[1] = 8,9;
console.log(h,i)

console.log("How to copy Reference");
// How to copy Reference - ans is with help of spread operator (...) isme 3 hi dots hote h in dots ke baad jo bhi likha hota h usey copy krke usi bracket me rakh deta h, aur jis bhi cheej ko copy krna chahte ho bracket dono ke same hone chahiye. eg.-
//         var a = [1,2,3,4,5]
//         var b = [...a]
//         b.pop();             b array ke last me se ek value ko hta dega. kyuki value copy ho chuki h isliye a ko koi ferk nhi padega.
// ...a ki jagah a ki value 1,2,3,4,5 rakh di jaegi isi tarah se ye copy hota h.

console.log("Browser Context API");
// iske andar 3 cheeje aati h (1.)window object, (2.)stack, (3.)heap memory.
// (1.)window object - var VS let & const ke (c.) point me iski details h.
// (2.)stack - hme pta h ki code line by line run hota h. eg. hmne code likha - 
//                    a _ _ _ _ _ _ _ _ _
//                    b _ _ _ _ _ _ _ _ _
//                    c _ _ _ _ _ _ _ _ _
//                    d _ _ _ _ _ _ _ _ _
// yaha stack ek box bayega aur phir iss code ko line by line (a to d) uss box me rakhega aur jo phle aaya h usey phle complete(run) karega mtlb phle a phir b aur isi tarah aage sabhi ko run krta h.
// (3.)heap memory - by eg.- 1+2+3+4 =10 1sey hm direct ek sath add krte h lekin computer isey step by step add krta h mtlb phle 1+2 = 3, then 3+3 = 6 and 6+4 = 10 aur iss process me jo beech-beech me total milte h jaise yaha pr 3 aur 6 h jo ki ans nhi h inhi ko kuchh samay ke liye computer heap memory me store krti h aur overall total hone ke baad isey delete kr deti h.

console.log("Execution Context");
// execution context ka mtlb jb hm function chalayege tb function apna khud ka ek imaginary container bana leta h jisme uski 3 cheeje hoti h. Ye imaginary container hi execution context hota h. (1.)Variable (2.)us function ke ander ka function aur (3.) function ka lexical environment.
// Lexical Environment - Ye ek chart jaisa h jisme likha hota h ki aapka particular function kin cheejo ko access kr skta h aur kin cheejo ko access nhi kr skta h. isey technically scope bhi kahte h isliye iski definition - It holds it's scope and scope chain. eg.-

//                function ash(){
//                     var a = 12;
//                     function asdfg(){
//                          var b = 15;
//                     }
//                }
// variable apne nearest function tk hi access ho skta h isiliye ash() var b ko use nhi kr skta h. jb koi function bnta h to uska execution context bhi banta h aur uske ander hi variable, children function aur lexical environment aata h.
// yaha function ash() ka execution context banega aur isi ke andar variable a, function asdfg() aur ash() ka lexical environment bhi aayega.

