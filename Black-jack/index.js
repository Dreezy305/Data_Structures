let first_card = 10;
let second_card = 11;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = first_card + second_card;

function Startgame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
    console.log(message);
    isAlive = true;
  } else if (sum === 21) {
    message = "You have the blackjack ";
    console.log(message);
    hasBlackJack = true;
  } else {
    message = "You are out of the game ";
    console.log(message);
    isAlive = false;
  }
}
