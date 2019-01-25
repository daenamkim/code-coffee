// https://www.codewars.com/kata/529962509ce9545c76000afa/train/javascript

const discs = {
  R: "R",
  Y: "Y",
  U: "-",
};
const directions = {
  D: "D",
  L: "L",
  R: "R",
  LD: "LD",
  RD: "RD",
};

const getNextRowCol = (row, col, dir) => {
  switch (dir) {
    case directions.D:
      return [row + 1, col];
    case directions.L:
      return [row, col - 1];
    case directions.R:
      return [row, col + 1];
    case directions.LD:
      return [row + 1, col - 1];
    case directions.RD:
      return [row + 1, col + 1];
  }
};

const connectFour = (board) => {
  let currentState = "in progress";
  let countDiscU = 0;
  let countConnection = 0;

  const find = (row, col, which, dir) => {
    if (currentState !== "in progress") {
      return;
    }

    if (++countConnection >= 4) {
      currentState = which;
      return;
    }

    const [nextRow, nextCol] = getNextRowCol(row, col, dir);
    if (board[nextRow] && board[nextRow][nextCol] === which) {
      find(nextRow, nextCol, which, dir);
    }
  };

  const run = () => {
    const ROW_MAX = board.length;
    const COL_MAX = board[0].length;

    for (let i = 0; i < ROW_MAX; i++) {
      for (let j = 0; j < COL_MAX; j++) {
        if (board[i][j] === discs.U) {
          countDiscU++;
        } else {
          for (const key in directions) {
            countConnection = 0;
            find(i, j, board[i][j], directions[key]);
            if (currentState !== "in progress") {
              return;
            }
          }
        }
      }
    }
  };
  run();

  if (currentState === "in progress" && countDiscU === 0) {
    currentState = "draw";
  }

  return currentState;
};

module.exports = { connectFour };
