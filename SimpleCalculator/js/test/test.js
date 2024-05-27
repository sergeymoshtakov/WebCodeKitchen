/**
 * Writes a test message for the addition operation to the document.
 * @param {boolean} bool - The result of the addition operation.
 */
test("Addition of 1 to 2 ")(add(1)(2) === 3); 

/**
 * Writes a test message for the subtraction operation to the document.
 * @param {boolean} bool - The result of the subtraction operation.
 */
test("Substraction of 3 from 5 ")(substract(5)(3) === 2);

/**
 * Writes a test message for the multiplication operation to the document.
 * @param {boolean} bool - The result of the multiplication operation.
 */
test("Multiplication of 3 and 5 ")(multiply(5)(3) === 15);

/**
 * Writes a test message for the division operation to the document.
 * @param {boolean} bool - The result of the division operation.
 */
test("Division of 14 by 7 ")(devide(14)(7) === 2); 

/**
 * Writes a test message for the modulus operation to the document.
 * @param {boolean} bool - The result of the modulus operation.
 */
test("Modus of 49 by 5 ")(mod(49, 5) === 4);

/**
 * Writes a test message for the power operation to the document.
 * @param {boolean} bool - The result of the power operation.
 */
test("Pow of 7 by 2 ")(pow(7)(2) === 49);