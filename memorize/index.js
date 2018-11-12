/*
    memoize takes a function's results and stores them.
    Assume that this function only takes primitives as arguments.
      Side note: What's a primitive?

    memoize should return a function that, when called, will check if
    it has already computed a result for the given argument. It should return
    that value if possible.
  */
const memoize = (cb) => {
  const cache = {};

  return (...params) => {
    const key = JSON.stringify(...params);
    if (cache[key] === undefined) {
      console.log("it is first");
      cache[key] = cb(...params);
    }

    return cache[key];
  };
};
module.exports = { memoize };
