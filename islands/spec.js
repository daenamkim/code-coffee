const { expect } = require("chai");
const { islands } = require(".");

describe.only("islands", () => {
  describe("example tests", () => {
    it("should return 4", () => {
      const map = [[0, 1, 0, 1], [0, 0, 0, 0], [1, 0, 1, 0], [1, 0, 1, 0]];

      expect(islands(map)).to.equal(4);
    });

    it("should return 2", () => {
      const map = [[1, 1, 1], [0, 0, 0], [0, 0, 1]];

      expect(islands(map)).to.equal(2);
    });

    it("should return 1", () => {
      const map = [[0, 1], [1, 1]];

      expect(islands(map)).to.equal(1);
    });
  });

  // describe("Your original tests", () => {
  //   it("should be something", () => {
  //     expect(1).toEqual(1);
  //   });
  // });
});
