// returns the values from array that are not present in the other arrays
// difference(Array, *Others);
// Parameters: Array, *Others

// difference([1, 2, 3, 4, 5]);
// => [1, 2, 3, 4, 5]
// difference([1, 2, 3, 4, 5], [5, 2, 10]);
// => [1, 3, 4]
// difference([1, 2, 3, 4, 5], [5, 2, 10], [1, 20, 4]);
// => [3]

const difference = function(baseArray, ...others) {
  let result = [];

  if (!baseArray || (Array.isArray(baseArray) && baseArray.length) || Object.keys(baseArray).length < 1) {
    return result;
  }
};

module.exports = { difference };
