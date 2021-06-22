function chessKnight(cell) {
  let moveCnt = 8;

  if (cell.charAt(0) == "b" || cell.charAt(0) == "g") {
    moveCnt -= 2;
  }

  if (cell.charAt(1) == "2" || cell.charAt(1) == "7") {
    moveCnt -= 2;
  }

  if (cell.charAt(0) == "a" || cell.charAt(0) == "h") {
    moveCnt /= 2;
  }

  if (cell.charAt(1) == "1" || cell.charAt(1) == "8") {
    moveCnt /= 2;
  }

  return moveCnt;
}
