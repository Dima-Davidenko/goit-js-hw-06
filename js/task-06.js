// Get element
const input = document.querySelector("#validation-input");

// Add event listener
input.addEventListener("blur", checkInputValue);

// Callback to handle event 'blur' on input
function checkInputValue(event) {
  const inputValue = event.currentTarget.value;
  const valueLength = event.currentTarget.dataset.length;
  if (inputValue.length !== +valueLength) {
    setInvalidClass(event.currentTarget);
  } else {
    setValidClass(event.currentTarget);
  }
}

function setInvalidClass(node) {
  node.classList.remove("valid");
  node.classList.add("invalid");
}

function setValidClass(node) {
  node.classList.remove("invalid");
  node.classList.add("valid");
}
