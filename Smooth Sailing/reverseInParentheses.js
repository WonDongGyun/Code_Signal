function reverseInParentheses(inputString) {
  let stack = [];
  let queue = [];

  for (let i in inputString) {
    if (inputString[i] == "(") {
      stack.push(i);
    }

    if (inputString[i] == ")") {
      queue.push(i);
      while (stack.length != 0 && queue.length != 0) {
        let start = parseInt(stack.pop()) + 1;
        let end = parseInt(queue.shift());

        inputString =
          inputString.substring(0, start) +
          inputString.substring(start, end).split("").reverse().join("") +
          inputString.substring(end);
      }
    }
  }

  inputString = inputString.replace(/\(/gi, "").replace(/\)/gi, "");

  return inputString;
}
