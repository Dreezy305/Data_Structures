function compareTriplets(a, b) {
  let counterA = 0;
  let counterB = 0;
  let finalArray1 = [];
  let finalArray2 = [];
  const iterator = a.keys();
  for (const key of iterator) {
    if (a[key] > b[key]) {
      counterA++;
      counterB += 0;
      finalArray1.push(counterA);
      finalArray2.push(counterB);
    }
    if (a[key] < b[key]) {
      counterB++;
      counterA += 0;
      finalArray2.push(counterB);
      finalArray1.push(counterA);
    }
    if (a[key] == b[key]) {
      counterA += 0;
      counterB += 0;
      finalArray2.push(counterB);
      finalArray1.push(counterA);
    }
  }
  const res1 = finalArray1[finalArray1.length - 1];
  const res2 = finalArray2[finalArray2.length - 1];
  const output = [res1, res2];
  console.log(output);
  return output;
}
