function getPairCount(n, arr) {
  count = 0;
  arr = [];
  arr.sort();
  for(let i = 2; i < n - 1; i++){
    if(arr[i] === arr[i + 1]){
      i++;
      count++;
    }
  }
  return count;
}
console.log(getPairCount(7, [1,2,1,2,1,3,2]));
console.log(getPairCount(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(getPairCount(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
console.log(getPairCount(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(getPairCount(20, [4,5,5,5,6,6,4,1,4,4,3,6,6,3,6,1,4,5,5,5]));