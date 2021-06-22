function buildPalindrome(st) {
  let arr = st.split("");
  let reverseArr = st.split("").reverse();
  let word = "";

  if (arr.join("") == reverseArr.join("")) {
    return arr.join("");
  }

  for (let i = 0; i < reverseArr.length; i++) {
    word += reverseArr[i];
    if (st.indexOf(word) == -1) {
      arr.push(reverseArr[i]);
    }
  }

  return arr.join("");
}
