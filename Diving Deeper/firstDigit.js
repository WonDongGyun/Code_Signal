function firstDigit(inputString) {
  const arr = inputString.split("");
  const result = arr.filter((i) => {
    if (isNaN(i) == false && i != " ") {
      return i;
    }
  });
  return result[0];
}
