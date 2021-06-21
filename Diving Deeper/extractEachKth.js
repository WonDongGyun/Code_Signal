function extractEachKth(inputArray, k) {
  const arr = [];
  let chk = k - 1;
  for (const i in inputArray) {
    console.log(chk);
    if (i != chk) {
      arr.push(inputArray[i]);
    } else {
      chk = chk + k;
    }
  }
  return arr;
}
