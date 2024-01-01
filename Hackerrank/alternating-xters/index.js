function alternatingCharacters(s) {
  let result = 0;

  if (s.length >= 1) {
    //   split the string to an array
    let arr = s.split("");
    let prev = arr[0];

    arr = arr.filter((item, key) => {
      if (item !== prev && key !== 0) {
        prev = item;
        return item;
      }
    });
    result = s.length - [s.charAt(0), ...arr].length;
  }
  console.log(result);
  return result;
}

alternatingCharacters("AAAA");
alternatingCharacters("BBBBB");
alternatingCharacters("ABABABAB");
