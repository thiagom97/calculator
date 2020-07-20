/*TODO LIST
Fix the dot
String several operations together
Fix the clear button
Make it able to input a new number after the result*/

let calculator = [];

let isa = false; //makes num2 more than one character long

let num1 = +calculator[0];
let num2 = +calculator[2];

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }

}
let displayText = document.querySelector("#displayText");
let numbers = document.querySelector(".numbers");
let numberClick = numbers.querySelectorAll("button");
numberClick.forEach((button) => {
    button.addEventListener("click", function () {
        // Ajeitar o ponto
        const dotIndex = displayText.innerText.indexOf(".");
        if (dotIndex > -1) {
            document.getElementById("dot").disabled = true;
        } else if (dotIndex === -1) {
            document.getElementById("dot").disabled = false;
        }

        displayText.innerText += button.innerText;

        if (typeof (calculator[1]) !== "undefined" && !isa) {
            displayText.innerText = "";
            displayText.innerText += button.innerText;
            isa = true;
        }

    })
})
//Delete 1 character
let del = document.getElementById("del");
del.addEventListener("click", function () {
    let deletedNumber = displayText.innerText;
    displayText.innerText = deletedNumber.substring(0, deletedNumber.length - 1);

})

//Clear Display
let clear = document.getElementById("clear")
clear.addEventListener("click", function () {
    let span = document.querySelector("span");
    span.innerText = "";
    calculator = [];
})

//Operators
let operatorButton = document.querySelector(".operators");
let operatorClick = operatorButton.querySelectorAll("button");
operatorClick.forEach((button) => {
    button.addEventListener("click", function () {
        if (typeof (calculator[0]) !== "undefined") {
            calculator[2] = displayText.innerText;
        } 
        if(typeof(calculator[0]) === "undefined" && typeof(calculator[1]) === "undefined"){
            calculator[0] = displayText.innerText;
            calculator[1] = button.innerText;
        }
        
        


    })
})

let result = document.querySelector("#result");
result.addEventListener("click", function () {
    if (typeof (calculator[2]) === "undefined") {
        calculator[2] = displayText.innerText;
    }
    displayText.innerText = `${Math.round((operate(+calculator[0], calculator[1], +calculator[2])+ Number.EPSILON) * 100) / 100}`
})