var fizzBuzz = function (n) {
  let newArr = [...Array(n)];
  let buzzArr = newArr.map((i, index) => index + 1);
  let iterator = buzzArr.keys();
  let result = [];
  let str = "";
  for (const key of iterator) {
    if (buzzArr[key] % 3 === 0 && buzzArr[key] % 5 === 0) {
      result.push("FizzBuzz");
    } else if (buzzArr[key] % 3 === 0) {
      result.push("Fizz");
    } else if (buzzArr[key] % 5 === 0) {
      result.push("Buzz");
    } else if (buzzArr[key] % 5 !== 0 && buzzArr[key] % 3 !== 0) {
      str = `${buzzArr[key]}`;
      result.push(str);
    }
  }

  console.log(result);
  return result;
};

fizzBuzz(15);
fizzBuzz(5);
fizzBuzz(3);
