document.addEventListener("DOMContentLoaded", function() {
    // Select the "Add Step" link by its ID
    const addStepLink = document.getElementById("add-step-link");

    // Select the container where you want to add the new step input fields
    const stepContainer = document.querySelector(".recipeForm");

    // Add a click event listener to the "Add Step" link
    addStepLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the link from navigating

      const parentElement = document.getElementById("#recipeForm");
      // Create a new input field for the step
      const newStepInput = document.createElement("input");
      newStepInput.type = "text";
    //   newStepInput.class = "directions";
      newStepInput.placeholder = "Step " + (stepContainer.querySelectorAll('.directions').length + 1);

      // Append the new input field to the step container
      stepContainer.appendChild(newStepInput);
    });
  });
