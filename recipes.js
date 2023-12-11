

function addRecipeToPage(recipeData){
    const newRecipeHTML = `
        <p>
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
                ${recipeData.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
            </ul>
        <h4> Preparation and cooking instructions </h4>
            <ol>
                ${recipeData.directions.map((step) => `<li>${step}</li>`).join('')}
            </ol>
        </div>
        </p>
    `;

    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML += newRecipeHTML;
}


document.addEventListener("DOMContentLoaded", function() {
    async function loadRecipes() {
        let recipeList = []
        try{
            const response = await fetch('/api/recipes');
            recipeList = await response.json();

            localStorage.setItem('recipes', JSON.stringify(recipeList));
        } catch {
            recipeList = JSON.parse(localStorage.getItem('recipes'));
        }
        if (recipeList){
            recipeList.forEach((recipeData) => {
                addRecipeToPage(recipeData);
            })
        }
        
    }
    loadRecipes();
    
    

});
// Add the recipes to a list in the local storage to have access to all of them



// ${recipeData.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
// This line is for ingredients once I make it into a list rather than a single element


// setInterval(() => {
//     const score = Math.floor(Math.random() * 3000);
//     const chatText = document.querySelector('#player-messages');
//     chatText.innerHTML =
//       `<div class="event"><span class="player-event">Brooklynn</span> posted a recipe: " "` + chatText.innerHTML;
//   }, 5000);
