function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const iteratorA = apples.keys();
  const iteratorB = oranges.keys();
  let resultA = [];
  let resultB = [];

  for (const key of iteratorA) {
    let addA = a + apples[key];
    if (addA >= s && addA <= t) {
      resultA.push(addA);
    }
  }

  for (const key of iteratorB) {
    let addB = b + oranges[key];
    if (addB >= s && addB <= t) {
      resultB.push(addB);
    }
  }

  console.log(resultA.length);
  console.log(resultB.length);

  return [resultA.length, resultB.length];
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
