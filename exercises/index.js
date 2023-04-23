// JAVASCRIPT CHALLENGES
function truncate_string(value, num) {
  const extract = value.substring(0, num);
  return extract;
}
truncate_string("Robin Singh", 4);

// 2
function abbrev_name(value) {
  const extract = value.substring();
  const namesArray = value.split(" ");
  const firstName = namesArray[0];
  const lastName = namesArray[1].charAt(0);
  return `${firstName} ${lastName}.`;
}
abbrev_name("Robin Singh");

// 3
function protect_email(email) {
  const atIndex = email.indexOf("@");
  const removeAt = email.slice(atIndex);
  const beforeAt = email.substring(0, atIndex);
  const hide = `${beforeAt.substring(0, 5)}` + "...";
  const finalString = hide + removeAt;
  return finalString;
}

protect_email("robin_singh@example.com");

// GET THE FIRST "N" ELEMENTS OF AN ARRAY
function first(params, num) {
  params.slice(num);
  if (num >= 0) {
    const rem = params.slice(0, num);
    return rem;
  } else {
    return [];
  }
}
first([7, 9, 0, -2], 6);

// GET THE LAST INDEX OF LAST "N" ELEMENTS OF AN ARRAY
function last(params, num) {
  const length = params.length;
  if (num === 0) {
    const lastValue = params[length - 1];
    return lastValue;
  } else if (num > 0 && length > num) {
    const newArr = params.slice(length - 3);
    return newArr;
  } else {
    return params;
  }
}
last([7, 9, 0, -2], 6);

// SORT THE ARRAY
function sortArray(params) {
  const compareNumbers = (a, b) => {
    return a - b;
  };
  const sorted = params.sort(compareNumbers);
  return sorted;
}
sortArray([-3, 8, 7, 6, 5, -4, 3, 2, 1]);

// CONVERT STRING
function convStr(params) {
  let res;
  const strArr = params.split("").forEach((item) => {
    let i = [];
    if (/^[A-Z]*$/.test(item)) {
      const value = item.toLowerCase();
      i.push(value);
    } else if (/^[a-z]*$/.test(item)) {
      i.push(item.toUpperCase());
    }
    console.log(`${i.toString()}`);
    return i.toString();
  });

  console.log(strArr);
}
convStr("The Quick Brown Fox");

// MOST FREQUENT
function mostFrequent(arr) {
  let freq = {};
  let maxFreq = 0;
  let maxItem = null;

  for (let item of arr) {
    if (!freq[item]) {
      freq[item] = 1;
    } else {
      freq[item]++;
    }
    if (freq[item] > maxFreq) {
      maxFreq = freq[item];
      maxItem = item;
    }
  }

  return "";
}
mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);

function rowElement(params) {
  // APPROACH 1
  const length = params.length;
  for (const element in params) {
    console.log("row" + " " + element);
    console.log(params[element]);
  }
}

// PRINT THE ELEMENTS OF ROW OF AN ARRAY (APPROACH 1)
function rowElements(params) {
  // APPROACH 1
  const length = params.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      // console.log("row"+ i)
      // console.log(params[i][j])
    }
  }
}

// SUM AND PRODUCTS OF AN ARRAY OF INTEGRER
function sumAndProd(params) {
  let initialValue = 0;
  const sumAllProduct = params.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const timesAllProduct = params.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  return { sum: sumAllProduct, product: timesAllProduct };
}

sumAndProd([1, 2, 3, 4, 5, 6]);

// REMOVE DUPLICATE
function removeDuplicate(params) {
  // SORT THE ARRAY
  const compareNumbers = (a, b) => {
    return a - b;
  };
  const sorted = params.sort(compareNumbers);
  const convToString = sorted
    .toString()
    .replace(/\b(\w+)\b(?=.*\b\1\b)/g, "")
    .split("")
    .filter((item) => item !== ",");
  // const splitStr = convToString.split("").filter((item) => item !== ",")
  // const result = splitStr.filter((item) => item !== ",")
  console.log(convToString);
  return convToString;
}

