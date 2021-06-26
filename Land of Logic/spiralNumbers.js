function spiralNumbers(n) {
  const arr = Array.from(Array(n), () => Array(n).fill(0));
  let count = 1;
  let sCol = 0;
  let eCol = n - 1;
  let sRow = 0;
  let eRow = n - 1;

  while (sCol <= eCol && sRow <= eRow) {
    // go Right
    for (let i = sCol; i <= eCol; i++) {
      arr[sRow][i] = count;
      count++;
    }

    sRow++;

    // go Down
    for (let j = sRow; j <= eRow; j++) {
      arr[j][eCol] = count;
      count++;
    }

    eCol--;

    // go Left
    for (let i = eCol; i >= sCol; i--) {
      arr[eRow][i] = count;
      count++;
    }

    eRow--;

    // go Up
    for (let i = eRow; i >= sRow; i--) {
      arr[i][sCol] = count;
      count++;
    }

    sCol++;
  }

  return arr;
}
