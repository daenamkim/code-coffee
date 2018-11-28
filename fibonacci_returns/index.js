const { BigNumber } = require("bignumber.js");

/*
  Where n is a positive integer, the function f(n) satisfies the following:
    f(0) = 0
    f(1) = 1
    f(n) = f(n - 1) + f(n - 2)

  You task is to write a function to find f(n).

  ... What? Too easy? Alright let's spice it up then.
  REQUIREMENTS:
    * The function fib finds f(n) described above
    * It works for very large n
    * It is fast even for very large n
  
  Now Javascript only supports 53-bit Integers. I'll tell you upfront that what we will be looking for requires much more than that.
  To assist us we will make use of bignumber.js to create arbitrary precision numbers.
  https://github.com/MikeMcl/bignumber.js/
  You will have to install it yourself by running 
    yarn add bignumber.js

  Don't forget to handle your edge cases! A negative n should throw an Error
*/

/**
 * Returns n-th Fibonacci number
 * @param {number} n
 * @returns {BigNumber}
 * @throws {Error} if n is negative
 */
const fib = (n) => {
  // Recursion
  // return n < 1 ? 0 : n == 1 ? 1 : (fib(n - 1) + fib(n - 2));

  // Math formula
  return Math.ceil(
    (1 / Math.sqrt(5) * Math.pow(((1 + Math.sqrt(5)) / 2), n)) -
    (1 / Math.sqrt(5) * Math.pow(((1 - Math.sqrt(5)) / 2), n))
  );
};

module.exports = {
  fib,
};
