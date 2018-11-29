/*
    On your phone's keypad, you may notice that each digit corresponds to
    a set of numbers (https://en.wikipedia.org/wiki/Phoneword).

    Write a function called `phoneWords` that takes a string of 1 to 4 numbers
    and returns a list of all the possible permutations of those numbers converted to
    their corresponding letters.

    0's and 1's should be left alone. The order matters--you can't switch order.

    Example:

    phoneWords('3456');
    returns => ['DGJM', 'DGJN', DGJO', 'DGKM', 'DGKN',...]

    phoneWords('21');
    returns => ['A1', 'B1', 'C1']

    phoneWords('0');
    returns => ['0'];
  */

/* You can use this if you want. */
const digitsDictionary = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

const phoneWords = (numWords) => {
  const groupNumbers = numWords.split('').map(num => digitsDictionary[parseInt(num)].split(''));
  const permutations = [];

  const findNext = (perm, groupIndex) => {
    for (const number of groupNumbers[groupIndex]) {
      const newPerm = [...perm, number];
      if (groupIndex >= groupNumbers.length - 1) {
        permutations.push(newPerm.join(''));
      } else {
        findNext(newPerm, groupIndex + 1);
      }
    }
  }
  findNext([], 0);

  return permutations;
};

module.exports = { phoneWords };
