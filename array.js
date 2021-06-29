let player1 = 102;
let player2 = 107;
let randomNum = Math.random() * 10;
console.log(randomNum);

function getTime() {
  if (player1 < player2) {
    return player1;
  } else if (player2 < player1) {
    return player2;
  } else {
    return player1;
  }
}
let fastTime = getTime();
console.log(fastTime);

function getTotalTime() {
  total = player1 + player2;
  return total;
}

let TotalTime = getTotalTime();
console.log(TotalTime);
