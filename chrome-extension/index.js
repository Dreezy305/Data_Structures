const SaveInput = document.getElementById("input-btn");

const myLeads = [];
const InputEl = document.getElementById("input-el");

SaveInput.addEventListener("click", function () {
  console.log("button clicked");
  myLeads.push(InputEl.value);
  console.log(myLeads);
});
