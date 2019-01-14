/**
 * Return the n-th of fibonacci number.
 *
 * EXAMPLE:
 * Input: 89
 * Output: 11
 *
 * REFERENCE:
 * https://en.wikipedia.org/wiki/Fibonacci_number
 * https://stackoverflow.com/questions/25344313/generating-ascending-sequence-2p3q
 * http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibtable.html
 */
const { fib } = require("../fibonacci_returns");
const MAX = Number.MAX_SAFE_INTEGER;

const inverseFib = (n) => {
  let result = -1;

  if (n.comparedTo(1) < 0) {
    return 0;
  }

  if (n.comparedTo(2) < 0) {
    return result;
  }

  for (let i = 2; i <= MAX; i++) {
    const fibNumber = fib(i);
    if (fibNumber.comparedTo(n) === 0) {
      result = i;
      break;
    } else if (fibNumber.comparedTo(n) > 0) {
      break;
    }
  }

  return result;
};

module.exports = {
  inverseFib,
};
