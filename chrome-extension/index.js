const SaveInput = document.getElementById("input-btn");

const myLeads = [];
const InputEl = document.getElementById("input-el");

SaveInput.addEventListener("click", function () {
  console.log("button clicked from add event listener");
  myLeads.push("www.awesomeleads.com");
  console.log(myLeads);
});

// function display() {
//   if (SaveInput.addEventListener) {
//     InputEl.textContent = myLeads;
//   }
// }
