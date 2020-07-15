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
displayText = document.querySelector("#displayText");
let numbers = document.querySelector(".numbers");
let numberClick = numbers.querySelectorAll("button");
numberClick.forEach((button) => {
    button.addEventListener("click", function () {
        const dotIndex = displayText.innerHTML.indexOf(".");
        if ((dotIndex > -1)) {
            document.getElementById("dot").disabled = true;
        }
        displayText.innerText += button.innerText;

    })
})
//Delete 1 character
let del = document.getElementById("del");
del.addEventListener("click", function(){    
    let deletedNumber = displayText.innerText;
    displayText.innerText = deletedNumber.substring(0, deletedNumber.length -1);
    
})

//Clear Display
let clear = document.getElementById("clear")
clear.addEventListener("click", function(){
    let span = document.querySelector("span");
    span.innerText = "";
})