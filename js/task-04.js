// Create counter
let counterValue = 0;
// Get elements
const display = document.querySelector("#value");
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');

// Add event listener
incBtn.addEventListener("click", incrementValue);
decBtn.addEventListener("click", decrementValue);

// Callback function handle click on increment button
function incrementValue() {
  counterValue += 1;
  display.textContent = counterValue;
}

// Callback function handle click on decrement button
function decrementValue() {
  counterValue -= 1;
  display.textContent = counterValue;
}
