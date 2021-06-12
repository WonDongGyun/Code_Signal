function alternatingSums(a) {
  let arr = [];
  let team1 = 0;
  let team2 = 0;

  for (let i in a) {
    if (i == 0 || i % 2 == 0) {
      team1 += a[i];
    } else {
      team2 += a[i];
    }
  }
  arr.push(team1);
  arr.push(team2);

  return arr;
}
