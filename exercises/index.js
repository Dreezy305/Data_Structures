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
