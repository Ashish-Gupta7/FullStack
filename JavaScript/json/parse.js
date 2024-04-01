// jab bhi hum api se data fetch krte hai to hume kuchh iss  tarah ka data milta hai aur ussey hum kisi variable me save kr lete hai.

let data = `{
    "name": "Ashish Gupta",
    "age": 23,
    "is_student": true,
    "passport_number": null,
    "p_lang": ["c", "c++", "java", "javaScript"],
    "address": {
        "city": "shahdol",
        "state": "Madhya Pradesh",
        "pincode": 484771
    }
}`       
// strings aapas me concatenate na ho isliye ise backtick ke ander rakha gaya hai.

let dataObj = JSON.parse(data);    // ye synchronous js ke liye hai.
// JSON.parse(), json data ko javascript object me convert kr deta hai.
console.log(dataObj);
console.log(dataObj.name);
console.log(dataObj["name"]);
console.log(dataObj['name']);

// Dot notation (dataObj.name), bracket notation (dataObj["name"]), aur single quoted bracket notation (dataObj['name']) mein koi bhi functional difference nahi hai. Sabhi se aap ek object ke property "name" ki value ko access kar sakte hain jo dataObj ke reference se milta hai.
// Lekin, kuch situations mein aapko ek notation ko doosre se prefer karna chahiye:
// Dot notation (dataObj.name) wahi hai jab property ka naam ek valid JavaScript identifier hai aur koi special characters jaise spaces ya hyphens nahi hain. Ye concise aur padhne mein aasan hota hai.
// Bracket notation (dataObj["name"] ya dataObj['name']) zaroori hota hai jab:
// Property ka naam ek variable mein store hai, jaise dataObj[propertyName].
// Property ka naam special characters ya spaces jaise dataObj["first name"] hai.
// Aap dynamic taur par properties ko access karna chahte hain, jaise dataObj["name" + suffix].

console.log(dataObj["p_lang"]);
console.log(dataObj.p_lang[2]);
console.log(dataObj["p_lang"][2]);
console.log(dataObj["address"]);
console.log(dataObj.address.city);
console.log(dataObj["address"]["city"]);