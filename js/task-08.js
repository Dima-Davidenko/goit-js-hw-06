// Get gorm
const form = document.querySelector(".login-form");

// Set event listener
form.addEventListener("submit", formProcessing);

// Callback to handle submit form event
function formProcessing(event) {
  // Prevent default action (page reloading)
  event.preventDefault();

  // Destructuring elements array out of form object
  const { elements } = event.currentTarget;

  // Get input's names
  const inputsNames = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].name) inputsNames.push(elements[i].name);
  }

  //Check if the field is empty and create output object
  const formValues = {};
  for (const inputName of inputsNames) {
    if (elements[inputName].value === "") {
      alert("Please note that all fields in the form must be completed.");
      return;
    }
    formValues[inputName] = elements[inputName].value;
  }

  console.log(formValues);

  // Clear form fields
  event.currentTarget.reset();
}
