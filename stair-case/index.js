function staircase(n) {
  const arr = Array(n);
  const iterator = arr.keys();
  let hash = "#";
  let text;
  let strn = " ";
  for (const key of iterator) {
    text = hash.repeat(key + 1);
    const x = strn.repeat(n - (key + 1));
    console.log(x + text);
  }
}

staircase(6);
staircase(8);
staircase(18);
staircase(25);
