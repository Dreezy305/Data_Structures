let first_card = getRandom();
let second_card = getRandom();
let cards = [first_card, second_card]; //cards array goes here
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = first_card + second_card;
let Message_El = document.getElementById("message-el");
let Sum_El = document.getElementById("sum-el");
// let Sum_El = document.querySelector(".sum-el");
console.log(Sum_El);
// document.Queryselectorall("")
let card_el = document.getElementById("card-el");
console.log(card_el);

// function that gets random card
function getRandom() {}

function Rendergame() {
  card_el.textContent = "cards: ";
  // renders first and second cards by default
  for (let i = 0; i < cards.length; i++) {
    card_el.textContent += " " + cards[i];
    console.log(card_el.textContent);
  }

  Sum_El.textContent = "Sum: " + sum;
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

function Startgame() {
  Rendergame();
}

function Newcard() {
  console.log("Drawing a new card from deck");
  let card = getRandom();
  cards.push(card);
  console.log(cards);
  sum += " " + card;
  Rendergame();
}
