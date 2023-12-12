import React from 'react';
import './addrecipe.css'

export function AddRecipe() {
  return (
    <main>
    <a className="top-left" href="myaccount.html"><su>&#x2190</su> Go Back</a>
    <h2>Add your favorite recipes to share with all!</h2>
    <div className="add-recipe">
      <form method="get" action="myaccount.html">
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
            <input type="text" class="ingredient" placeholder="Ingredients" />
          </div>
              <a href="#" id="add-ingredient-link" class="add-step">+ Add Ingredient</a>
          <input type="text" class="directions" placeholder="Step 1" />
          <input type="text" class="directions" placeholder="Step 2" />
          <input type="text" class="directions" placeholder="Step 3" />
        </div>
          <a href="#" id="add-step-link" class="add-step">+ Add Step</a>
          <div className="side-by-side">
              <button className="button" onclick='addRecipe()' type="submit">Create</button>
          </div>
      </form>
    </div>

  </main>
  );
}