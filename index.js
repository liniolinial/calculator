const display = document.querySelector(".display");
const displayOperation = display.querySelector(".display__operation");
const displayScreen = display.querySelector(".display__screen");
const displayResult = display.querySelector(".display__result");

let operation = "";
let screen = ""; 
let result = "";

//Calculator buttonHover, click
const buttons = document.querySelectorAll(".calc-btn");
console.log("buttons", buttons);
buttons.forEach(button => {
        button.addEventListener("click", function(event) {
                buttonPress(event);
                updateDisplay();
        });
        document.addEventListener("keydown", function(event) {
                keyPress(event.key);
                updateDisplay();
                // keyPressHover(event.key);
        });
})

// key press value
function keyPress(key){
        switch(key) {
                case "1":  
                        operation = "1";
                        screen = "1";
                        console.log(operation);
                        break;

                case "3":
                        operation = "3";
                        screen = "3";
                        console.log(operation);
                        break;
                
                case "Enter":
                        // var key = new Audio("sound/crash.mp3")
                        // key.play();
                        operation = new Function(`return ${operation}`)(result);
                        result = operation;
                        console.log(operation);
                        break;

                default: console.log(operation)
                }
                
  }

//keypress animation css
// function keyPressHover(currentKey){
//         var activeButton = document.querySelectorAll("." + currentKey);
//         activeButton.classList.add("calc-btn");
//         setTimeout(function(){
//             activeButton.classList.remove("calc-btn");
//         }, 100);
//     }

// document.addEventListener("keypress", function (ev) {
// function keyPress(ev){
//         // decimal point
//         if ([194].includes(ev.charCode)) {
//                 // , .
//                 operation += '.';
//                 screen += ",";
//                 input(".");
//                 return;
//                 console.log(operation);
//         }
//         // digits
//         if ([48, 49, 50, 51, 52, 53, 54, 55, 56, 57].includes(ev.charCode)) {
//                 // 0-9
//                 input(ev.charCode - 48);
//         }
//         operation += ev.target.dataset.buttonOperation;
//         screen += ev.target.dataset.buttonOperation;
//         console.log(operation);
// }



//button click
function buttonPress(event){
        if (!event.target.matches("button")){
                return;
        }
        if(event.target.dataset.buttonRemove === "AC"){
                operation = '';
                screen = '';
                result = '';
                return;
        }
        if(event.target.dataset.buttonRemove === "DEL"){
                operation = operation.substr(0, operation.length-1);
                screen = screen.substr(0, screen.length-1);
                result = '';
                return;
        }
        if(event.target.dataset.buttonOperation === "*"){
                operation += "*";
                screen += "x";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "/"){
                operation += '/';
                screen += "÷";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "+"){
                operation += '+';
                screen += "+";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "-"){
                operation += '-';
                screen += "-";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "."){
                operation += '.';
                screen += ",";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "*0.01"){
                operation += '*0.01';
                screen += "%";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "result"){
                operation = new Function(`return ${operation}`)(result);
                result = operation;
                console.log(operation);
                return;
        }
        // frühere result if kondition weg und probiere mit einzelen -
        // separaten operation funktion ohne new funktion.
        
        // if(event.target.dataset.buttonOperation === "result"){
        //         //zahl operator zahl2 = result
        //         //welcher operator gedruckt wurde
        // }
        operation += event.target.dataset.buttonOperation;
        screen += event.target.dataset.buttonOperation;
        console.log(operation);
}

//numberSize
// function numberSize(){
//         if (event.target.matches.getElementsByClassName("calc-btn", "operator"))
//         operation = operation.substr(0, operation.length-1);
//         screen = screen.substr(0, screen.length-1);
// }

// display update-show window + NumberSize
function updateDisplay(){
        // displayOperation.innerText = operation;
        displayScreen.innerText = screen;
        console.log(typeof result);
        displayResult.innerText= result.toLocaleString("de-DE");
}
