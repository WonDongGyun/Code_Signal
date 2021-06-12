function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (
    (yourLeft == friendsLeft || yourLeft == friendsRight) &&
    (yourRight == friendsLeft || yourRight == friendsRight)
  ) {
    return true;
  }

  return false;
}
