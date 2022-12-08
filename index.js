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
                buttonAnimation(event); 
                buttonPress(event);
                updateDisplay();
        });
})

//keyboard Press-> noch nicht
// document.addEventListener("keydown", function(event){
//         buttonAnimation(event.target);
//     });

function buttonAnimation(event){
        event.target.classList.add("pressed");
        
        setTimeout(function(){
                event.target.classList.remove("pressed");
        }, 50);
}

function buttonPress(event){
        if (!event.target.matches("button")){
                return;
        }
        if(event.target.classList.contains("btnClear")){
                operation = '';
                result = '';
                return;
        }
        if(event.target.classList.contains("result")){  //wenn multi (statt result) -> dann operator + oder -, hier weiter if condition oder so usw..
                operation = new Function(`return ${operation}`)(result);
                result = operation;
                return;
        }
        if(event.target.classList.contains("multiply")){
                operation += '*';
                console.log(operation); //auch für % rechnen 
                return;
        }
        operation += event.target.innerText; //
        console.log(operation);
}

//display update-show window
function updateDisplay(){ 
        displayOperation.innerText = operation;
        displayResult.innerText = result;
}

//handle key press: number press->calculate
//calculate function
// const keys = document.querySelectorAll(".calc-btn");
// keys.addEventListener("click", (event)=>{
//         const {target} = event;
// });

//calculator function
// const numbers = document.querySelectorAll('.num');
// const operator = document.querySelectorAll('.operator');

// const keys = document.querySelector(".num");
// keys.addEventListener("click", ())

// function calculate(n1, operator, n2) {
//         let result = 0;
//         n1 = parseInt(n1);
//         n2 = parseInt(n2)
//         if (operator === "*") {
//                 result = n1 * n2;
//         }
//         else if (operator === "-") {
//                 result = n1 - n2;
//         }
//         else if (operator === "+") {
//                 result = n1 + n2;
//         }
//         else if (operator === "/") {
//                 result = n1 / n2;
//         }
//         else {
//                 result = "error"
//         } 
//         return result;
// }
