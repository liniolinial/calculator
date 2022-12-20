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
                // stringNumberToInt(screen)
                updateDisplay();
        });
})
//keyboard Press-> noch nicht
// document.addEventListener("keydown", function(ev){
//         buttonAnimation(ev.target);
//     });

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
                // screen = parseInt(screen).toLocaleString("de-DE");
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
                alert("How to use the % calculator: Multiply the numbers first. Then add a % to the last number.")
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "result"){
                operation = new Function(`return ${operation}`)(result);
                result = operation;
                // screen += "=";
                console.log(operation);
                return;
        }
        // frühere result if kondition weg und probiere mit einzelen separaten operation funktion ohne new funktion.
        // if(event.target.dataset.buttonOperation === "result"){
        //         //zahl operator zahl2 = result
        //         //welcher operator gedruckt wurde
        // }
        operation += event.target.dataset.buttonOperation;
        screen += event.target.dataset.buttonOperation;
        console.log(operation);
}

//parseInt helper function
// function getNumber({ value, defaultValue }) {
//         const num = parseInt(value, 10);
//         return isNaN(num) ? defaultValue : num;
//       }

// display update-show window
function updateDisplay(){
        //number/string

        // console.log(typeof screen);
        // console.log(parseInt(screen));
        // displayOperation.innerText = operation;
        displayScreen.innerText = screen;  //parseInt(screen,10)
        console.log(typeof result);
        displayResult.innerText= result.toLocaleString("de-DE");   //parseInt(result,10)
}
