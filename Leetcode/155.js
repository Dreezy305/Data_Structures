var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  let min = val;
  if (this.stack.length === 0) {
    return this.stack.push({ value: val, min: min });
  } else {
    let top = this.stack[this.stack.length - 1].min;
    let newMin = Math.min(val, top);
    return this.stack.push({ value: val, min: newMin });
  }
};

MinStack.prototype.pop = function () {
  return this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].value;
};

MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};
