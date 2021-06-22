function isBeautifulString(inputString) {
  // console.log(inputString.split('').sort());
  const arr = inputString.split("").sort();
  const sortArr = [...new Set(arr)];
  let count = inputString.match(/a/g);
  if (count == null) {
    return false;
  } else {
    count = count.length;
  }

  for (const i in sortArr) {
    let temp = 0;
    if (i > 0 && sortArr[i - 1].charCodeAt() != sortArr[i].charCodeAt() - 1) {
      return false;
    }

    for (const j in arr) {
      if (sortArr[i] == arr[j]) {
        temp++;
      }
    }

    if (count >= temp) {
      count = temp;
    } else {
      return false;
    }
  }
  return true;
}
