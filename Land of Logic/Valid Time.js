function validTime(time) {
  const arr = time.split(":");
  if (parseInt(arr[0]) < 24 && parseInt(arr[1]) < 60) {
    return true;
  } else {
    return false;
  }
}
