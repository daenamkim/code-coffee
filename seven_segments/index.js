/*
  Create a program to decipher a seven segment display, commonly seen on many older electronic devices.

  Input Description
  You will receive 3 lines of input, with each line being 27 characters long (representing 10 total numbers), with the digits spread across the 3 lines. Your job is to return the represented digits. You don't need to account for odd spacing or missing segments.

  Output Description
  Your program should print the numbers contained in the display.

  Some tests with examplex have been written for you already so you get an idea what input looks like.
*/

const getDigitNumber = (input) => {
  const digitMap = {
    '[" _ ","| |","|_|"]': 0,
    '["   ","  |","  |"]': 1,
    '[" _ "," _|","|_ "]': 2,
    '[" _ "," _|"," _|"]': 3,
    '["   ","|_|","  |"]': 4,
    '[" _ ","|_ "," _|"]': 5,
    '[" _ ","|_ ","|_|"]': 6,
    '[" _ ","  |","  |"]': 7,
    '[" _ ","|_|","|_|"]': 8,
    '[" _ ","|_|"," _|"]': 9,
  };

  return digitMap[JSON.stringify(input)];
};

const interpretDisplay = (input) => {
  const digits = [];
  const digitWidth = 3;
  const inputLines = input.split("\n");
  const lineLength = inputLines[0].length;
  for (let i = 0; i < lineLength; i += digitWidth) {
    const test = [];
    inputLines.forEach((line) => {
      test.push(line.slice(i, i + digitWidth));
    });
    // Here is the point to get what array stands for a specific digit.
    digits.push(getDigitNumber(test));
  }

  return digits.join("");
};

module.exports = { interpretDisplay };
