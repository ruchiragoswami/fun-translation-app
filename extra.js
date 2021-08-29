let txtInput = document.querySelector("#text-input");
let translate = document.querySelector("#btn-translate");
let output =document.querySelector("#output");

function clickHandler() {
    console.log("clicked");
    console.log("Your input is " + txtInput.value    );
}



translate.addEventListener("click", clickHandler ); 


/* Html buttons 
<div> 
        <button id="button1"> button1 </button>
        <button id="button2"> button2</button>
        <button id="button3">button3</button>
        <button id="button4">button4</button>
        <button id="button5">button5</button>
        </div>

        js part 
        let btn1 = document.querySelector("#button1");

function clickHandler1() {
    console.log("Button 1 was clicked");
}

btn1.addEventListener("click", clickHandler1);

const btn2= document.querySelector("#button2");

function clickHandler2() {
    console.log("Button 2 was clicked");
}

btn2.addEventListener("click", clickHandler2); 

const btn3 = document.querySelector("#button3");
function clickHandler3() {
    console.log("Button 3 was clicked");
}
btn3.addEventListener("click", clickHandler3); 


const btn4 = document.querySelector("#button4");
function clickHandler4() {
    console.log("You clicked button 4"); 
}

btn4.addEventListener("click", clickHandler4);

const btn5 = document.querySelector("#button5");

function clickHandler5() {
    console.log("Hey, this was the last button clicked");
}

btn5.addEventListener("click", clickHandler5);
*/

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



// Date 29 aug 2021

let userInput = document.querySelector("#text-input");
let btnTranslate = document.querySelector("#btn-translate");
let showOutput = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/pig-latin.json" ; 


function constructURL(text) {
    return serverURL + "?" + "text=" + text; 
}


function errorHandler(error) {
alert("Something went wrong, please try again later!" , error)
}


function clickHandler() {
    console.log("The button was clicked." );
    console.log(userInput.value);

    // Input
    let inputText = userInput.value; 

    // processing 
    fetch(constructURL(inputText)) 
        .then(response => response.json())
        .then( hey => { 
            var translatedTxt = hey.contents.translated ;
             // output 
            showOutput.innerText = translatedTxt; })
        .catch(errorHandler)    ;
}

btnTranslate.addEventListener("click", clickHandler);
