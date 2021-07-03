const SaveInput = document.getElementById("input-btn");

const myLeads = [];
const InputEl = document.getElementById("input-el");
let ListEl = document.getElementById("list-el");
const DeleteBtn = document.getElementById("delete-btn");

const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

console.log(LeadsFromLocalStorage);

if (LeadsFromLocalStorage) {
  myLeads = LeadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let ListItems = "";
  for (let i = 0; i < leads.length; i++) {
    // ListItems +=
    //   "<li><a href='" +
    //   myLeads[i] +
    //   "' target='_blank'>" +
    //   myLeads[i] +
    //   "</a></li>";
    ListItems += `
          <li>
              <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
          </li>`;

    console.log(ListItems);
  }
  ListEl.innerHTML = ListItems;
}

function clearInput() {
  document.getElementById("input-el").value = "";
}

DeleteBtn.addEventListener("dblclick", function () {
  console.log("double click");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

SaveInput.addEventListener("click", function () {
  console.log("button clicked");
  myLeads.push(InputEl.value);
  console.log(myLeads);
  render(myLeads);
  // clear out input field
  clearInput();
});
