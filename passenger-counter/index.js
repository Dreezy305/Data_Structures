let count_El = document.getElementById("counter");
console.log(count_El);

let save_El = document.getElementById("save-el");
console.log(save_El);

let count = 0;
function increment() {
  count += 1;
  count_El.textContent = count;
  console.log("button was clicked : ", count, " time(s)");
}

//create a function for save button
function save() {
  let dash = " - ";
  let count_dash = count + dash;
  save_El.textContent += count_dash;
  if (save_El.textContent) {
    count_El.textContent = 0;
    count = 0;
  }
  console.log(count);
}
save();

//render a welcome message
