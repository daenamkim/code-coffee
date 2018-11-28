const { memoize } = require('./index');
const { expect } = require("chai");

describe("memorize", () => {
  // Write your own test
  it("should return a function", () => {
    const add = (a, b) => {
      console.log("it is first", a, b);
      return a + b;
    };

    const memAdd = memoize(add);
    console.log(memAdd);
    console.log(memAdd(1, 2));
    console.log(memAdd(3, 4));
    console.log(memAdd(5, 5));
    console.log(memAdd(6, 6));

  });
});
