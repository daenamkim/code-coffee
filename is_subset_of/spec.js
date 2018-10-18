const { expect } = require("chai");
const { Array } = require(".");

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
    expect(['pop','crackle'].isSubsetOf(['snap','crackle','pop'])).to.eql(true);
  });
  it("should return true when array includes null and there it is", () => {
    expect([null].isSubsetOf([1, null])).to.eql(true);
  });
  it("should return true when array got nested arrays and there it is", () => {
    expect(nestedArray.isSubsetOf([[2, [3, 4]], [1]])).to.eql(true);
  });
  it("should return false there is no element exist", () => {
    expect(nestedArray.isSubsetOf([[1], [2], [3, 4]])).to.eql(true);
  });
  it("should return true when array consist of object and there it is", () => {
    expect(nestedArrayObject.isSubsetOf([{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}, {"key5": 5}])).to.eql(true);
  });
  it("should return false there is no element in array of object", () => {
    expect(nestedArrayObject.isSubsetOf([{ "key1": 1 }, { "key2": 2 }, { "key3": 3, "key4": 4 }])).to.eql(false);
  });
});
