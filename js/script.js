// calculator functions

function add(left, right){
    return left + right;
}

function substract(left, right){
    return left - right;
}

function multiply(left, right){
    return left * right;
}

function devide(left, right){
    if(right != 0){
        return left / right;
    }
    else{
        alert("Denominaton can not be 0");
    }
}

function mod(left, right) {
    if (right === 0) {
        alert("Module cannot be zero");
        return;
    }

    if (left >= 0 && right > 0) {
        return left % right;
    } else if (left < 0 && right > 0) {
        return ((left % right) + right) % right;
    } else if (left >= 0 && right < 0) {
        return (left % right) % right;
    } else if (left < 0 && right < 0) {
        return ((left % right) - right) % right;
    }
}

function pow(left, right){
    return Math.pow(left, right);
}

// main function

function calculate() {
    var left = document.getElementById('left-digit');
    var right = document.getElementById('right-digit');
    if(isNaN(left.value) || isNaN(right.value)){
        alert("Values must be numerical");
        left.value = "";
        right.value = "";
    }
    var leftDigit = parseFloat(left.value);
    var rightDigit = parseFloat(right.value);
    var sign = document.getElementById('signs').value;
    var result = document.getElementById('result-digit');
    if(sign === "+"){
        result.value = add(leftDigit, rightDigit);
    }
    else if(sign === "-"){
        result.value = substract(leftDigit, rightDigit);
    }
    else if (sign === "*"){
        result.value = multiply(leftDigit, rightDigit);
    }
    else if(sign === "/"){
        result.value = devide(leftDigit, rightDigit);
    }
    else if(sign === "mod"){
        result.value = mod(leftDigit, rightDigit);
    }
    else{
        result.value = pow(leftDigit, rightDigit);
    }
}