function differentSquares(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const squArr = [];

  if (row < 2 || col < 2) {
    return 0;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      let arr = "";
      arr +=
        String(matrix[i][j]) +
        String(matrix[i][j - 1]) +
        String(matrix[i - 1][j]) +
        String(matrix[i - 1][j - 1]);
      squArr.push(arr);
    }
  }

  return new Set(squArr).size;
}
