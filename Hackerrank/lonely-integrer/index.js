let result = a.sort();
let filterResult = result.filter(
  (x, i, arr) => x !== arr[i + 1] && x !== arr[i - 1]
);
let finalResult = filterResult[0];

console.log(finalResult);

return finalResult;
