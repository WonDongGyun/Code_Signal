function longestWord(text) {
  const regExp = RegExp(/[a-zA-Z]/);
  const arr = text.split("");
  let retWord = "";
  let temp = "";

  for (const i in arr) {
    if (regExp.test(arr[i]) == true) {
      temp += arr[i];
    } else {
      if (retWord.length <= temp.length) {
        retWord = temp;
      }
      temp = "";
    }

    if (i == arr.length - 1 && temp != "") {
      if (retWord.length <= temp.length) {
        retWord = temp;
      }
    }
  }

  return retWord;
}
