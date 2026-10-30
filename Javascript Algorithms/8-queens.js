let board = [], count = 0;

function place(row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i] === col || Math.abs(board[i] - col) === Math.abs(i - row)) {
      return false;
    }
  }
  return true;
}

function print(n) {
  console.log(`\nSolución ${++count}:`);
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += board[i] === j ? "Q " : "- ";
    }
    console.log(row);
  }
}

function queen(row, n) {
  for (let col = 0; col < n; col++) {
    if (place(row, col)) {
      board[row] = col;
      if (row === n - 1) print(n);
      else queen(row + 1, n);
    }
  }
}

// Ejemplo de uso para 4 reinas:
queen(0, 4);
