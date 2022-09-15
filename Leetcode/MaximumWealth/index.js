var maximumWealth = function (accounts) {
  let initialValue = 0;
  let iterator = accounts.keys();
  let result = [];

  for (const key of iterator) {
    let inn = accounts[key];

    let r = inn.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    result.push(r);
  }

  let richest = Math.max(...result);
  console.log(richest);
  return richest;
};

maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);
