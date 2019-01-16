const { memoize } = require("./index");
const { expect } = require("chai");

describe.only("memorize", () => {
  let add;
  beforeEach(() => {
    add = (a, b) => {
      return a + b;
    };
  });
  it("should return a function", () => {
    const memAdd = memoize(add);
    expect(typeof memAdd).to.be.eql("function");
  });
  it("should return same value", () => {
    const memAdd = memoize(add);
    const expected = memAdd(5 + 4);
    const result = memAdd(5 + 4);
    expect(result).to.be.eql(expected);
  });
});
