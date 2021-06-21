function growingPlant(upSpeed, downSpeed, desiredHeight) {
  const day = Math.ceil((desiredHeight - downSpeed) / (upSpeed - downSpeed));
  if (day <= 0) {
    return 1;
  } else {
    return day;
  }
}
