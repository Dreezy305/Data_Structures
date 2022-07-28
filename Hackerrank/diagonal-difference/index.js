function diagonalDifference(arr) {
  let n = arr.length;
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === j) {
        diagonal1 += arr[i][j];
      }
      if (i + j === n - 1) {
        diagonal2 += arr[i][j];
      }
    }
  }
  const result = Math.abs(diagonal1 - diagonal2);
  console.log(result);
  return result;
}
