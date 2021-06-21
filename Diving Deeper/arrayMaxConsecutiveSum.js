function arrayMaxConsecutiveSum(inputArray, k) {
  let max = 0;
  if (k == 1) {
    max = Math.max(...inputArray);
  } else {
    for (let i = 0; i < inputArray.length - k + 1; i++) {
      let count = 0;
      for (let j = i; j < i + k; j++) {
        count = count + inputArray[j];
      }

      if (count >= max) {
        max = count;
      }
    }
  }
  return max;
}
