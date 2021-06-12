function commonCharacterCount(s1, s2) {
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");

  const arrSet = new Set(s1Arr);
  const wordArr = [...arrSet];

  let cnt = 0;

  for (let i in wordArr) {
    console.log(wordArr[i]);
    let s1Len = s1Arr.filter((word) => wordArr[i] === word).length;
    let s2Len = s2Arr.filter((word) => wordArr[i] === word).length;

    cnt += Math.min(s1Len, s2Len);
  }

  return cnt;
}
