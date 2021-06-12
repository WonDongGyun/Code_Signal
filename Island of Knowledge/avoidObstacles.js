function avoidObstacles(inputArray) {
  let cnt = 0;
  let swt = true;
  while (cnt <= Math.max(...inputArray)) {
    cnt++;
    for (let i in inputArray) {
      if (inputArray[i] % cnt == 0) {
        swt = false;
      }
    }

    if (swt == false) {
      swt = true;
    } else {
      break;
    }
  }

  return cnt;
}
