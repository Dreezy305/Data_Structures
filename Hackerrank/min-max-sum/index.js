function miniMaxSum(arr) {
  let strn = " ";  // creates soace between the values
  let initialValue = 0;   // initialises the first value to zero

  let sort1 = arr.sort((a, b) => a - b);    // sorts array
  let slice1 = sort1.slice(1);

  let slice2 = sort1.slice(0, arr.length - 1);

  let reduce1 = slice1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  let reduce2 = slice2.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  let res = reduce2 + strn + strn + reduce1;

  if (reduce2 < reduce1) {
    console.log(reduce2, reduce1);
  }

  if (reduce2 > reduce1) {
    console.log(reduce1, reduce2);
  }

  if (reduce2 === reduce1) {
    console.log(reduce1, reduce2);
  }
}

miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([396285104, 573261094, 759641832, 819230764, 364801279]);
miniMaxSum([256741038, 623958417, 467905213, 714532089, 938071625]);
miniMaxSum([156873294, 719583602, 581240736, 605827319, 895647130]);
miniMaxSum([793810624, 895642170, 685903712, 623789054, 468592370]);
miniMaxSum([7, 69, 2, 221, 8974]);
miniMaxSum([5, 5, 5, 5, 5]);

/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */
