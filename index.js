//Dice Project
function start() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomImageSource = "images/dice" + randomNumber1 + ".png";
        document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

        if (randomNumber1 > randomNumber2) {
                document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
        }
        else if (randomNumber1 < randomNumber2) {
                document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
        }
        else {
                document.querySelector("h1").innerHTML = "Draw!";
        }
}
//////////////////////////////////////////////////////////////////////
const display = document.querySelector(".display");
const displayOperation = display.querySelector(".display__operation");
const displayResult = display.querySelector(".display__result");
let operation = '';
let result = '';

//Calculator buttonHover, click
var buttons = document.querySelectorAll(".calc-btn");
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
                return;
        }
        if(event.target.classList.contains("result")){
                operation = new Function(`return ${operation}`)(result);
                result = operation;
                return;
        }
        operation += event.target.innerText;
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
//         }  //ohne else funktioniert das nicht. Daher irgendetwas hier zu schreiben.
//         return result;
// }


// function clickZero() {
//         const toZero = document.getElementsByClassName("display");
//         toZero.remove();
//         document.getElementsByClassName("display").setAttribute("", result);
// }

// document.getElementsByClassName("num")[0].addEventListener("click", calculate);
// function calculate() {
//         // var num = document.querySelectorAll('.num');
//         document.getElementsByClassName("display").innerHTML = "1";
// }

// xxxx
// function myRechner(event){
//         var num = event.target;
//         document.getElementsByClassName("display").innerHTML = x.querySelector;
// }
// function calculate(){
//         const one = 1;
// document.getElementById("display").innerHTML = one;
// }



////////////////////////////////7
function pepe() {
        document.getElementsByClassName("ex")[0].innerHTML = "No, I don't.";
        document.getElementsByClassName("ex")[0].style.color = "white";
}
function imageChange() {
        var randomNumber3 = Math.floor(Math.random() * 5) + 1;
        var randomPepeSource = "images/pepe" + randomNumber3 + ".jpg";
        document.querySelector(".img-pepe").setAttribute("src", randomPepeSource);
        const frog = {
                firstName: "Pepe",
                lastName: "Navaero",
                id: "ID: pepe7018",
                fullName: function () {
                        return this.firstName + " " + this.lastName + " " + this.id;
                }
        };
        document.getElementsByClassName("ex")[2].innerHTML = frog.fullName();
}
