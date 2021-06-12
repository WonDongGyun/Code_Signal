function sortByHeight(a) {
  let temp = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] != -1) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] != -1 && a[i] > a[j]) {
          temp = a[i];
          a[i] = a[j];
          a[j] = temp;
        }
      }
    }
  }

  return a;
}
