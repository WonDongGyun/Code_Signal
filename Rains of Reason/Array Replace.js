function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((element) => {
    if (element == elemToReplace) {
      return substitutionElem;
    }
    return element;
  });
}
