function digitsProduct(product) {
  for (let i = 1; i < 10000; i++) {
    if ([...i.toString()].reduce((a, b) => a * b, 1) === product) {
      return i;
    }
  }
  return -1;
}
