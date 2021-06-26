// initialise the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html and reflect the new count
// define event listener inside the html

let count_El = document.getElementById("counter");
console.log(count_El);

let count = 0;
function increment() {
  count = count + 1;
  count_El.innerHTML = count;
  console.log("button was clicked : ", count, " time(s)");
}
