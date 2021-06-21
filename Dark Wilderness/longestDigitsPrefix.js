function longestDigitsPrefix(inputString) {
  const arr = inputString.split("");
  let word = "";
  for (const i in arr) {
    if (!isNaN(arr[i]) && arr[i] != " ") {
      word = word + arr[i];
    } else {
      break;
    }
  }
  return word;
}
