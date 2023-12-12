import React from 'react';
import './addrecipe.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
    name: '',
    prepTime: '',
    cookTime: '',
    amountMade: '',
    ingredients: [''], // Initialize with one empty ingredient
    directions: [''], // Initialize with one empty direction
  });
  console.log(recipeData.ingredients);
  const addIngredient = () => {
    setRecipeData((prevData) => ({
      ...prevData,
      ingredients: [...prevData.ingredients, ''],
    }));
  };

  const addDirection = () => {
    setRecipeData((prevData) => ({
      ...prevData, directions: [...prevData.directions, ''],
    }));
  };

  const handleIngredientChange = (index, value) => {
    setRecipeData((prevData) => {
      const newIngredients = [...prevData.ingredients];
      newIngredients[index] = value;
      return { ...prevData, ingredients: newIngredients };
    })
  };

  const handleDirectionChange = (index, value) => {
    setRecipeData((prevData) => {
      const newDirections = [...prevData.directions];
      newDirections[index] = value;
      return {...prevData, directions: newDirections};
    })
  };

  const addRecipe = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(recipeData),
      });

      // Handle the response as needed
      const recipes = await response.json();
      localStorage.setItem('recipes', JSON.stringify(recipes));

    } catch (error) {
      console.error('Error adding recipe:', error);
      updateRecipesLocal(recipeData)
    }
  };


  function updateRecipesLocal(recipeData){
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(recipeData);

    localStorage.setItem('recipes', JSON.stringify(recipes));
  }


  return (
    <main>
    <NavLink className="top-left" to="myaccount.html"><span>&#x2190;</span> Go Back</NavLink>
    <h2>Add your favorite recipes to share with all!</h2>
    <div className="add-recipe">
      <form onSubmit={addRecipe} action="../myaccount">
        <div className="recipeForm">
          {/* <!-- <form action="/action_page.php">
            <label for="recipeType">Choose a car:</label>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </form> --> */}
          <input type="text" id="recipe-name" placeholder="Recipe Name" />
          {/* <!-- <div class="imageUpload">
            <form id="image-load" action="upload.php" method="post" enctype="multipart/form-data">
              <label for="image-upload">Choose an image:</label>
              <input type="file" id="image-upload" name="image">
              <input type="submit" value="Upload">
          </form>
          </div> --> */}
          <input type="text" id="prep-time" placeholder="Preparation Time" />
          <input type="text" id="cook-time" placeholder="Cooking Time" />
          <input type="text" id="amount-made" placeholder="Servings Made" />
          <div className="ingredients">
            {recipeData.ingredients.map((ingredient, index) => (
              <input key={index} type='text' className='ingredient' value={ingredient} onChange={(e) => handleIngredientChange(index, e.target.value)} placeholder='Ingredient'/>
            ))}
          </div>
              <a href="#" id="add-ingredient-link" onClick={addIngredient} className="add-step">+ Add Ingredient</a>
          <input type="text" className="directions" placeholder="Step 1" />
          <input type="text" className="directions" placeholder="Step 2" />
          <input type="text" className="directions" placeholder="Step 3" />
        </div>
          <a href="#" id="add-step-link" className="add-step">+ Add Step</a>
          <div className="side-by-side">
              <NavLink className="button" onClick='addRecipe' to='../myaccount' type="submit">Create</NavLink>
          </div>
      </form>
    </div>

  </main>
  );
}