removeDuplicate([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]);

// COLOR PICKERS
function colorPicker(param1) {
  const iterator = param1.keys();
  let statement = "";
  for (const key of iterator) {
    // HANDLE CHOICES
    if (key + 1 === 1) {
      statement = `${key + 1}st choice is`;
    } else if (key + 1 === 2) {
      statement = `${key + 1}nd choice is`;
    } else if (key + 1 === 3) {
      statement = `${key + 1}rd choice is`;
    } else {
      statement = `${key + 1}th choice is`;
    }

    console.log(statement + " " + param1[key]);
  }
}
colorPicker(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]);

// ADD ELEMENTS OF ARRAY
function addElements(arr1, arr2) {
  const iterator = arr1.keys();
  let result = [];
  let length1 = arr1.length;
  let length2 = arr2.length;
  let lastEle1 = arr1[length1 - 1];
  let lastEle2 = arr2[length2 - 1];
  for (const key of iterator) {
    let value = arr1[key] + arr2[key];
    result.push(value);
  }
  if (length1 === length2) {
    console.log(result);
    return result;
  } else if (length1 > length2) {
    result.push(lastEle1);
    console.log(result);
    return result;
  } else if (length2 > length1) {
    result.push(lastEle2);
    console.log(result);
    return result;
  }
}
addElements([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);

// FIND DUPLICATE OF AN ARRAY
function find_duplicate_in_array(arr) {
  const frequency = {};
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    frequency[value] = frequency[value] || 0;
    frequency[value]++;

    if (frequency[value] === 2) {
      duplicates.push(value);
    }
  }
  console.log(frequency);
  console.log(duplicates);
}
find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);

// FLAT AN ARRAY IN JS
function flatten(params) {
  let result = params.flat(Infinity);
  console.log(result);
}
flatten([1, [2], [3, [[4]]], [5, 6]]);

// UNION OF TWO ARRAYS
function union_of_arrays(arr1, arr2) {
  let frequency = {};
  let join_and_sort = [];

  if (arr1 && arr2) {
    join_and_sort = arr1.concat(arr2).sort((a, b) => a - b);
  }

  for (let i = 0; i < join_and_sort.length; i++) {
    const value = join_and_sort[i];
    frequency[value] = frequency[value] || 0;
    frequency[value]++;
  }
  let result = Object.keys(frequency).map((i) => parseInt(i));
  return result;
}
union_of_arrays([1, 2, 3], [100, 2, 1, 10]);

// DIFFERENCE OF 2 ARRAYS
function difference_of_arrays(arr1, arr2) {
  // FLAT ARRAYS
  let flat_arr1 = arr1.flat(Infinity).sort((a, b) => a - b);
  let flat_arr2 = arr2.flat(Infinity).sort((a, b) => a - b);
  let length_arr1 = flat_arr1.length;
  let length_arr2 = flat_arr2.length;
  let copy = [];
  let result = [];
  if (length_arr1 < length_arr2) {
    copy = flat_arr2.splice(length_arr1);
  }
  if (length_arr1 > length_arr2) {
    copy = flat_arr1.splice(length_arr2);
  }
  const iterator = flat_arr1.keys();
  for (const key of iterator) {
    if (flat_arr1[key] !== flat_arr2[key]) {
      copy.push(flat_arr1[key]);
    }

    if (flat_arr2[key] !== flat_arr1[key]) {
      copy.push(flat_arr2[key]);
    }
  }
  result = copy.sort((a, b) => a - b);
  console.log(result);
  return result;
}

difference_of_arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]);
difference_of_arrays([1, 2, 3], [100, 2, 1, 10]);

// REMOVE NULL AND FALSE
function remove_undefined(params) {
  let result = [];
  result = params.filter(
    (i) =>
      i !== NaN &&
      i !== false &&
      i !== "" &&
      i !== undefined &&
      i !== null &&
      !isNaN(i)
  );
  console.log(result);
  return result;
}
remove_undefined([NaN, 0, 15, false, -22, "", undefined, 47, null]);
