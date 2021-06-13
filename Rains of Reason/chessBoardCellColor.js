function chessBoardCellColor(cell1, cell2) {
  var chess = " ABCDEFGH";
  var c1 = cell1.split("");
  var c2 = cell2.split("");
  var color1 = 0;
  var color2 = 0;
  // odd alphabet oddColor = 0
  // even alphabet oddColor = 1

  if (chess.indexOf(c1[0]) % 2 != 0) {
    color1 = parseInt(c1[1]) % 2 != 0 ? 0 : 1;
  } else {
    color1 = parseInt(c1[1]) % 2 != 0 ? 1 : 0;
  }

  if (chess.indexOf(c2[0]) % 2 != 0) {
    color2 = parseInt(c2[1]) % 2 != 0 ? 0 : 1;
  } else {
    color2 = parseInt(c2[1]) % 2 != 0 ? 1 : 0;
  }

  return color1 == color2;
}
