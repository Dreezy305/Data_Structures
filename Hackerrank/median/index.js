function findMedian(arr) {
  // Write your code here
  let sortedArray = arr.sort((a, b) => a - b);
  let result = 0;
  let ArrayLength = sortedArray.length;
  if (ArrayLength % 2 !== 0) {
    let lengthDivide = Math.floor(ArrayLength / 2);
    result = sortedArray[lengthDivide];
  } else if (ArrayLength % 2 === 0) {
    let div1 = ArrayLength / 2;
    let div2 = div1 - 1;
    let val1 = sortedArray[div1];
    let val2 = sortedArray[div2];
    let addValue = (val1 + val2) / 2;
    result = addValue;
  }

  console.log(result);
  return result;
}

findMedian([0, 1, 2, 4, 6, 5, 3]);
findMedian([1, 2, 3, 4, 5, 6]);
