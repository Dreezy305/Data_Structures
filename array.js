let player1 = 102;
let player2 = 107;

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
