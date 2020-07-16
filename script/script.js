let operator;
let calculator = {
    num1: "",
    num2: "",
}
let num1 = +calculator.num1;
let num2 = +calculator.num2;

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
    calculator.num1 = "";
    calculator.num2 = "";
    operator = "";
})

//Operators
let operatorButton = document.querySelector(".operators");
let operatorClick = operatorButton.querySelectorAll("button");
operatorClick.forEach((button) => {
    button.addEventListener("click", function () {
        if (calculator.num1 == undefined) {
            calculator.num1 = displayText.innerText;
            displayText.innerText = "";
            operator = button.innerText;
        } else if (calculator.num1 !== undefined) {
            calculator.num2 = displayText.innerText;
        }

    })
})

let result = document.querySelector("#result");
result.addEventListener("click", function () {
    displayText.innerText = `${operate(num1, operator, num2)}`
})