// Get elements
const form = document.querySelector(".login-form");

// Set event listener
form.addEventListener("submit", formProcessing);

// Callback to handle submit form event
function formProcessing(event) {
  // Destructuring variable names out of form object
  const {
    elements: {
      email: { name: emailName, value: emailValue },
      password: { name: pwdName, value: pwdValue },
    },
  } = event.currentTarget;

  // Prevent default action (page reloading)
  event.preventDefault();

  // Check that all form fields are filled out
  if (emailValue === "" || pwdValue === "") {
    // If not - display a message
    alert("Please note that all fields in the form must be completed.");
  } else {
    // If true - create an object with the appropriate properties and values
    const formValues = {
      [emailName]: emailValue,
      [pwdName]: pwdValue,
    };
    console.log(formValues);

    // Clear form fields
    event.currentTarget.reset;
  }
}
