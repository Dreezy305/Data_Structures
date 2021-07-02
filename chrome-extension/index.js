const SaveInput = document.getElementById("input-btn");

const myLeads = ["a", "b", "c", "d"];
const InputEl = document.getElementById("input-el");
const ListEl = document.getElementById("list-el");

SaveInput.addEventListener("click", function () {
  console.log("button clicked");
  myLeads.push(InputEl.value);
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
  // ListEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  // create element
  // set text content
  // append to unordered list
  console.log(ListEl.textContent);
}
