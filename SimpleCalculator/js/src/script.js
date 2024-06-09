// calculator functions

/**
 * Adds two numbers.
 * @param {number} left - The left operand.
 * @returns {function} A function that takes the right operand and returns the sum.
 */
const add = left => right => left + right;

/**
 * Subtracts one number from another.
 * @param {number} left - The left operand.
 * @returns {function} A function that takes the right operand and returns the difference.
 */
const substract = left => right => left - right;

/**
 * Multiplies two numbers.
 * @param {number} left - The left operand.
 * @returns {function} A function that takes the right operand and returns the product.
 */
const multiply = left => right => left * right;

/**
 * Divides one number by another.
 * @param {number} left - The left operand.
 * @returns {function} A function that takes the right operand and returns the quotient.
 * @throws {string} Throws an error if the right operand is 0.
 */
const devide = left => right => right != 0 ? left / right : alert("Denominaton can not be 0");

/**
 * Calculates the modulus of two numbers.
 * @param {number} left - The left operand.
 * @param {number} right - The right operand.
 * @returns {number} The modulus of the two numbers.
 * @throws {string} Throws an error if the right operand is 0.
 */
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

/**
 * Raises a number to the power of another number.
 * @param {number} left - The base.
 * @returns {function} A function that takes the exponent and returns the result.
 */
const pow = left => right => Math.pow(left, right);

/**
 * Calculates the logarithm of a number with respect to a given base.
 * @param {number} base - The base of the logarithm.
 * @returns {function} A function that takes the number and returns the logarithm.
 */
const log = base => number => Math.log(number) / Math.log(base);

/**
 * Main function to perform basic arithmetic calculations based on user input.
 */
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

/**
 * Calculates the logarithm of a number with respect to a given base.
 */
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

/**
 * Represents an imaginary number.
 * @constructor
 * @param {number} real - The real part of the imaginary number.
 * @param {number} imaginary - The imaginary part of the imaginary number.
 */
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

/**
 * Calculates arithmetic operations on complex numbers based on user input.
 */
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

/**
 * Represents a two-dimensional vector.
 * @param {number} x - The x-coordinate of the vector.
 * @returns {function} A function that takes the y-coordinate and returns the vector.
 */
const vector = x => y => f => f(x)(y);

/**
 * Retrieves the x-coordinate of a vector.
 * @param {function} x - The vector.
 * @returns {number} The x-coordinate of the vector.
 */
const fst = x => y => x;

/**
 * Retrieves the y-coordinate of a vector.
 * @param {function} x - The vector.
 * @returns {number} The y-coordinate of the vector.
 */
const snd = x => y => y;

// small testing
// var v1 = vector(2)(1);
// console.log(v1(fst));
// console.log(v1(snd));

// vector functions

/**
 * Adds two vectors.
 * @param {function} a - The first vector.
 * @param {function} b - The second vector.
 * @returns {function} A function that takes a vector function and returns the sum of the vectors.
 */
const addVectors = a => b => vector(a(fst) + b(fst))(a(snd) + b(snd));

/**
 * Subtracts one vector from another.
 * @param {function} a - The first vector.
 * @param {function} b - The second vector.
 * @returns {function} A function that takes a vector function and returns the difference between the vectors.
 */
const substractVectors = a => b => vector(a(fst) - b(fst))(a(snd) - b(snd));

/**
 * Multiplies two vectors.
 * @param {function} a - The first vector.
 * @param {function} b - The second vector.
 * @returns {function} A function that takes a vector function and returns the product of the vectors.
 */
const multiplyVectors = a => b => vector(a(fst) * b(fst) + a(snd) * b(snd))("");

// division of two vectors is not given

/**
 * Calculates arithmetic operations on vectors based on user input.
 */
const calculateVectors = () => {
    var leftX = document.getElementById('v1-x').value;
    var leftY = document.getElementById('v1-y').value;

    var rightX = document.getElementById('v2-x').value;
    var rightY = document.getElementById('v2-y').value;

    if(isNaN(leftX) || isNaN(leftY) || isNaN(rightX) || isNaN(rightY)){
        alert("Values must be numerical!");
        document.getElementById('v1-x').value = "";
        document.getElementById('v1-y').value = "";
        document.getElementById('v2-x').value = "";
        document.getElementById('v2-y').value = "";
    }

    leftX = parseFloat(leftX);
    leftY = parseFloat(leftY);
    rightX = parseFloat(rightX);
    rightY = parseFloat(rightY);

    var sign = document.getElementById('vectors-signs').value;

    var left = vector(leftX)(leftY);
    var right = vector(rightX)(rightY);
    var result = vector(0)(0);

    if(sign === "+"){
        result = addVectors(left)(right);
    }
    else if(sign === "-"){
        result = substractVectors(left)(right);
    }
    else if(sign === "*"){
        result = multiplyVectors(left)(right);
    }

    var resultX = document.getElementById('vAnsw-x');
    var resultY = document.getElementById('vAnsw-y');

    resultX.value = result(fst);
    resultY.value = result(snd);
}

