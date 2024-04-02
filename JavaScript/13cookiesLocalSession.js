// Cookies =>  Cookies ek tarah ke digital footprints hote hain jo internet par humare activities ko track karte hain. Jab bhi hum kisi website ko visit karte hain, wo website ek chhota file humare computer ya mobile mein save kar leti hai, jo humare browsing behavior ko store karta hai. Ye cookies next time jab hum wahi website visit karte hain, wo hume pehchan leti hain aur humare liye personalization ka kaam karti hain, jaise ki login information ya preferences ya phir advertisements dikhane mein madad karti hain. Cookies ka upyog hume better browsing experience dene ke liye hota hai, lekin kuch log privacy concerns ke baare mein bhi chintit hote hain, kyun ki ye humare online activities ko track kar sakti hain.
// jab bhi hum kisi website me login krte hai aur ussme kisi item ko cart me add krte hai to wo data DataBase me jata hai jab hum login hote hai, lekin kuchh aisi bhi websites hoti hai jinme kisi item ko cart me add krne pr wo items cart me add ho jate hai lekin humne to usme login bhi nhi kiya to phir add kaise huaa aap dobara ussme jayege tab bhi cart me add rahega aisa kaise, to hota aisa hai ki jab aap item ko cart me add krte hai to vo website locally yani aapke browser me bhi uss item ko save kr deta hai. mtlb kisi website dwara browser me save kiya gya data hi cookies kahlata hai.

// cookies ko dekhne ke liye inspect => application => cookies
// cookies ko set karna hai toh yeh  =>  document.cookie = "name=John Doe, expires=Wed, 3 Apr 2024 12:00:00 UTC";   aise hi kitne bhi cookies set kr skte hai aur inspect krke dekh skte hai.  aapne jitne bhi cookies banaye hai unhe ek sath dekhne ke lie let x = document.cookie;
// console.log(x);

// agar cookie set krne ke baad bhi application pr cookie na dikhe to browser pr jakr cookies ko all set kr de.
// document.cookie = "name=John Doe, expires=Wed, 3 Apr 2024 12:00:00 UTC";








// Difference between cookies, local storage, session storage =>
// capacity =>  4kb,     10mb,     5mb
// browsers =>  HTML4/HTML5,       HTML5,         HTML5
// Accessible form => Any window,      Any window,        same tab
// Expires => manually set,     never,      On tab close
// storage location => browser and server,     browser only,       browser only
// sent with requests => yes,      no,        no



// Local Storage => localStorage.setItem(key, value)
// localStorage.setItem("name", "AshishGupta"); // to store data in the local storage
// var x = localStorage.getItem("name"); // To retrieve the stored data from the local storage
// console.log(x);
// localStorage.removeItem("name"); // remove a specific item from the local storage
// localStorage.clear(); // clear all items from the local storage



// Session Storage => same as localStorage but it gets cleared when the user closes the tab or restarts the browser. 
// sessionStorage.setItem('favcolor', 'red');
// var y = sessionStorage.getItem('favcolor');
// console.log(y);
