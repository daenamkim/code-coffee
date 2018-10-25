const { expect } = require("chai");
const { rockPaperScissors } = require(".");

describe("rock paper scissors", () => {
  it("should return the array containing 27 elements", () => {
    const actual = rockPaperScissors();

    expect(Array.isArray(actual)).to.be.true;
    expect(actual.length).to.equal(27);
  });

  it("should return the array containing 81 elements", () => {
    const actual = rockPaperScissors(4);

    expect(true).to.equal(Array.isArray(actual));
    expect(81).to.equal(actual.length);
  });
});

describe("Your original tests", () => {
  it("should be something", () => {
    expect(1).to.equal(1);
  });
});
