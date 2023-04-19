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
	const  compareNumbers = (a, b) => {
  return a - b;
}
	const sorted = params.sort(compareNumbers)
	return sorted
}
sortArray([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ])


// CONVERT STRING
function convStr(params) {
	let res;
	const strArr = params.split("").forEach((item) => {
		let i = []
		if(/^[A-Z]*$/.test(item)) {
			const value = item.toLowerCase()
			i.push(value)
		} else if (/^[a-z]*$/.test(item)) {
			i.push(item.toUpperCase())
		}
		console.log(`${i.toString()}`)
		return i.toString()
	})
	
	console.log(strArr)
}
convStr("The Quick Brown Fox")


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

  return ""
}
mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])

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
	const length = params.length 
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
	return {sum: sumAllProduct, product: timesAllProduct}
}

sumAndProd([1,2,3,4,5,6])