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

function mod(left, right){
    if(left >= 0 && right > 0){
        return left % right;
    }
    else if(left < 0 && right > 0){
        value = left;
        while(value < 0){
            value += right;
        }
        return value;
    }
    else if(left >= 0 && right < 0){
        value = left;
        while(value > 0){
            value -= right;
        }
        return value + right;
    }
    else if(left < 0 && right < 0){
        value = left;
        while(value < 0){
            value -= right;
        }
        return value;
    }
    else{
        alert("Module cannot be zero");
    }
}

function pow(left, right){
    return Math.pow(left, right);
}