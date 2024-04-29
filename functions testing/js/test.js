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
