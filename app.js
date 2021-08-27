const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#text-input");

function clickHandler() {
    console.log("Button was clicked");
    console.log(txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler); 

