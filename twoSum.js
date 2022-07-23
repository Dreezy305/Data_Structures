function twoSum(arr = [], num) {
  // loop the array
  for (i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return [i, j];
      }
    }
  }
}

twoSum([3, 2, 4], 6);
