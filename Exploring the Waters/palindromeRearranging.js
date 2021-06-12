function palindromeRearranging(inputString) {
  let arr = inputString.split("");
  let wordArr = [...new Set(inputString.split(""))];
  let evenOddArr = [];
  let oddCnt = 0;
  for (let i in wordArr) {
    evenOddArr.push(arr.filter((element) => wordArr[i] === element).length);
  }

  for (let i in evenOddArr) {
    if (evenOddArr[i] % 2 != 0) {
      oddCnt += 1;
      if (oddCnt > 1) {
        return false;
      }
    }
  }
  return true;
}
