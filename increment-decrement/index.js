const error_message = document.getElementById("error");

function ErrorMessage() {
  message = "Something went wrong";
  if (message) {
    error_message.textContent = message;
  }
}

function RemoveMessage() {
  remove_message = "";
  if (message) {
    error_message.textContent = remove_message;
  }
}
