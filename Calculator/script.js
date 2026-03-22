function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;

}

function multiply(a, b){
    return a * b;
}

function divide(a, b){

    return a / b;
}

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

function operate(op, a, b){
    if (op === "/" && b === 0) {
    return "Error";
}
    
    switch(op){
        case "+":
            return add(a,b);
            break;
        case "-":
            return  substract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return "Invalid operation."
    }
    
}

const display = document.querySelector(".display")
const numberBtn = document.querySelectorAll(".numBtn");
const opBtn = document.querySelectorAll(".opBtn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const decimalBtn = document.getElementById("decimal");
const backspaceBtn = document.getElementById("backspace")

function handlerDigit(digit){
    if(shouldResetDisplay) {
        display.textContent = "";
        if(currentOperator === null) firstNumber = "";
        shouldResetDisplay = false;
    }

    
    if(currentOperator === null){
        firstNumber += digit;
        display.textContent = firstNumber;
    }
    else{
        secondNumber += digit;
        display.textContent = secondNumber;
    }
}

numberBtn.forEach(button => {
    button.addEventListener("click", () => {
        handlerDigit(button.textContent);
    });
});

function handleOperator(operator){
    if(firstNumber === "") return;

    if(currentOperator != null && secondNumber != ""){
        let result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
        firstNumber = result;
        secondNumber = "";
        display.textContent = result;
    }
    currentOperator = operator;
}

opBtn.forEach(button => {
    button.addEventListener("click", () =>{
        handleOperator(button.textContent);
    });
});

function handlerEquals(){
    if(currentOperator === null || secondNumber === "") return;

    const result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));

    display.textContent = result;
    
    firstNumber = result.toString();
    secondNumber = "";
    currentOperator = null;
    shouldResetDisplay = true;
    display.textContent = firstNumber;
}

function handlerClear(){
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    shouldResetDisplay = false;
    display.textContent = "0";
}

function handlerDecimal(){
   
    if(shouldResetDisplay) {
        display.textContent = "";
        if(currentOperator === null) firstNumber = "";
        shouldResetDisplay = false;
    }

    
    if(currentOperator === null){
        
        if(firstNumber.includes(".")) return;
        if(firstNumber === ""){
            firstNumber = "0.";
        }
        else firstNumber += ".";

        display.textContent = firstNumber;
    }
    else{
       
        if(secondNumber.includes(".")) return;
        if(secondNumber === ""){
            secondNumber = "0.";
        }
        else secondNumber += ".";

        display.textContent = secondNumber; 
    }

}

function handlerBackspace(){
    
    if(currentOperator !== null && secondNumber === "") return;

    if(shouldResetDisplay){
        shouldResetDisplay = false;
    }
    
    if(currentOperator === null){
        firstNumber = firstNumber.slice(0,-1);
        display.textContent = firstNumber === "" ? "0" : firstNumber;
    }
    else{
        secondNumber = secondNumber.slice(0,-1);
        display.textContent = secondNumber === "" ? "0" : firstNumber;
    }
}

equals.addEventListener("click", handlerEquals);
clear.addEventListener("click",handlerClear);
decimalBtn.addEventListener("click", handlerDecimal);
backspaceBtn.addEventListener("click", handlerBackspace);



window.addEventListener("keydown",(e) => {
    const k = e.key;

    if(k >= "0" && k <= "9"){
        e.preventDefault();
        handlerDigit(k);
        return;
    }
    
    if(k === "+" || k === "-" || k === "*" || k === "/"){
        e.preventDefault();
        handleOperator(k);
        return;
    }

    if(k === "=" || k === "Enter"){
        e.preventDefault();
        handlerEquals(k);
        return;
    }
    
    if(k === "c"){
        e.preventDefault();
        handlerClear();
        return;
    }

    if(k === "."){
        e.preventDefault();
        handlerDecimal();
        return;
    }

    if(k === "Backspace"){
        e.preventDefault();
        handlerBackspace();
        return;
    }
});