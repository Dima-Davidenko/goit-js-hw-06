class Counter {
  #counterValue;
  static #BASES = [2, 10, 16];
  constructor(
    {
      rootSelector = "body",
      startValue = 0,
      step = 1,
      typeOfBaseSelect = "select",
    } = {
      rootSelector: "body",
      startValue: 0,
      step: 1,
      typeOfBaseSelect: "select",
    }
  ) {
    this.typeOfBaseSelect = typeOfBaseSelect;
    this.createBaseSelect();
    this.step = step;
    this.startValue = startValue;
    this.rootSelector = document.querySelector(rootSelector);
    this.display = this.rootSelector.querySelector("#value");

    this.makeBtns();

    this.setEventListener(this.incrBtn, this.incrementValue.bind(this));
    this.setEventListener(this.decrBtn, this.decrementValue.bind(this));

    this.setStartValue();
    // this.addBasesSelect();
  }

  createBaseSelect() {}

  makeBtns() {
    this.incrBtn = this.rootSelector.querySelector('[data-action="increment"]');
    this.incrBtn.textContent = "+" + this.step;
    this.decrBtn = this.rootSelector.querySelector('[data-action="decrement"]');
    this.decrBtn.textContent = "-" + this.step;
  }

  incrementValue() {
    this.#counterValue += this.step;
    this.setDisplay();
  }

  decrementValue() {
    this.#counterValue -= this.step;
    this.setDisplay();
  }

  setEventListener(button, callback) {
    button.addEventListener("click", callback);
  }

  setStartValue() {
    this.#counterValue = this.startValue;
    this.setDisplay();
  }

  setDisplay() {
    this.display.textContent = this.#counterValue.toString(10).toUpperCase();
  }

  // addBasesSelect() {
  //   const markup = ``
  //   this.rootSelector.append(select);
  // }
}

const newCounter = new Counter({
  rootSelector: "#counter",
  startValue: 0,
  step: 2,
  typeOfBaseSelect: "select",
});
console.log("~ newCounter", newCounter);
console.log(Object.getPrototypeOf(newCounter));
