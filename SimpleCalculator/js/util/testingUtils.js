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
    document.writeln(str);
};
