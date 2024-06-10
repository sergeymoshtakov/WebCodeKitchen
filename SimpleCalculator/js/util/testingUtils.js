/**
 * Creates a test message based on the provided name and boolean value and writes it to the document.
 * @param {string} name - The name of the test.
 * @param {boolean} bool - The value of the assertion.
 * @returns {Function} - A function that takes a boolean value and generates a test message accordingly.
 */
const test = name => bool => {
    let str = name;
    if (bool) {
        str += " passed";
    } else {
        str += " not passed";
    }
    document.write("<p>" + str + "</p>");
};

/**
 * Generates two random numbers within a given range, one greater and one smaller.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @returns {Object} - An object containing two properties: smaller and greater.
 */
function generateTwoRandomNumbers(min, max) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (num1 === num2) {
        return generateTwoRandomNumbers(min, max); // Ensure the numbers are different
    }

    return {
        smaller: Math.min(num1, num2),
        greater: Math.max(num1, num2)
    };
}