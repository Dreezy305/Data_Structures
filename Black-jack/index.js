let first_card = 10;
let second_card = 11;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = first_card + second_card;
let Message_El = document.getElementById("message-el");
let Sum_El = document.getElementById("sum-el");
console.log(Sum_El);

function Startgame() {
  Sum_El.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
    Message_El.textContent = message;

    console.log(Sum_El);
    console.log(message);
    isAlive = true;
  } else if (sum === 21) {
    message = "You have the blackjack ";
    Message_El.textContent = message;
    console.log(message);
    hasBlackJack = true;
  } else {
    message = "You are out of the game ";
    Message_El.textContent = message;
    console.log(message);
    isAlive = false;
  }
}
