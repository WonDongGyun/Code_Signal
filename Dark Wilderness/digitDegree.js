function digitDegree(n) {
  let arr = String(n).split("");
  let count = 0;
  while (arr.length != 1) {
    arr = String(
      arr.reduce((acc, cur, index) => {
        return parseInt(acc) + parseInt(cur);
      }, 0)
    ).split("");
    count++;
  }
  return count;
}
