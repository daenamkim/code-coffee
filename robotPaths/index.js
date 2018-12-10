class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }

  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  constructor(size) {
    this.size = size;
    this.board = new Board(size);
    this.paths = 0;
  }

  isEnd(row, col) {
    return row === this.size - 1 && col === this.size - 1;
  }

  getDirections(row, col) {
    const directions = [];

    if (row - 1 >= 0 && !this.board.hasBeenVisited(row - 1, col)) {
      directions.push({ row: row - 1, col });
    }

    if (row + 1 < this.size && !this.board.hasBeenVisited(row + 1, col)) {
      directions.push({ row: row + 1, col });
    }

    if (col - 1 >= 0 && !this.board.hasBeenVisited(row, col - 1)) {
      directions.push({ row, col: col - 1 });
    }

    if (col + 1 < this.size && !this.board.hasBeenVisited(row, col + 1)) {
      directions.push({ row, col: col + 1 });
    }

    return directions;
  }

  solve() {
    const findNext = (row, col) => {
      this.board.togglePiece(row, col);
      if (this.isEnd(row, col)) {
        this.paths++;
      } else {
        const directions = this.getDirections(row, col);
        for (const dir of directions) {
          findNext(dir.row, dir.col);
        }
      }
      this.board.togglePiece(row, col);
    };
    findNext(0, 0);
    return this.paths;
  }
}

module.exports = { RobotPaths };
