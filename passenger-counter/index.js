let count_El = document.getElementById("counter");
console.log(count_El);

let save_El = document.getElementById("save-el");
console.log(save_El);

let count = 0;
function increment() {
  count += 1;
  count_El.innerHTML = count;
  console.log("button was clicked : ", count, " time(s)");
}

//create a function for save button
function save() {
  // create a variable that contains both count and dash separator
  // render the variable in the save-el using the inner text
  // make sure to not delete the existing content of the paragraph
  let dash = " - ";
  let count_dash = count + dash;
  save_El.innerHTML = "Previous enteries: " + count_dash;
  console.log(count);
}
save();

//render a welcome message
