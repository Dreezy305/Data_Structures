let num1 = 8;
let num2 = 2;
let result = document.getElementById("result-el");

document.getElementById("num1-el").textContent = num1;
console.log(num1);

document.getElementById("num2-el").textContent = num2;
console.log(num2);

function Sum() {
  sum_result = num1 + num2;
  if (sum_result) {
    result.textContent = sum_result;
  }
}

function Subtract() {
  sub_result = num1 - num2;
  if (sub_result) {
    result.textContent = sub_result;
  }
}

function Divide() {
  div_result = num1 / num2;
  if (div_result) {
    result.textContent = div_result;
  }
}

function Multiply() {
  prod_result = num1 * num2;
  if (prod_result) {
    result.textContent = prod_result;
  }
}
