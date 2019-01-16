// 01:48 - 02:00 : 12-min

const permutation = (params) => {
  const results = [];

  const recur = (depth, arr) => {
    if (depth >= params.length) {
      results.push(arr);
      return;
    }

    for (const item of params[depth]) {
      recur(depth + 1, [...arr, item]);
    }
  };
  recur(0, []);
  console.log(results);
};

permutation([[1, 3], ["a"], [4, 5]]);
permutation([
  ["   ", "%%"],
  [1, 3, 5, 4, 6],
  ["AA", undefined, null],
  [4.55, 500000, {}],
]);
