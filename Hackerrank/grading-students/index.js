function gradingStudents(grades) {
  let convResult = [];
  const iterator = grades.keys();

  for (const key of iterator) {
    let add = 5 - (grades[key] % 5);

    if (grades[key] < 38) {
      convResult.push(grades[key]);
    }

    if (add < 3 && grades[key] >= 38) {
      let res = grades[key] + add;
      convResult.push(res);
    }
    if (add >= 3 && grades[key] >= 38) {
      convResult.push(grades[key]);
    }
  }
  console.log(convResult);
  return convResult;
}

gradingStudents([73, 67, 38, 33]);
gradingStudents([37, 38]);
