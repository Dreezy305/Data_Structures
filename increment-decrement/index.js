let myPoints = 3;

// create two functions, add3points() and remove1point()
// have them add to / remove from myPoints variable.

function addToPoints() {
  myPoints += 3;
}

function removePoints() {
  myPoints -= 1;
}

addToPoints();
addToPoints();
addToPoints();
removePoints();
removePoints();
console.log(myPoints);
