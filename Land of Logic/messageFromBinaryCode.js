function messageFromBinaryCode(code) {
  let i = 0;
  let j = 8;
  let word = "";

  while (code.substring(i, j) != "") {
    word += String.fromCharCode(parseInt(code.substring(i, j), 2));
    i = j;
    j += 8;
  }

  return word;
}
