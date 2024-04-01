let student = {
    name: "Ashish Gupta",
    age: 23,
    is_student: true,
    passport_number: null,
    p_lang: ["c", "c++", "java", "javaScript"],
    address: {
        city: "shahdol",
        state: "Madhya Pradesh",
        pincode: 484771
    }
}     

// ye normal javascript object hai. ab ise json me convert krna hai to iske liye JSON.stringify() naam ka method hai. ise json me convert krke hum ise fetch ki madad se server ke pas bhej skte hai.

let jsonData = JSON.stringify(student);
console.log(jsonData);