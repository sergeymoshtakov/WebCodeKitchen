/**
 * Creates a NullSafe object wrapping the given value.
 * @param {*} x - The value to be wrapped.
 * @returns {Object} - A NullSafe object.
 */
const NullSafe = x => {
    /**
     * Checks if the given value is a NullSafe object.
     * @param {*} y - The value to be checked.
     * @returns {boolean} - True if the value is a NullSafe object, false otherwise.
     */
    const isNullSafe = y => y && y.then;
    
    /**
     * Wraps the given value in a NullSafe object if it's not already one.
     * @param {*} y - The value to be wrapped.
     * @returns {Object} - A NullSafe object.
     */
    const maywrap = y => isNullSafe(y) ? y : NullSafe(y); 
    
    return {
       /**
        * Chains a function to be executed with the value wrapped by this NullSafe object.
        * If the value is null, the function is not executed.
        * @param {Function} fn - The function to be executed.
        * @returns {Object} - A NullSafe object wrapping the result of the function execution.
        */
       then: fn => {
           const result = x !== null ? fn(x) : null;
           return maywrap(result);
       }
    }
};

// Test cases
NullSafe(1).then(console.log);                   // will call the log
NullSafe(null).then(console.log);                // will not call the log
NullSafe(2).then(x => null).then(console.log);   // will not call the log

function foo(){
    for(a of arguments){
        console.log(a);
    }
}

foo(1);

const Iterator = (startValue, whileFn, incrementFn) => {
    const next = () => {
        const proceed = whileFn(startValue);
        let   value = undefined;
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

const startValue  = 11;
const whileFn     = i => i < 20;  
const incrementFn = i => i + 2;

for (const i of Iterator(startValue, whileFn, incrementFn)){
    console.log(i);
}


const oddNumbers = () => Iterator(1, x => true, x => x + 2);
const _x = Math.floor( 1 + Math.random() * 100);

const collect = n => oddNumbers => [...oddNumbers].slice(0,n).reduce((a,b) => a + b);

console.log(
    collect(3)(oddNumbers())  ===  9 && 
    collect(6)(oddNumbers())  === 36 &&
    collect(_x)(oddNumbers()) === _x * _x
);
