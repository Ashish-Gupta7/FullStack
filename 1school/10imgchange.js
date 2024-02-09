var button = document.querySelector("button");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img1src = img1.getAttribute("src");
var img2src = img2.getAttribute("src");
console.log(img1);
console.log(img2);


var flag = 0;
button.addEventListener("click", function(){
    if(flag == 0){
        img1.setAttribute("src", img2src);
        img2.setAttribute("src", img1src);
        flag = 1;
    }
    else{
        img1.setAttribute("src", img1src)
        img2.setAttribute("src", img2src)
        flag = 0;
    }
});