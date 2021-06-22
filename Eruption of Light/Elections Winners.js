function electionsWinners(votes, k) {
  let count = 0;
  for (let i = 0; i < votes.length; i++) {
    let vot = votes[i] + k;

    for (let j = 0; j < votes.length; j++) {
      if (i != j && vot <= votes[j]) {
        break;
      }

      if (j == votes.length - 1) {
        count++;
      }
    }
  }

  return count;
}
