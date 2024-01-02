function arrayManipulation(n, queries) {
  // Write your code here
  // create an array on n values
  let arr = new Array(n).fill(0);
  let output = 0;
  queries.forEach(([a, b, k]) => {
    console.log(b);
    for (let i = a; i <= b; i++) {
      arr[i] += k;
    }
  });
  output = Math.max(...arr);
  console.log(output);
  return output;
}
