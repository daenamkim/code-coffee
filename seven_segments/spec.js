const { expect } = require("chai");
const { interpretDisplay } = require(".");

describe("Seven Segment Display Interpreter", () => {
  it("should interpret the display for '123456789'", () => {
    const input = `    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|`;

    const expected = "123456789";

    expect(interpretDisplay(input)).to.equal(expected);
  });

  it("should interpret the display for '433805825'", () => {
    const input = `    _  _  _  _  _  _  _  _ 
|_| _| _||_|| ||_ |_| _||_ 
  | _| _||_||_| _||_||_  _|`;

    const expected = "433805825";

    expect(interpretDisplay(input)).to.equal(expected);
  });
});
