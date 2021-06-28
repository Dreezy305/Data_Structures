const error_message = document.getElementById("error");
console.log(error_message);

function ErrorMessage() {
  message = "Something went wrong";
  if (message) {
    error_message.textContent = message;
  }
}

function RemoveMessage() {
  remove_message = "";
  error_message.textContent = remove_message;
}
