function lineEncoding(s) {
  const arr = s.split("");
  let word = "";
  let wordNum = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i]) {
      wordNum++;
    } else {
      word += (wordNum != 1 ? wordNum : "") + arr[i - 1];
      wordNum = 1;
    }

    if (i == arr.length - 1) {
      word += (wordNum != 1 ? wordNum : "") + arr[i];
    }
  }

  return word;
}
