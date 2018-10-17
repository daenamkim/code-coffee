const { expect } = require("chai");
const { difference } = require(".");

describe("difference", () => {
  it("should return the difference between two arrays", () => {
    expect(difference([1, 2], [5, 2])).to.eql([1]);
    expect(difference([1, 2], [5, 2, 1])).to.eql([]);
  });

  it("should return the difference between three arrays", () => {
    expect(difference([1, 2], [5], [2])).to.eql([1]);
    expect(difference([1, 2], [5], [1, 2])).to.eql([]);
  });

  it("should return the empty array", () => {
    expect(difference([])).to.eql([]);
    expect(difference(null)).to.eql([]);
    expect(difference(0)).to.eql([]);
    expect(difference("")).to.eql([]);
    expect(difference(true)).to.eql([]);
    expect(difference(false)).to.eql([]);
    expect(difference({})).to.eql([]);
    expect(difference([], [])).to.eql([]);
    expect(difference([], null)).to.eql([]);
    expect(difference(null, null)).to.eql([]);
  });
});
