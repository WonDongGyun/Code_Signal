function evenDigitsOnly(n) {
  let num = String(n).split("");
  return num
    .map((element) => {
      return parseInt(element) % 2 == 0 ? true : false;
    })
    .indexOf(false) == -1
    ? true
    : false;
}
