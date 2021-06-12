function arrayChange(inputArray) {
  let cnt = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (i < inputArray.length - 1) {
      if (inputArray[i] >= inputArray[i + 1]) {
        let point = inputArray[i] - inputArray[i + 1] + 1;
        cnt += point;
        inputArray[i + 1] = inputArray[i + 1] + point;
        console.log(inputArray[i + 1]);
      }
    }
  }

  return cnt;
}
