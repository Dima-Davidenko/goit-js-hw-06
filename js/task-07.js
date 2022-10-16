// Get elements
const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

// Add event listener
input.addEventListener("input", fontSizeChange);

// Callback to handle input change
function fontSizeChange(event) {
  const inputValue = event.currentTarget.value;
  span.style.fontSize = inputValue + "px";
}
