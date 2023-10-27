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

    const addIngredientLink = document.getElementById("add-ingredient-link");

    // Select the container where you want to add the new step input fields
    const ingredientContainer = document.querySelector(".ingredients");

    // Add a click event listener to the "Add Step" link
    addIngredientLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the link from navigating

      const parentElement = document.getElementById("#ingredients");
      // Create a new input field for the step
      const newIngredientInput = document.createElement("input");
      newIngredientInput.type = "text";
      newIngredientInput.placeholder = "Ingredient ";
      newIngredientInput.className = "ingredient";


      // Append the new input field to the step container
      ingredientContainer.appendChild(newIngredientInput);
    });

  });

  function addRecipe() {

    const recipeData = {
        name: document.getElementById('recipe-name').value,
        // image: document.getElementById('recipe-image').value,
        prepTime: document.getElementById('prep-time').value,
        cookTime: document.getElementById('cook-time').value,
        amountMade: document.getElementById('amount-made').value,
        ingredients: [],
        directions: [],
    }
    const directionsInputs = document.querySelectorAll('.directions');
    const ingredientsInputs = document.querySelectorAll('.ingredient');

    directionsInputs.forEach((directionInput) => {
        recipeData.directions.push(directionInput.value);
    });

    ingredientsInputs.forEach((ingredientsInput) => {
        recipeData.ingredients.push(ingredientsInput.value);
    })

    // if (selectedImage) {
    //     console.log("Selected image: ", selectedImage);
    // }

    localStorage.setItem('recipe1', JSON.stringify(recipeData));
    console.log(localStorage.getItem('recipe1'));
  }