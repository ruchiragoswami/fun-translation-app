const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#text-input");
const outputTxt = document.querySelector("#output");

// const serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

const serverURL = "https://api.funtranslations.com/translate/valyrian.json";


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured.", error);
    alert("Something is wrong with the server, please try again after sometime.")
}


function clickHandler() {
    
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText)) 
        .then(response => response.json())
        .then(hey=> { 
            var translatedText = hey.contents.translated;
            outputTxt.innerText = translatedText;
        })
        .catch(errorHandler);                      
}

btnTranslate.addEventListener("click", clickHandler); 

