// # Islands
// ## Summary
// Given a map of an ocean, count how many islands there are.
// ## Input
// A 2-D array of 0's and 1's where 0 represents water and 1 represents land;
// ## Output
// An integer representing the number of islands on the map. (If two pieces of land are next to each other on the same column or same row, they are considered "connected" and are thus part of the same island)
// ## Example
// Map:
// ```
// [[1, 1, 1],
// [0, 0, 0],
// [0, 0, 1]]
// ```
// Islands: 2
// Map:
// ```
// [[0, 1, 0, 1],
// [0, 0, 0, 0],
// [1, 0, 1, 0],
// [1, 0, 1, 0]]
// ```
// Islands: 4
// ## Constraints
// Map size is at least 1x1 and at most 10x10.
// Time complexity must be O(n) or faster.
const islands = (map) => {
  let founds = 0;
  const maxRow = map.length;
  const maxCol = map[0].length;
  function removeNear(row, col) {
    map[row][col] = 0;
    if (map[row - 1] && map[row - 1][col]) {
      removeNear(row - 1, col);
    }
    if (map[row + 1] && map[row + 1][col]) {
      removeNear(row + 1, col);
    }
    if (map[row][col - 1]) {
      removeNear(row, col - 1);
    }
    if (map[row][col + 1]) {
      removeNear(row, col + 1);
    }
  }

  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxCol; j++) {
      if (map[i][j] === 1) {
        founds++;
        removeNear(i, j);
      }
    }
  }

  return founds;
};

module.exports = { islands };
