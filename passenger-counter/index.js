let count_El = document.getElementById("counter");
console.log(count_El);
let count = 0;
function increment() {
  count = count + 1;
  count_El.innerHTML = count;
  console.log("button was clicked : ", count, " time(s)");
}

//create a function for save button
function save() {
  console.log(count);
}

save();
