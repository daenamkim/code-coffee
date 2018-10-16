const { expect } = require("chai");
const { defaults } = require(".");

describe("defaults", () => {
  it("should return the original target object", () => {
    const target = {};
    const source = {};
    const result = defaults(target, source);

    expect(result).to.eql(target);
  });

  it("should copy any property whose key is not already set on the target", () => {
    const target = {};
    const source = { a: 1 };

    defaults(target, source);

    expect(target.a).to.eql(1);
  });

  it("should not copy any property whose key is already set on the target", () => {
    const target = { a: 1, b: NaN, c: null, d: undefined };
    const source = { a: 100, b: 200, c: 300, d: 400, e: 500 };

    defaults(target, source);

    expect(target.a).to.eql(1);
    expect(isNaN(target.b)).to.eql(true);
    expect(target.c).to.eql(null);
    expect(typeof target.d).to.eql("undefined");
    expect(target.e).to.eql(500);
  });

  it("should copy properties source an arbitrary number of source objects", () => {
    const target = {};
    const source = { a: 1 };
    const anotherSource = { a: "ichi", b: "ni" };

    defaults(target, source, anotherSource);

    expect(target.a).to.eql(1);
    expect(target.b).to.eql("ni");
  });
});
