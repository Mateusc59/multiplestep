// Create an object to store the form data
const formData = {};

// Set the initial step
let currentStep = 1;

// Get the form element
const form = document.querySelector("form");
const container_step1 = document.querySelector(".container_step1");
const container_step2 = document.querySelector(".container_step2");
const container_step3 = document.querySelector(".container_step3");
const container_step4 = document.querySelector(".container_step4");
const container_step5 = document.querySelector(".container_step5");

let name = form.elements.name;


function calculateSum() {
  // Get all the checkbox elements
  let checkboxes = document.querySelectorAll("input[type=checkbox]");

  // Get the radio button element
  let radio = document.querySelector("input[type=radio]:checked");

  // Initialize the sum to 0
  let sum = 0;

  // Loop through all the checkboxes
  for (var i = 0; i < checkboxes.length; i++) {
    // Get the current checkbox
    let checkbox = checkboxes[i];
    console.log(checkboxes[i])
    // Check if the checkbox is checked
    if (checkbox.checked) {
      // Add the value of the checkbox to the sum
      sum += parseInt(checkbox.value);
      console.log(checkbox.value)
    }
  }
  // Check if the radio button is checked
  if (radio) {
    // Add the value of the radio button to the sum
    sum += parseInt(radio.value);
  }

  // Display the sum
console.log(sum)}




// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the default submit action
  event.preventDefault();

  // Get the form values
  const formValues = new FormData(form);

  // Store the form values in the formData object
  formValues.forEach((value, key) => {
    formData[key] = value;
  });



  // Go to the next step
  currentStep += 1;
  displayStep(currentStep);
});



// Define a function to display the current step
function displayStep(step) {
  // Update the page content to show the current step
  // ..
  // Use an if statement to show different content for each step
  if (step === 1) {
    // Show the first step
    // ...
    
    formData.append(input.name,input.email,input.radio,input.multiplayer,input.storage,input.arcade,input.value);

    console.log("step1");
  } else if (step === 2) {
    // Show the second step
    // ...
    container_step1.style.display = "none";
    container_step2.style.display = "block";

    console.log("step2");
  } else if (step === 3) {
    // Show the third step
    // ...
    console.log("step3");
    container_step2.style.display = "none";
    container_step3.style.display = "block";
    
  } else if (step === 4) {
    // Show the fourth step
    // ...
    container_step3.style.display = "none";
    container_step4.style.display = "block";

    console.log("step4");
  } else if (step === 5) {
    // Show the fourth step
    // ...
    container_step4.style.display = "none";
    container_step5.style.display = "block";

    console.log("step5");
    console.log(formData);
    calculateSum()
  }
}
