let counterValue = 0;

const display = document.querySelector("#value");
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');

incBtn.addEventListener("click", incrementValue);
decBtn.addEventListener("click", decrementValue);

function incrementValue() {
  counterValue += 1;
  showCounter();
}

function decrementValue() {
  counterValue -= 1;
  showCounter();
}

function showCounter() {
  display.textContent = counterValue;
}
