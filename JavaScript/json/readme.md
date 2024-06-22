# What is JSON
[json](https://www.json.org/json-en.html)
[json verify](https://jsonlint.com/)

JavaScript object notation.

1. AJAX => Asynchronous JavaScript & XML.
2. JSON => JavaScript Object Notation.

phle ke time me API request ya network request bhejne ke baad jo data aata tha wo XML ke formate me aata tha iske liye hume XML ko bhi padhna padta tha, lekin ab ke time me JSON formate me data aata hai jise samajhna aasan hai XML ki tulna me. JSON ko dekhne me ye JS object jaisa dikhta hai lekin ye JS object nhi hota hai.
kyuki XML ko JSON ne replace kr diya hai isliye ab ke time me data fetch krna(req krna , response milna) usey hum AJAJ(Asynchronous JS & JSON) kahte hai, lekin ye jada popular term nhi hai isliye hum aaj bhi AJAX hi bolte hai.

## Uses
Commonly used for API and config files(jaise vs code me css ke liye boilerplate banaya hai vo ek jason format hai, mtlb vs code ka configuration json format me hota hai.)

JSON is a text format for storing and transporting/transffering data.

## syntax
```
{
    "name": "Ashish Gupta",
    "age": 23,
    "is_student": true,
    "passport_no": null,
    "p_lang": ["c", "c++", "java", "javaScript"],
    "address": {
        "city": "shahdol",
        "state": "Madhya Pradesh",
        "pincode": 484771
    }
}
```

Data is in key and value pairs. isme key aur value dono hi sirf double qoutes me hote hai.
Data is seperated by commas.
Curly braces hold objects.
Square brackets hold arrays.
last line me comma lagakr nhi chhoda jata hai.

## Dependency
JSON is language independent. mtlb JSON me JavaScript hai iska mtlb ye nhi hai ki ye sirf JavaScript ke liye hai ye kisi bhi language ke sath kaam kr skta hai.

## Methods

1. **JSON.parse()**
- JSON.parse() is a synchronous JavaScript function. 
- When you call JSON.parse(), it will synchronously parse the JSON string and return the parsed JavaScript object. It does not involve any asynchronous operations.

2. **JSON.stringify(json)**
- to parse a JS object data into JSON.

3. **json() method**
- returns a second promise that resolves with the result of parsing the response body text as JSON. (Input in JSON, Output is JS Object). 
- ye second promise deta hai kyuki phla wala fetching krte samay aa chuka hota hai. 
- json() bhi asynchronous h.

## Testing API requests
1. Postman
2. Hoppscoth - no need to download anything