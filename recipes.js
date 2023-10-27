

function addRecipeToPage(recipeData){
    const newRecipeHTML = `
        <div class="recipe">
        <h3>${recipeData.name}</h3>
        <!-- <img src="${recipeData.image}" alt="${recipeData.name}" width="200"> -->
        <table>
            <tr>
                <th>Prep Time</th>
                <th>Cook Time</th>
                <th>Amount Made</th>
            </tr>
            <tr>
                <td>${recipeData.prepTime}</td>
                <td>${recipeData.cookTime}</td>
                <td>${recipeData.amountMade}</td>
            </tr>
        </table>
        <h4> Ingedrients </h4>
            <ul>
                <li>${recipeData.ingredients}</li>
            </ul>
        <h4> Preparation and cooking instructions </h4>
            <ol>
                ${recipeData.directions.map((step) => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;

    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML += newRecipeHTML;
}

const recipeData = JSON.parse(localStorage.getItem('recipe1'));
document.addEventListener("DOMContentLoaded", function() {
    if (recipeData){
        addRecipeToPage(recipeData);
    }
});
// Add the recipes to a list in the local storage to have access to all of them

// ${recipeData.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
// This line is for ingredients once I make it into a list rather than a single element
