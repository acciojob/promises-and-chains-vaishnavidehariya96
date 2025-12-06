// Get DOM elements
const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

// Listen for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const age = ageInput.value.trim();
  const name = nameInput.value.trim();

  // Validation: Check if inputs are empty
  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  // Create a promise to check age
  const checkAgePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handle promise resolution and rejection
  checkAgePromise
    .then((message) => alert(message))
    .catch((error) => alert(error));
});