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

    expect(true).toEqual(Array.isArray(actual));
    expect(81).toEqual(actual.length);
  });
});

describe("Your original tests", () => {
  it("should be something", () => {
    expect(1).toEqual(1);
  });
});
