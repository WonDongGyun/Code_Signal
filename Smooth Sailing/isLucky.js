function isLucky(n) {
  let numArr = String(n)
    .split("")
    .map((element) => {
      return parseInt(element);
    });
  let first = numArr.slice(0, numArr.length / 2);
  let second = numArr.slice(numArr.length / 2);

  let fSum = first.reduce((acc, cur, i) => {
    return acc + cur;
  });
  let sSum = second.reduce((acc, cur, i) => {
    return acc + cur;
  });

  if (fSum == sSum) {
    return true;
  } else {
    return false;
  }
}
