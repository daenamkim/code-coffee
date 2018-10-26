/*
   * write a function that takes a string of text and returns true if
   * the parentheses are balanced and false otherwise.
   *
   * Example:
   *   balancedParens('(');  // false
   *   balancedParens('()'); // true
   *   balancedParens(')(');  // false
   *   balancedParens('(())');  // true
   *
   * Step 2:
   *   make your solution work for all types of brackets
   *
   * Example:
   *  balancedParens('[](){}'); // true
   *  balancedParens('[({})]');   // true
   *  balancedParens('[(]{)}'); // false
   *
   * Step 3:
   * ignore non-bracket characters
   * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
   * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
   *
   *
   */
const balancedParens = (input) => {
  if (typeof input !== "string") {
    return false;
  }

  let lastLength = input.length;
  let newInput = input.replace(/[A-Za-z\s:=+-;]/g, "");
  while (1) {
    newInput = newInput.replace(/(\(\))|(\{\})|(\[\])/, "");
    const newLength = newInput.length;
    if (newLength === 0) {
      return true;
    } else if (newLength < lastLength) {
      lastLength = newLength;
      continue;
    }
    return false;
  }
};

module.exports = { balancedParens };
