function sumUpNumbers(inputString) {
  const arr = inputString.split("");
  let sumUp = 0;
  let temp = "";

  for (const i in arr) {
    if (isNaN(parseInt(arr[i])) == false) {
      temp += arr[i];
    } else {
      if (isNaN(parseInt(temp)) == false) {
        sumUp += parseInt(temp);
      }
      temp = "";
    }

    if (i == arr.length - 1) {
      if (isNaN(parseInt(temp)) == false) {
        sumUp += parseInt(temp);
      }
    }
  }

  return sumUp;
}
