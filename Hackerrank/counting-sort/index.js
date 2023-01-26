function countingSort(arr) {
  // Write your code here
  const zeros = new Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
    zeros[arr[i]]++;
  }
  return zeros;
}
