const SaveInput = document.getElementById("input-btn");

const myLeads = ["lead.com", "lead1.com", "lead2.com", "lead3.com"];
const InputEl = document.getElementById("input-el");
const ListEl = document.getElementById("list-el");

SaveInput.addEventListener("click", function () {
  console.log("button clicked");
  myLeads.push(InputEl.value);
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
  const element = myLeads[i];
  ListEl.textContent = element;
  console.log(ListEl.textContent);
}
