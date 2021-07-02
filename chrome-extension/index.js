const SaveInput = document.getElementById("input-btn");

const myLeads = [];
const InputEl = document.getElementById("input-el");
const ListEl = document.getElementById("list-el");

function renderLeads() {
  let ListItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    ListItems += "<li>" + myLeads[i] + "</li>";
    // ListEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    // create element
    // set text content
    // append to unordered list
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ListEl.append(li);
    // console.log(ListEl.textContent);
  }

  ListEl.innerHTML = ListItems;
}

SaveInput.addEventListener("click", function () {
  console.log("button clicked");
  myLeads.push(InputEl.value);
  console.log(myLeads);
  renderLeads();
});
