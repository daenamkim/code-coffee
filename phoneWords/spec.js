const { expect } = require("chai");
const { phoneWords } = require("./index");

describe.only("Telephone Words", () => {
  it("should return ['0']", () => {
    const result = phoneWords('0');
    const expected = ['0'];
    expect(result).to.be.eql(expected);
  });

  it("should return ['1']", () => {
    const result = phoneWords('1');
    const expected = ['1'];
    expect(result).to.be.eql(expected);
  });

  it("should return small permutations", () => {
    const result = phoneWords('21');
    const expected = ['A1', 'B1', 'C1'];
    expect(result).to.be.eql(expected);
  });
});
