//var pounds = document.querySelector("#pounds");
var inputbtn = document.querySelector("input");
var gramms = document.querySelector("#grams");
var kg = document.querySelector("#kg");
var ounce = document.querySelector("#oz");
var answers = document.querySelector("#output");

answers.classList.add("hide");

pounds.addEventListener("input", function(){
    let inputed = inputbtn.value;
    answers.classList.add("show");
    gramms.innerHTML = inputed/0.0022046;
    kg.innerHTML = inputed/2.2046;
    ounce.innerHTML = inputed*16;
});