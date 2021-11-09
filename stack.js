// stack elements on top of each other
// push, pop, peek, length

// stack itself
var letters = [];

// the word
var word = "freecodecamp";

// reverse word
var rword = "";

// put letters of words in a stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}

console.log(word);
