function variableName(name) {
  let arr = name.split("");
  const regExp = /^[A-Za-z0-9_+]*$/;
  const firstRegExp = /^[A-Za-z_+]*$/;
  let tfArr = arr.map((element) => {
    return regExp.test(element) == true ? true : false;
  });

  return firstRegExp.test(arr[0]) == true && tfArr.indexOf(false) == -1
    ? true
    : false;
}
