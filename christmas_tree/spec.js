const { expect } = require("chai");
const { christmasTree } = require("./index");

describe.only("Christmas Tree", () => {
  it("should be a function", () => {
    expect(typeof christmasTree).to.equal("function");
  });

  it("should return a tree", () => {
    expect(christmasTree(3, "$")).to.equal("  $\n $ $\n$ $ $\n");
  });
});
