// var userName = prompt("What is your name?")
// alert("Alert hello " + userName);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    console.log("Clicked!");
    console.log("input", txtInput.value);
    outputDiv.innerText = "bababababbananananna " + txtInput.value;
};


btnTranslate.addEventListener("click", clickHandler)

/**
 * Exercise:
 * 1. document.querySelector("textarea");
 * 2. .btn-primary
 * 3. #input-btn
 * 4. input[name='translator'];
 */