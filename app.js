const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#text-input");
const outputTxt = document.querySelector("#output");


function clickHandler() {
    console.log("Button was clicked");
    // console.log(txtInput.value);
    outputTxt.innerText= "Translated: asdasdadadasd  " + txtInput.value ;

}

btnTranslate.addEventListener("click", clickHandler); 

// outputTxt.innerText = "Ruchi Goswami"; 

/*
"textarea"
.btn-primary
#input-btn
*/