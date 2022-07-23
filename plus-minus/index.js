function plusMinus(arr) {
  let elements = arr.length;
  const iterator = arr.keys();
  let positiveEle = [];
  let negativeEle = [];
  let zeroEle = [];
  for (const key of iterator) {
    if (arr[key] > 0) {
      positiveEle.push(arr[key]);
    }
    if (arr[key] < 0) {
      negativeEle.push(arr[key]);
    }
    if (arr[key] === 0) {
      zeroEle.push(arr[key]);
    }
  }
  const TotalPositiveEle = positiveEle.length;
  const TotalNegativeEle = negativeEle.length;
  const TotalZeroEle = zeroEle.length;

  const ratioPositiveEle = TotalPositiveEle / elements;
  const ratioNegativeEle = TotalNegativeEle / elements;
  const ratioZeroEle = TotalZeroEle / elements;

  console.log(ratioPositiveEle.toFixed(6));
  console.log(ratioNegativeEle.toFixed(6));
  console.log(ratioZeroEle.toFixed(6));

  return [
    ratioPositiveEle.toFixed(6),
    ratioNegativeEle.toFixed(6),
    ratioZeroEle.toFixed(6),
  ];
}
