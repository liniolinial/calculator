const display = document.querySelector(".display");
const displayOperation = display.querySelector(".display__operation");
const displayResult = display.querySelector(".display__result");
let operation = '';
let result = '';


//Calculator buttonHover, click
var buttons = document.querySelectorAll(".calc-btn");
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
        // let coma = operation.toLocalString("de-DE");
        if (!event.target.matches("button")){
                return;
        }

        if(event.target.dataset.buttonRemove === "AC"){
                operation = '';
                result = '';
                return;
        }
        if(event.target.dataset.buttonRemove === "delete"){
                operation = operation.substr(0, operation.length-1);
                result = '';
                return;
        }
        // if(event.target.classList.contains("multiply")){
        //         operation += '*';
        //         // multiple = multiple.replace('x', '*');
        //         // operation += multiple;
        //         console.log(operation);
        //         return;
        // }
        // if(event.target.classList.contains("division")){
        //         operation += '/';
        //         console.log(operation);
        //         return;
        // }
        // if(event.target.classList.contains("plus")){
        //         operation += '+';
        //         console.log(operation);
        //         return;
        // }
        // if(event.target.classList.contains("minus")){
        //         operation += '-';
        //         console.log(operation);
        //         return;
        // }
        // if(event.target.classList.contains("decimal")){
        //         operation += '.';
        //         console.log(operation);
        //         return;
        // }
        // if(event.target.classList.contains("percent")){
        //         operation += '*0.01';
        //         alert("How to use the % calculator: Multiply the numbers first. Then add a % to the last number.")
        //         console.log(operation);
        //         return;
        // }

        if(event.target.dataset.buttonOperation === "result"){ // hier auch was ändern
                operation = new Function(`return ${operation}`)(result);
                result = operation;
                return;
        }
        operation += event.target.dataset.buttonOperation;
        console.log(operation);
}
// display update-show window
function updateDisplay(){
        displayOperation.innerText= operation;
        displayResult.innerText= result;
}
