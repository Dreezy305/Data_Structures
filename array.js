//counting in arrays

let messages = ["hey", "hello", "hi", "how", "hiyyah"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < messages.length; i++) {
  greetingEl.textContent += messages[i];
}
