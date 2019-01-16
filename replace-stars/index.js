// 12:19-12:32, reboot a laptop because of a system error, 12:43-01:07 : 37-min (excluded reboot time)
const comb1 = (str) => {
  const re = /[*]+/g;
  const stars = re.exec(str)[0];
  const options = [0, 1];
  const results = [];

  const recur = (len, arr) => {
    if (len < 1) {
      results.push(arr);
      return;
    }

    for (const item of options) {
      recur(len - 1, [...arr, item]);
    }
  };

  recur(stars.length, []);

  for (const item of results) {
    console.log(str.replace(re, item.join("")));
  }
};

// console.log("====== case #1 ======");
// console.log("11*00 <= INPUT");
// comb1("11*00");
// console.log("====== case #2 ======");
// console.log("10***11110 <= INPUT");
// comb1("10***11110");

// TODO: What are the limitations of your solution? If you would like to fix them what would you need to do?
// I found when * is not consecutive it didn't work.
// 01:07-01:31 : 24-min

const comb1a = (str) => {
  const indexes = [];
  const stars = str.split("").filter((ch, index) => {
    if (ch === "*") {
      indexes.push(index);
      return true;
    }
    return false;
  });
  const options = [0, 1];
  const results = [];

  const recur = (len, arr) => {
    if (len < 1) {
      results.push(arr);
      return;
    }

    for (const item of options) {
      recur(len - 1, [...arr, item]);
    }
  };
  recur(stars.length, []);

  for (const result of results) {
    const copy = str.split("");
    for (const i in indexes) {
      copy[indexes[i]] = result[i];
    }
    console.log(copy.join(""));
  }
};

console.log("====== case #1 ======");
console.log("11*0*1 <= INPUT");
comb1a("11*0*1");
console.log("====== case #2 ======");
console.log("11*00 <= INPUT");
comb1a("11*00");
console.log("====== case #3 ======");
console.log("10***11110 <= INPUT");
comb1a("10***11110");
console.log("====== case #4 ======");
console.log("1*1*1*1*0*0*0*0*1 <= INPUT");
comb1a("1*1*1*1*0*0*0*0*1");
// TODO: Add test codes.
