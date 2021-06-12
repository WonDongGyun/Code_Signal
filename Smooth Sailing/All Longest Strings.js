function allLongestStrings(inputArray) {
  let maxlen = inputArray[0].length;
  let retArr = [];

  for (let i in inputArray) {
    console.log(inputArray[i].length);
    if (inputArray[i].length >= maxlen) {
      if (inputArray[i].length == maxlen) {
        retArr.push(inputArray[i]);
      }
      if (inputArray[i].length > maxlen) {
        retArr = [];
        maxlen = inputArray[i].length;
        retArr.push(inputArray[i]);
      }
    }
  }
  console.log(retArr);
  return retArr;
}
