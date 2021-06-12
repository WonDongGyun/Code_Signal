function isIPv4Address(inputString) {
  let arr = inputString.split(".");

  for (let i in arr) {
    if (
      isNaN(Number(arr[i])) ||
      !(0 <= parseInt(arr[i]) && parseInt(arr[i]) <= 255) ||
      arr.length != 4 ||
      (arr[i].length > 1 && arr[i][0] == 0)
    ) {
      return false;
    }
  }

  return true;
}
