function sudoku(grid) {
  const compareArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let status = true;
  for (let i = 0; i < 9; i++) {
    status = checkHori(grid, i, compareArr);
    if (status === false) {
      return status;
    }
  }

  for (let i = 0; i < 9; i++) {
    status = checkVerti(grid, i, compareArr);
    if (status === false) {
      return status;
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      status = checkNine(grid, i, j, compareArr);
      if (status === false) {
        return status;
      }
    }
  }

  return status;
}

function checkHori(arr, row, compareArr) {
  const sortArr = [];

  for (let i = 0; i < 9; i++) {
    sortArr.push(arr[row][i]);
  }

  sortArr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < 9; i++) {
    if (sortArr[i] != compareArr[i]) {
      return false;
    }
  }

  return true;
}

function checkVerti(arr, col, compareArr) {
  const sortArr = [];

  for (let i = 0; i < 9; i++) {
    sortArr.push(arr[i][col]);
  }

  sortArr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < 9; i++) {
    if (sortArr[i] != compareArr[i]) {
      return false;
    }
  }

  return true;
}

function checkNine(arr, row, col, compareArr) {
  const sortArr = [];
  let rowNum = 0;
  let colNum = 0;

  if (row > 2 && row <= 5) {
    rowNum = 3;
  }

  if (row > 5 && row <= 8) {
    rowNum = 6;
  }

  if (col > 2 && col <= 5) {
    colNum = 3;
  }

  if (col > 5 && col <= 8) {
    colNum = 6;
  }

  for (let i = rowNum; i < rowNum + 3; i++) {
    for (let j = colNum; j < colNum + 3; j++) {
      sortArr.push(arr[i][j]);
    }
  }

  sortArr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < 9; i++) {
    if (sortArr[i] != compareArr[i]) {
      return false;
    }
  }

  return true;
}
