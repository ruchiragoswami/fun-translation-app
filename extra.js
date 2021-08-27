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