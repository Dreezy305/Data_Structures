let personObject = {
  Name: "idris",
  age: 20,
  country: "germany",
};

let large_countries = ["tuvalu", "india", "usa", "indonesia", "monaco"];
large_countries.pop(4);
large_countries.push("pakistan");
large_countries.shift();
large_countries.unshift("china");
console.log(large_countries);

let hands = ["rock", "paper", "scissors"];

function logData() {
  person_info =
    personObject.Name +
    " is " +
    personObject.age +
    " old " +
    "and lives in " +
    personObject.country;

  console.log(person_info);
}

function showNations() {
  for (let i = 0; i < large_countries.length; i++) {
    countries = large_countries[i];

    console.log("--> " + countries);
  }
}

function randomHands(min, max) {
  let random_handIndex = Math.floor(Math.random() * 3);
  return hands[random_handIndex];
}

console.log(randomHands());
showNations();
logData();

let fruit = ["apple", "orange", "apple", "apple", "orange"];

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruits() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "apple") {
      appleShelf.textContent += " " + fruit[i];
      console.log(appleShelf);
    } else {
      orangeShelf.textContent += " " + fruit[i];
      console.log(orangeShelf);
    }
  }
}
sortFruits();

// writing eventlisteners
