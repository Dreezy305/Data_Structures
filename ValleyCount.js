function ValleyCount(n, steps) {
  n = 0;
  steps = "";
  let step = steps.split(",");
  console.log(step);
  let currentSeaLevel = 0;
  let valleyCount = 0;
  let valley = false;

  step.forEach((i) => {
    i === "U" ? currentSeaLevel++ : currentSeaLevel--;
    if (currentSeaLevel < 0 && !valley) {
      valleyCount++;
      valley = true;
    } else if (currentSeaLevel >= 0 && valley) {
      valley = false;
    }
  });
  return valleyCount;
}

console.log(ValleyCount(8, "U,D,D,D,U,D,U,U"));
console.log(ValleyCount(12, "D,D,U,U,D,D,U,D,U,U,U,D"));
