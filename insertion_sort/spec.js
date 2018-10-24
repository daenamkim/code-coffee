const { expect, use } = require("chai");
const { spy } = require("sinon");
const sinonChai = require("sinon-chai");
const { insertionSort } = require(".");
use(sinonChai);

describe("Insertion Sort", () => {
  // spy on native methods
  beforeEach(() => {
    spy(Array.prototype, "sort");
  });

  // stop spying on native methods
  afterEach(() => {
    expect(Array.prototype.sort).not.to.have.been.called();
    Array.prototype.sort.calls.restore();
  });

  it("should return the sorted array", () => {
    expect(insertionSort([2, 1])).to.eql([1, 2]);
    expect(insertionSort([2, 1, 3])).to.eql([1, 2, 3]);
  });

  it("should return the sorted array which contains string numbers", () => {
    expect(insertionSort(["-1", 1, 3])).to.eql(["-1", 1, 3]);
    expect(insertionSort(["2", 1, 3])).to.eql([1, "2", 3]);
  });

  it("should return the original array", () => {
    expect(insertionSort([])).to.eql([]);
    expect(insertionSort(null)).to.eql(null);
    expect(insertionSort(0)).to.eql(0);
    expect(insertionSort("")).to.eql("");
    expect(insertionSort(true)).to.eql(true);
    expect(insertionSort(false)).to.eql(false);
    expect(insertionSort({})).to.eql({});
  });
});
