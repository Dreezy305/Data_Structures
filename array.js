let personObject = {
  Name: "idris",
  age: 20,
  country: "germany",
};

let large_countries = ["tuvalu", "india", "usa", "indonesia", "monaco"];
large_countries.pop(4);
large_countries.push("pakistan");
large_countries.shift();
large_countries.unshift("china");
console.log(large_countries);

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
    countries = large_countries[i];

    console.log("--> " + countries);
  }
}
showNations();
logData();
