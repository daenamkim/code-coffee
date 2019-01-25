// https://www.codewars.com/kata/529962509ce9545c76000afa/train/javascript

function connectFour(board) {
  const ROW_MAX = board.length;
  const COL_MAX = board[0].length;
  const disc = {
    R: "R",
    Y: "Y",
    U: "-",
  };
  let currentState = "in progress";
  let countDiscU = 0;
  let countConnection = 0;

  const mark = (row, col, which) => {
    if (board[row][col] === disc.U) {
      return;
    } else if (board[row][col] === which) {
      countConnection++;
    }

    board[row][col] = disc.U;

    if (row - 1 >= 0) {
      mark(row - 1, col, which);
    }

    if (row + 1 < ROW_MAX) {
      mark(row + 1, col, which);
    }

    if (col - 1 >= 0) {
      mark(row, col - 1, which);
    }

    if (col + 1 < COL_MAX) {
      mark(row, col + 1, which);
    }
  };

  const loop = () => {
    for (let i = 0; i < ROW_MAX; i++) {
      for (let j = 0; j < COL_MAX; j++) {
        if (board[i][j] === disc.U) {
          countDiscU++;
        } else {
          countConnection = 0;
          const which = board[i][j];
          mark(i, j, which);
          if (countConnection >= 4) {
            currentState = which;
            return;
          }
        }
      }
    }
  };

  loop();

  if (currentState === "in progress" && countDiscU === ROW_MAX * COL_MAX) {
    currentState = "draw";
  }

  return currentState;
}

module.exports = { connectFour };
