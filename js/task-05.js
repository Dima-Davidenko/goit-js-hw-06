// Get elements
const input = document.querySelector("#name-input");
const display = document.querySelector("#name-output");

// Add event listener
input.addEventListener("input", updateDisplay);

// Callback function to change display accordingly to input value
function updateDisplay(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue != "") {
    display.textContent = inputValue;
  } else {
    display.textContent = "Anonymous";
  }
}
