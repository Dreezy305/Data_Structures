function FindIntersection(strArr) {
  let arr1;
  let arr2;
  let arr3;

  for (let i = 0; i < strArr.length; i++) {
    arr1 = strArr.splice(0, 1).toString().split(",");
    // console.log(arr1)
    arr2 = strArr.splice(0, 1).toString().split(",");
    // console.log(arr2)
    arr3 = arr1
      .filter((value) => arr2.includes(value))
      .toString()
      .split(",");
    // console.log(arr3)
    strArr.push(arr3);
    // console.log(strArr.toString());
  }
  // code goes here
  return strArr.toString().replace(/\s/g, "");
}

// keep this function call here
console.log(FindIntersection(readline()));
