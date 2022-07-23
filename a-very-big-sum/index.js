function aVeryBigSum(arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  console.log(sumWithInitial);
  return sumWithInitial;
}
