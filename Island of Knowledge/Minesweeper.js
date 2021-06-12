function minesweeper(matrix) {
  let arr = Array.from(Array(matrix.length), () =>
    Array(matrix[0].length).fill(0)
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == true) {
        if (i != 0 && j != 0) {
          arr[i - 1][j - 1] += 1;
        }

        if (i != 0) {
          arr[i - 1][j] += 1;
        }

        if (i != 0 && j != matrix[0].length - 1) {
          arr[i - 1][j + 1] += 1;
        }

        if (j != 0) {
          arr[i][j - 1] += 1;
        }

        if (j != matrix[0].length - 1) {
          arr[i][j + 1] += 1;
        }

        if (i != matrix.length - 1 && j != 0) {
          arr[i + 1][j - 1] += 1;
        }

        if (i != matrix.length - 1) {
          arr[i + 1][j] += 1;
        }

        if (i != matrix.length - 1 && j != matrix[0].length - 1) {
          arr[i + 1][j + 1] += 1;
        }
      }
    }
  }

  return arr;
}
