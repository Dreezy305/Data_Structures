function RepeatedString(n, s) {
  let char1 = s.repeat(n);
  console.log(char1);
  let char2 = char1.substring(0, n);
  console.log(char2);
  console.log(char2.length);
  let char3 = char2.match(new RegExp("a", "g")).length;
  console.log(char3);
}

console.log(RepeatedString(10, "abcac"));
console.log(RepeatedString(10, "aba"));
console.log(RepeatedString(10, "a"));
