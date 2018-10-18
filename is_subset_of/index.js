/*
    Write an array method called isSubsetOf.

    isSubsetOf should take an input array and return whether the context array
    is a subset of the input array.

    - Method work for arrays that contain objects and/or arrays as elements as well
    - Disregard duplicates

    ['pop','crackle'].isSubsetOf(['snap','crackle','pop']); //true
    [null].isSubsetOf([1, null]) // true
    [[1], [2, [3, 4]]].isSubsetOf([[2, [3, 4]], [1]]); // true
    [[1], [2, [3, 4]]].isSubsetOf([[1], [2], [3, 4]])); // false

    const objectSub = [{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}];
    objectSub.isSubsetOf([{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}, {"key5": 5}]); // true
    objectSub.isSubsetOf([{ "key1": 1 }, { "key2": 2 }, { "key3": 3, "key4": 4 }]); // false

    See http://en.wikipedia.org/wiki/Subset for more on the definition of a
    subset.
  */

/* eslint-disable no-extend-native */
Array.prototype.isSubsetOf = function(target) {
  return false;
};

module.exports = {
  Array,
};
