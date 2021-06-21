function differentSymbolsNaive(s) {
  const arr = new Set(s.split(""));
  return arr.size;
}
