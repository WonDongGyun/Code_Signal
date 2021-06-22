function deleteDigit(n) {
  const wordNum = String(n);
  let maxNum = 0;
  for (let i = 0; i < wordNum.length; i++) {
    let arr = String(n).split("");

    for (let j = 0; j < wordNum.length; j++) {
      if (i == j) {
        arr.splice(i, 1);
      }
    }

    if (maxNum <= parseInt(arr.join(""))) {
      maxNum = parseInt(arr.join(""));
    }
  }

  return maxNum;
}
