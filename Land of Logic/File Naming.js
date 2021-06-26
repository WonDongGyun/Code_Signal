function fileNaming(names) {
  let arr = [];
  for (const i in names) {
    let count = 0;
    let word = names[i];

    if (arr.indexOf(names[i]) > -1) {
      while (arr.indexOf(names[i]) > -1) {
        count++;
        names[i] = word + "(" + count + ")";
      }
    }
    arr.push(names[i]);
  }
  return arr;
}
