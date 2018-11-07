const { expect } = require("chai");
const { solveGraph } = require(".");

describe.only("Solve Graph", () => {
  describe("Simple graph with 1 arc", () => {
    const arcs = [{ start: "a", end: "b" }];
    it("should reach b", () => {
      expect(solveGraph("a", "b", arcs)).to.be.true;
    });
    it("should never reach c", () => {
      expect(solveGraph("a", "c", arcs)).to.be.false;
    });
    it("should reach start state", () => {
      expect(solveGraph("a", "a", arcs)).to.be.true;
    });
  });

  describe("Your original tests", () => {
    it("should be something", () => {
      expect(1).to.equal(1);
    });
  });
});
