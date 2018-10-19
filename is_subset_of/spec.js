const { expect } = require("chai");
const _ = require(".");

describe.only("isSubsetOf", () => {
  let nestedArray, objectSample;
  beforeEach(() => {
    nestedArray = [[1], [2, [3, 4]]];
    nestedArrayObject = [{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}];
  });
  it("should be Array.prototype.isSubsetOf is a function", () => {
    expect(typeof Array.prototype.isSubsetOf).to.eql("function");
  });
  it("should be Array is working event on using []", () => {
    expect(typeof [].isSubsetOf).to.eql("function");
  });
  it("should return true when array consist of array and there it is", () => {
    expect(['pop','crackle'].isSubsetOf(['snap','crackle','pop'])).to.be.true;
  });
  it("should return true when array includes null and there it is", () => {
    expect([null].isSubsetOf([1, null])).to.be.true;
  });
  it("should return true when array got nested arrays and there it is", () => {
    expect(nestedArray.isSubsetOf([[2, [3, 4]], [1]])).to.be.true;
  });
  it("should return false there is no element exist", () => {
    expect(nestedArray.isSubsetOf([[1], [2], [3, 4]])).to.be.false;
  });
  it("should return true when array consist of object and there it is", () => {
    expect(nestedArrayObject.isSubsetOf([{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}, {"key5": 5}])).to.be.true;
  });
  it("should return false there is no element in array of object", () => {
    expect(nestedArrayObject.isSubsetOf([{ "key1": 1 }, { "key2": 2 }, { "key3": 3, "key4": 4 }])).to.be.false;
  });
  // From Felix
  it("should return true when the input array contains object and/arrays as elements in the contex array", () => {
    const array = [[1], [2, [3, 4]]];
    const object = [{ key1: 1 }, { key2: { key3: 3, key4: 4 } }];
    expect(array.isSubsetOf([[2, [3, 4]], [1]])).to.be.true;
    expect(array.isSubsetOf([[1], [2], [3, 4]])).to.be.false;
    expect(object.isSubsetOf([{ key1: 1 }, { key2: { key3: 3, key4: 4 } }]))
      .to.be.true;
    expect(
      object.isSubsetOf([{ key1: 1 }, { key2: 2 }, { key3: 3, key4: 4 }])
    ).to.be.false;
    expect(
      array.isSubsetOf([
        { key1: 1 },
        [1],
        [2, [3, 4]],
        { key2: { key3: 3, key4: 4 } },
      ])
    ).to.be.true;
    expect(
      object.isSubsetOf([
        { key1: 1 },
        [1],
        [2, [3, 4]],
        { key2: { key3: 3, key4: 4 } },
      ])
    ).to.be.true;
  });
  it("should return false when valid context array and input array are not provided", () => {
    expect([].isSubsetOf()).to.be.false;
    expect([null].isSubsetOf(["null"])).to.be.false;
    expect([].isSubsetOf("test")).to.be.false;
  });
  it("should return true when the input array contains all the elements in the context array", () => {
    expect(["pop", "crackle"].isSubsetOf(["snap", "crackle", "pop"])).to.be.true;
    expect(["pop"].isSubsetOf(["snap"])).to.be.false;
    expect([1, 2].isSubsetOf([1, 3, 4, 2])).to.be.true;
    expect([1, "beagle"].isSubsetOf(["corgi", "beagle", 1])).to.be.true;
    expect([""].isSubsetOf([undefined, ""])).to.be.true;
    expect([null].isSubsetOf([1, null])).to.be.true;
    expect([undefined].isSubsetOf([undefined, null])).to.be.true;
  });
});
