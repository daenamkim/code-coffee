// Returns the sorted array using Insertion sort.
// https://en.wikipedia.org/wiki/Insertion_sort
//
// insertionSort(Array);
// insertionSort([0, -1, 2]);
// => [-1, 0, 2]
const insertionSort = (array) => {
  if (!Array.isArray(array)) {
    return array;
  }

  // O(n*m).
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && parseInt(array[j - 1]) > parseInt(array[i]); j--) {
      [array[i], array[j - 1]] = [array[j - 1], array[i]];
    }
  }
  return array;
};

module.exports = { insertionSort };
