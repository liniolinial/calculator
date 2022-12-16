const display = document.querySelector(".display");
const displayOperation = display.querySelector(".display__operation");
const displayPretty = display.querySelector(".display__pretty");
const displayResult = display.querySelector(".display__result");

let operation = "";
let pretty = "";
let result = "";

//Calculator buttonHover, click
const buttons = document.querySelectorAll(".calc-btn");
console.log("buttons", buttons);
buttons.forEach(button => {
        button.addEventListener("click", function(event) {
                buttonPress(event);
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
                pretty = '';
                result = '';
                return;
        }
        if(event.target.dataset.buttonRemove === "DEL"){
                operation = operation.substr(0, operation.length-1);
                pretty = pretty.substr(0, pretty.length-1);
                result = '';
                return;
        }
        if(event.target.dataset.buttonOperation === "*"){
                operation += "*";
                pretty += "x";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "/"){
                operation += '/';
                pretty += "÷";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "+"){
                operation += '+';
                pretty += "+";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "-"){
                operation += '-';
                pretty += "-";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "."){
                operation += '.';
                pretty += ",";
                console.log(operation);
                return;
        }
        if(event.target.dataset.buttonOperation === "*0.01"){
                operation += '*0.01';
                pretty += "%";
                alert("How to use the % calculator: Multiply the numbers first. Then add a % to the last number.")
                console.log(operation);
                return;
        }

        if(event.target.dataset.buttonOperation === "result"){
                operation = new Function(`return ${operation}`)(result);
                result = operation;
                console.log(operation);
                return;
        }
        operation += event.target.dataset.buttonOperation;
        pretty += event.target.dataset.buttonOperation;
        console.log(operation);
}
// display update-show window
function updateDisplay(){
        displayPretty.innerText = pretty;
        displayResult.innerText= result;
}
