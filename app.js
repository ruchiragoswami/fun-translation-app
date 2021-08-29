let userInput = document.querySelector("#text-input");
let translateButton = document.querySelector("#btn-translate");
let outputDiv = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

function constructURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler() {
    alert("Something went wrong! Please try again later :) ");
}

function clickHandler() {
    console.log("the button was clicked, you entered: " + userInput.value);
    // Input
    let inputText = userInput.value;

    // Processing
    fetch(constructURL(inputText))
        .then(response => response.json())
        .then(hey => {
            // output
            let translatedText = hey.contents.translated;
            outputDiv.innerText = translatedText;} )
        .catch(errorHandler);    
    }

translateButton.addEventListener("click", clickHandler);