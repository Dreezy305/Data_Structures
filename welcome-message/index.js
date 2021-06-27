//store the welcome-el and store it in a variable
let WelcomeEl = document.getElementById("welcome-el");

let MyName = "Idris";
let greeting = "welcome back, How was your trip";

WelcomeEl.innerHTML = greeting + "" + MyName;

WelcomeEl.innerHTML = WelcomeEl.innerHTML + "you";
