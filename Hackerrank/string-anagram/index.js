function makeAnagram(a, b) {
  let resultA = [];
  let resultB = [];
  let final = [];
  let output = 0;
  // Split strings
  var splitA = a.split("");
  var splitB = b.split("");
  console.log(splitA, splitB);
  // Check for length
  var lengthA = a.length;
  var lengthB = b.length;
  // case of equal lengths
  if (lengthA === lengthB) {
    for (let i = 0; i < lengthA; i++) {
      for (let j = 0; j < lengthB; j++) {
        if (splitA[i] === splitB[j]) {
          delete splitA[i];
          delete splitB[j];
        }
      }
    }
  }

  if (lengthA > lengthB) {
    for (let i = 0; i < lengthA; i++) {
      for (let j = 0; j < lengthB; j++) {
        if (splitA[i] === splitB[j]) {
          delete splitA[i];
          delete splitB[j];
        }
      }
    }
  }

  if (lengthA < lengthB) {
    for (let i = 0; i < lengthB; i++) {
      for (let j = 0; j < lengthB; j++) {
        if (splitA[i] === splitB[j]) {
          delete splitA[i];
          delete splitB[j];
        }
      }
    }
  }
  resultA = splitA.filter((item) => item !== undefined && item !== null);
  resultB = splitB.filter((item) => item !== undefined && item !== null);
  final = [...resultA, ...resultB];
  output = final.length;
  return output;
}

makeAnagram("cde", "abc");

