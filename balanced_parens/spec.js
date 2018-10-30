const { balancedParens } = require("./index");
const { expect } = require("chai");

describe("balanceParens", () => {
  it("should return false if parens are not pair", () => {
    let actual = balancedParens("(");
    expect(actual).to.be.false;
    actual = balancedParens(")(");
    expect(actual).to.be.false;
  });

  it("should return true if parens are RIGHT pair", () => {
    let actual = balancedParens("()");
    expect(actual).to.be.true;
    actual = balancedParens("(())");
    expect(actual).to.be.true;
  });

  it("should work well even for all types of parens.", () => {
    let actual = balancedParens("[](){}");
    expect(actual).to.be.true;
    actual = balancedParens("[({})]");
    expect(actual).to.be.true;
    actual = balancedParens("[(]{)}");
    expect(actual).to.be.false;
  });

  it("should work well even for strings!", () => {
    let actual = balancedParens(" var wow  = { yo: thisIsAwesome() }");
    expect(actual).to.be.true;
    actual = balancedParens(" var hubble = function() { telescopes.awesome();");
    expect(actual).to.be.false;
  });
});
