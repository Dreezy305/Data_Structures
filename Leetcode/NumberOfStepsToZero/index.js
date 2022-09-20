var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
      count++;
    } else {
      num--;
      count++;
    }
  }
  console.log(count);
  return count;
};

numberOfSteps(123);
