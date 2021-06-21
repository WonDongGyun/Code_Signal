function bishopAndPawn(bishop, pawn) {
  const xPos = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
  const board = Array.from(Array(8), () => new Array(8).fill(0));
  const bishopPos = bishop.split("");
  const pawnPos = pawn.split("");

  // setting
  board[Math.abs(parseInt(pawnPos[1]) - 8)][xPos[pawnPos[0]]] = 1;

  // find
  const lu = leftUp(
    board,
    Math.abs(parseInt(bishopPos[1]) - 8),
    xPos[bishopPos[0]]
  );
  const ld = leftDown(
    board,
    Math.abs(parseInt(bishopPos[1]) - 8),
    xPos[bishopPos[0]]
  );
  const ru = rightUp(
    board,
    Math.abs(parseInt(bishopPos[1]) - 8),
    xPos[bishopPos[0]]
  );
  const rd = rightDown(
    board,
    Math.abs(parseInt(bishopPos[1]) - 8),
    xPos[bishopPos[0]]
  );

  if (lu == true || ld == true || ru == true || rd == true) {
    return true;
  } else {
    return false;
  }
}

function leftUp(board, row, col) {
  if (row > -1 && row < 8 && !col > -1 && col < 8) {
    if (board[row][col] == 1) {
      return true;
    } else {
      return leftUp(board, row - 1, col - 1);
    }
  } else {
    return false;
  }
}

function leftDown(board, row, col) {
  if (row > -1 && row < 8 && !col > -1 && col < 8) {
    if (board[row][col] == 1) {
      return true;
    } else {
      return leftDown(board, row + 1, col - 1);
    }
  } else {
    return false;
  }
}

function rightUp(board, row, col) {
  if (row > -1 && row < 8 && !col > -1 && col < 8) {
    if (board[row][col] == 1) {
      return true;
    } else {
      return rightUp(board, row - 1, col + 1);
    }
  } else {
    return false;
  }
}

function rightDown(board, row, col) {
  if (row > -1 && row < 8 && !col > -1 && col < 8) {
    if (board[row][col] == 1) {
      return true;
    } else {
      return rightDown(board, row + 1, col + 1);
    }
  } else {
    return false;
  }
}
