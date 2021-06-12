function boxBlur(image) {
  let cnt = 0,
    row = 0,
    col = 0;
  let arr = Array.from(Array(image.length - 2), () =>
    Array(image[0].length - 2).fill(null)
  );

  while (true) {
    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        cnt += image[i][j];
      }
    }

    arr[row][col] = parseInt(Math.floor(cnt / (3 * 3)));
    cnt = 0;

    if (col + 3 == image[row].length && row + 3 == image.length) {
      break;
    } else if (col + 3 != image[row].length) {
      col += 1;
    } else if (row + 3 != image.length) {
      col = 0;
      row += 1;
    }
  }

  return arr;
}
