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
      newStepInput.placeholder = "Step " + (stepContainer.querySelectorAll('.directions').length + 1);
      newStepInput.className = "directions";


      // Append the new input field to the step container
      stepContainer.appendChild(newStepInput);
    });
  });

  function addRecipe() {
    const recipeData = {
        name: document.getElementById('recipe-name').value,
        prepTime: document.getElementById('prep-time').value,
        cookTime: document.getElementById('cook-time').value,
        ingedrients: document.getElementById('ingredients').value,
        directions: [],
    }
    const directionsInputs = document.querySelectorAll('.directions');

    directionsInputs.forEach((directionInput) => {
        recipeData.directions.push(directionInput.value);
    });

    localStorage.setItem('recipe1', JSON.stringify(recipeData));
    console.log(localStorage.getItem('recipe1'));
  }