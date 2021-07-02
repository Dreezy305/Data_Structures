const SaveInput = document.getElementById("input-btn");

const myLeads = [];
const InputEl = document.getElementById("input-el");
const ListEl = document.getElementById("list-el");

function renderLeads() {
  let ListItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    ListItems += "<li>" + myLeads[i] + "</li>";
  }
  ListEl.innerHTML = ListItems;
}

SaveInput.addEventListener("click", function () {
  console.log("button clicked");
  myLeads.push(InputEl.value);
  console.log(myLeads);
  renderLeads();
});
