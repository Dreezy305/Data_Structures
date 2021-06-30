let personObject = {
  Name: "idris",
  age: 20,
  country: "germany",
};

let large_countries = ["china", "india", "usa", "indonesia", "pakistan"];

function logData() {
  person_info =
    personObject.Name +
    " is " +
    personObject.age +
    " old " +
    "and lives in " +
    personObject.country;

  console.log(person_info);
}

function showNations() {
  for (let i = 0; i < large_countries.length; i++) {
    console.log("--> " + large_countries[i]);
  }
}
showNations();
logData();
