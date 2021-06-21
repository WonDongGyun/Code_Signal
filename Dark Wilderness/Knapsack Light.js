function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 > maxW && weight2 > maxW) {
    return 0;
  } else if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  } else {
    if (weight1 <= maxW && weight2 <= maxW) {
      return Math.max(value1, value2);
    } else {
      return weight1 > maxW ? value2 : value1;
    }
  }
}
