function findEmailDomain(address) {
  const arr = address.split("");
  return arr
    .map((element, index) => {
      return index >= arr.lastIndexOf("@") + 1 ? element : "";
    })
    .join("");
}
