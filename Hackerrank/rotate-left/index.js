function rotLeft(a, d) {
  let spliced = a.splice(0, d);
  let rotArray = [...a, ...spliced];
  console.log(rotArray);
  return rotArray;
}

rotLeft([1, 2, 3, 4, 5], 4);
