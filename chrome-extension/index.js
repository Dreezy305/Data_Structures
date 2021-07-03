const SaveInput = document.getElementById("input-btn");

const myLeads = [];
const InputEl = document.getElementById("input-el");
let ListEl = document.getElementById("list-el");
const DeleteBtn = document.getElementById("delete-btn");

// const LeadsFromLocalStorage = JSON.parse(localStorage.setItem("myLeads"));
// console.log(LeadsFromLocalStorage);

function renderLeads() {
  let ListItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // ListItems +=
    //   "<li><a href='" +
    //   myLeads[i] +
    //   "' target='_blank'>" +
    //   myLeads[i] +
    //   "</a></li>";
    ListItems += `
          <li>
              <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
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
  renderLeads();
});

SaveInput.addEventListener("click", function () {
  console.log("button clicked");
  myLeads.push(InputEl.value);
  console.log(myLeads);
  renderLeads();
  // clear out input field
  clearInput();
});

function deleteLeads() {}
