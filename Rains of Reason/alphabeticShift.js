function alphabeticShift(inputString) {
  var arr = inputString.split("");
  return arr
    .map((element) => {
      return String.fromCharCode(
        element.charCodeAt(0) + 1 == 123 ? 97 : element.charCodeAt(0) + 1
      );
    })
    .join("");
}
