function quickSort(originArray) {
  let final;
  // check the length of the array
  if (originArray.length <= 1) {
    return originArray;
  } else {
    var left = [];
    var right = [];
    var result = [];
    var pivot = originArray.pop();
    var length = originArray.length;
    for (i = 0; i < length; i++) {
      if (originArray[i] <= pivot) {
        left.push(originArray[i]);
      } else {
        right.push(originArray[i]);
      }
    }
    final = result.concat(quickSort(left), pivot, quickSort(right));
  }
  return final;
}
quickSort([51, 95, 66, 72, 42, 38, 39, 41, 15]);
quickSort([3, 0, 2, 5, -1, 4, 1]);
