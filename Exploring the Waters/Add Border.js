function addBorder(picture) {
  picture.push("*".repeat(picture[0].length));
  picture.unshift("*".repeat(picture[0].length));
  picture = picture.map((element) => {
    return "*" + element + "*";
  });

  return picture;
}
