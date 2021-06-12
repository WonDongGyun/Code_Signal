function arrayMaximalAdjacentDifference(inputArray) {
  let mad = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    let maxNum = Math.max(
      inputArray[i] - inputArray[i + 1],
      inputArray[i + 1] - inputArray[i]
    );

    if (mad < maxNum) {
      mad = maxNum;
    }
  }

  return mad;
}
