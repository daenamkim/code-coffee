/***
 * Input is  number, string
 * i.e. 3, '$'
 * Output is
 *   $\n
 *  $ $\n
 * $ $ $
 */

const christmasTree = (num, char) => {
  if (!num || !char) {
    return "";
  }

  let result = "";
  for (let i = 1; i <= num; i++) {
    const prefix = new Array(num - i).fill(" ").join("");
    const line = new Array(i).fill(char).join(" ");
    result += `${prefix}${line}\n`;
  }

  return result;
};

module.exports = { christmasTree };
