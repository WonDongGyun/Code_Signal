function areSimilar(a, b) {
  let cnt = 0;

  for (let i in a) {
    if (a[i] == b[i]) {
      cnt += 1;
    } else {
      if (b.indexOf(a[i]) == -1 || a.indexOf(b[i]) == -1) {
        return false;
      }

      if (
        a.filter((element) => a[i] === element).length !=
        b.filter((element) => a[i] === element).length
      ) {
        return false;
      }
    }
  }

  console.log(cnt, a.length);
  if (cnt == a.length || cnt == a.length - 2) {
    return true;
  } else {
    return false;
  }
}
