// var userName = prompt("What is your name?")
// alert("Alert hello " + userName);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL (text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler (error){
    console.log("Error occurred: ", error);
    alert("Something is wrong. Try again later.")
}


function clickHandler() {
    var inputText = txtInput.value; //taking input

    // console.log("Clicked!");
    // console.log("input", txtInput.value);
    // outputDiv.innerText = "bababababbananananna " + txtInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)

// /**
//  * Exercise:
//  * 1. document.querySelector("textarea");
//  * 2. .btn-primary
//  * 3. #input-btn
//  * 4. input[name='translator'];
//  */