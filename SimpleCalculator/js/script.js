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

const calculate = () => {
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
        result.value = mod(leftDigit, rightDigit);
    }
    else{
        result.value = pow(leftDigit)(rightDigit);
    }
}

// Logorithm function

const calculateLogorithm = () => {
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

// Complex numbers class
class ImaginaryNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add = other => new ImaginaryNumber(add(this.real)(other.real), add(this.imaginary)(other.imaginary));

    substract(other) {      
        return new ImaginaryNumber(substract(this.real)(other.real), substract(this.imaginary)(other.imaginary));
    }

    multiply(other) {   
        return new ImaginaryNumber(
            multiply(this.real)(other.real) - multiply(this.imaginary)(other.imaginary), 
            multiply(this.real)(other.imaginary) + multiply(this.imaginary)(other.real)
        );
    }

    devide(other) {
        let denominator = add(pow(other.real)(2))(pow(other.imaginary)(2));
        return new ImaginaryNumber(
            add(multiply(this.real)(other.real))(multiply(this.imaginary)(other.imaginary)) / denominator, 
            substract(multiply(this.imaginary)(other.real))(multiply(this.real)(other.imaginary)) / denominator
        );
    }
}

// Complex numbers function

const calculateImaginaryNumbers = () => {
    var leftReal = document.getElementById('real-part-one');
    var leftImaginary = document.getElementById('imaginary-part-one');
    var rightReal = document.getElementById('real-part-two');
    var rightImaginary = document.getElementById('imaginary-part-two');

    // checking the right input
    if(isNaN(leftReal.value) || isNaN(leftImaginary.value) || isNaN(rightReal.value) || isNaN(rightImaginary.value)){
        alert("Values must be numerical");
        leftReal.value = "";
        leftImaginary.value = "";
        rightReal.value = "";
        rightImaginary.value = "";
    }
    // checking the right input

    var leftRealDigit = parseFloat(leftReal.value);
    var leftImaginaryDigit = parseFloat(leftImaginary.value);
    var rightRealDigit = parseFloat(rightReal.value);
    var rightImaginaryDigit = parseFloat(rightImaginary.value);

    var sign = document.getElementById('imaginary-signs').value;

    var resultReal = document.getElementById('real-part-result');
    var resultImaginary = document.getElementById('imaginary-part-result');

    var result = new ImaginaryNumber(leftRealDigit, leftImaginaryDigit);
    var other = new ImaginaryNumber(rightRealDigit, rightImaginaryDigit);

    if(sign === "+"){
        result = result.add(other);
    }
    else if(sign === "-"){
        result = result.substract(other);
    }
    else if (sign === "*"){
        result = result.multiply(other);
    }
    else{
        result = result.devide(other);
    }

    resultReal.value = result.real;
    resultImaginary.value = result.imaginary;
}

// Vectors
const vector = x => y => f => f(x)(y);
const fst = x => y => x;
const snd = x => y => y;

// small testing
// var v1 = vector(2)(1);
// console.log(v1(fst));
// console.log(v1(snd));

// vector functions
const addVectors = a => b => vector(a(fst) + b(fst))(a(snd) + b(snd));
const substractVectors = a => b => vector(a(fst) - b(fst))(a(snd) - b(snd));

// Calculate vectors function
const calculateVectors = () => {}