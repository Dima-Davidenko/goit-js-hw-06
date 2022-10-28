function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Get elements
const body = document.querySelector("body");
const display = document.querySelector(".color");
const button = document.querySelector(".change-color");

// Set event listener
button.addEventListener("click", changeBodyColor);

// Callback function. Change body color
function changeBodyColor() {
  // Get new color
  const newColor = getRandomHexColor();

  // Change body color
  body.style.backgroundColor = newColor;

  // Output current body color
  display.textContent = newColor;
}
