const { expect } = require("chai");
const { connectFour } = require(".");

describe("Connect Four", () => {
  it("should return R", () => {
    const board = [
      ["-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "R", "R", "R", "R"],
      ["-", "-", "-", "Y", "Y", "R", "Y"],
      ["-", "-", "-", "Y", "R", "Y", "Y"],
      ["-", "-", "Y", "Y", "R", "R", "R"],
    ];
    const result = connectFour(board);
    expect(result).to.be.eql("R");
  });

  it("should return in progress", () => {
    const board = [
      ["-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "R"],
      ["-", "-", "-", "-", "-", "-", "R"],
      ["-", "-", "-", "-", "-", "-", "R"],
    ];
    const result = connectFour(board);
    expect(result).to.be.eql("in progress");
  });
});