/**
 * Creates an iterator with the specified start value, continuation condition, and increment function.
 * @param {*} startValue - The initial value of the iterator.
 * @param {Function} whileFn - The function to determine if the iteration should continue.
 * @param {Function} incrementFn - The function to get the next value in the iteration.
 * @returns {Object} - An iterator object.
 */
const numsIterator = (startValue, whileFn, incrementFn) => {
    const next = () => {
        const proceed = whileFn(startValue);
        let value = undefined;
        if (proceed) {
            value = startValue;
            startValue = incrementFn(startValue);
        }
        return { value: value, done: !proceed };
    };
    return {
        [Symbol.iterator]: () => ({ next })
    };
};

/**
 * Sums all the numbers in the provided iterable.
 * @param {Iterable<number>} numbers - An iterable of numbers to be summed.
 * @returns {number} - The sum of the numbers.
 */
const collectForSmall = numbers => [...numbers].reduce((a, b) => a + b);

/**
 * Sums the first n numbers from the provided iterable.
 * @param {number} n - The number of elements to sum.
 * @returns {Function} - A function that takes an iterable of numbers and returns the sum of the first n numbers.
 */
const collectForBig = n => numbers => {
    let sum = 0;
    let count = 0;
    for (let num of numbers) {
        if (count < n) {
            sum += num;
            count++;
        } else {
            break;
        }
    }
    return sum;
};

const collect = n => numbers => {
    const threshold = 1000000;

    // Choose the appropriate collection function based on the size of the range
    if (n > threshold) {
        // For large ranges, use collectForBig
        return collectForBig(n)(numbers);
    } else {
        // For small ranges, use collectForSmall
        return collectForSmall(numbers);
    }
};

/**
 * Calculates the sum of numbers in a range specified by input fields and updates the result in the DOM.
 * If the range is large, it uses a special function to handle large ranges efficiently.
 * 
 * The function assumes there are input fields with IDs 'fr-v' and 'to-v' for the start and end values,
 * and an element with ID 'fr-to-res' to display the result.
 */
const calculateSumFromTo = () => {

    let startValue = document.getElementById('fr-v').value;
    let n = document.getElementById('to-v').value;

    // Check if the inputs are numeric
    if (isNaN(startValue) || isNaN(n)) {
        alert("From and to digits must be numerical!");
        document.getElementById('fr-v').value = "";
        document.getElementById('to-v').value = "";
        return; // Exit the function if the inputs are invalid
    }

    // Parse the input values as integers
    startValue = parseInt(startValue);
    n = parseInt(n);

    // Define the while function and increment function for the iterator
    const whileFn = i => i <= n;  
    const incrementFn = i => i + 1;

    /**
     * Creates an iterator for numbers from startValue to n.
     * @returns {Object} - An iterator for the range.
     */
    const numGenerator = () => numsIterator(startValue, whileFn, incrementFn);

    var result = document.getElementById('fr-to-res');

    // Calculate the result value
    result.value = collect(n)(numGenerator());
};

/**
 * Calculates the sum of all integers between two numbers (inclusive) using Gauss's formula.
 * @param {number} a - The smaller number.
 * @param {number} b - The greater number.
 * @returns {number} - The sum of all integers between a and b (inclusive).
 */
function GaussSum(a, b) {
    const n = b - a + 1;
    return (n * (a + b)) / 2;
}

const convertToFrancs = async () => {
    const exchangeRate = await getExchangeRate();
    const dollars = document.getElementById('us-dol-1').value;

    if (isNaN(dollars)) {
        alert("Dollar value must be nummerical!");
        document.getElementById('us-dol-1').value = "";
        return;
    }

    const francs = dollars * exchangeRate;

    var result = document.getElementById('sw-fr-1');

    result.value = String(francs);
};

const convertToDollars = async () => {
    const exchangeRate = await getExchangeRate();
    const francs = document.getElementById('sw-fr-2').value;

    if (isNaN(francs)) {
        alert("Swiss Franc value must be nummerical!");
        document.getElementById('sw-fr-2').value = "";
        return;
    }

    const dollars = francs / exchangeRate;

    var result = document.getElementById('us-dol-2');

    result.value = String(dollars);
};