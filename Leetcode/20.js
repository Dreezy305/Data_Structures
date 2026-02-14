function isValid(s) {
  let arrStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arrStack.push(s[i]);
    } else {
      if (arrStack.length === 0) {
        return false;
      }
      let top = arrStack.pop();
      if (s[i] === ")" && top !== "(") {
        return false;
      }
      if (s[i] === "}" && top !== "{") {
        return false;
      }
      if (s[i] === "]" && top !== "[") {
        return false;
      }
    }
  }

  if (arrStack.length > 0) {
    return false;
  }
  return true;
}

function isValidOptimized(s) {
  let arrStack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arrStack.push(s[i]);
    } else {
      if (arrStack.length === 0) {
        return false;
      }
      let top = arrStack.pop();
      if (map[s[i]] !== top) {
        return false;
      }
    }
  }

  if (arrStack.length > 0) {
    return false;
  }
  return true;
}
