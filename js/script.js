// calculator functions

const add = left => right => left + right;

const substract = left => right => left - right;

const multiply = left => right => left * right;

const devide = left => right => right != 0 ? left / right : alert("Denominaton can not be 0");


function mod(left, right) {
    if (right === 0) {
        alert("Module cannot be zero");
        return;
    }
    // EXTERNAL (chat gpt solution)
    if (left >= 0 && right > 0) {
        return left % right;
    } else if (left < 0 && right > 0) {
        return ((left % right) + right) % right;
    } else if (left >= 0 && right < 0) {
        return (left % right) % right;
    } else if (left < 0 && right < 0) {
        return ((left % right) - right) % right;
    }
    // EXTERNAL
}

const pow = left => right => Math.pow(left, right);

const log = base => number => Math.log(number) / Math.log(base);

// main function

function calculate() {
    var left = document.getElementById('left-digit');
    var right = document.getElementById('right-digit');

    // checking the right input
    if(isNaN(left.value) || isNaN(right.value)){
        alert("Values must be numerical");
        left.value = "";
        right.value = "";
    }
    // checking the right input

    var leftDigit = parseFloat(left.value);
    var rightDigit = parseFloat(right.value);
    var sign = document.getElementById('signs').value;
    var result = document.getElementById('result-digit');
    if(sign === "+"){
        result.value = add(leftDigit)(rightDigit);
    }
    else if(sign === "-"){
        result.value = substract(leftDigit)(rightDigit);
    }
    else if (sign === "*"){
        result.value = multiply(leftDigit)(rightDigit);
    }
    else if(sign === "/"){
        result.value = devide(leftDigit)(rightDigit);
    }
    else if(sign === "mod"){
        result.value = mod(leftDigit)(rightDigit);
    }
    else{
        result.value = pow(leftDigit)(rightDigit);
    }
}

// Logorithm function

function calculateLogorithm() {
    var base = document.getElementById('log-base');
    var number = document.getElementById('log-number');

    // checking the right input
    if(isNaN(base.value) || isNaN(number.value)){
        alert("Values must be numerical");
        base.value = "";
        number.value = "";
    }
    // checking the right input

    var baseDigit = parseFloat(base.value);
    var numberDigit = parseFloat(number.value);

    // checking the right input
    if(baseDigit <= 0 || baseDigit === 1){
        alert("Base must be greater than 0 and not equal to 1");
        base.value = "";
        return;
    }
    if(numberDigit <= 0){
        alert("Number must be greater than 0");
        number.value = "";
        return;
    }
    // checking the right input

    var result = document.getElementById('log-result');
    result.value = log(baseDigit)(numberDigit);
}