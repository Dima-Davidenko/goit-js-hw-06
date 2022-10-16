function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Get elements
const controlsDiv = document.querySelector("#controls");
const input = controlsDiv.querySelector('input[type="number"]');
const createBtn = controlsDiv.querySelector("[data-create]");
const destroyBtn = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

// Add event listener
createBtn.addEventListener("click", newBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

// Callback function. Create boxes
function newBoxes() {
  // Read quantity of boxes
  const quantity = Number.parseInt(input.value);

  // Check is quantity in range 1-100
  if (Number.isNaN(quantity)) {
    alert("Please enter number of boxes");
    return;
  } else if (quantity <= 0 || quantity > 100) {
    alert("Quantity of boxes must be from 1 to 100");
    return;
  }
  createBoxes(quantity);
}

// Function creates ${amount} boxes and adds them in boxesDiv
function createBoxes(amount) {
  let markup = "";
  let size = 30;
  for (let i = 0; i <= amount; i += 1) {
    markup += `<div style="width: ${size}px; height: ${size}px; margin: 10px auto; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }
  boxesDiv.insertAdjacentHTML("afterbegin", markup);
}

// Function clear boxesDiv
function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
