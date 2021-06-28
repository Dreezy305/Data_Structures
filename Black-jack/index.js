let first_card = 10;
let second_card = 11;
let hasBlackJack = false;
let isAlive = true;

let sum = first_card + second_card;

if (sum <= 20) {
  console.log("Do you want to draw a new card? ");
  isAlive = true;
} else if (sum === 21) {
  console.log("You are out of the game");
  hasBlackJack = true;
} else {
  console.log("You are out of the game");
  isAlive = false;
}
