import React from 'react';

export function Recipes() {
  return (
    <main>
    <div class="players">
      <div id="player-messages">
        <div class="event"><span class="player-event">Talmage</span> posted a recipe: "Breakfast Omelette"</div>
        <div class="event"><span class="player-event">Tim</span> posted a recipe: "Arepas"</div>
      </div>
    </div>
    <h1>All Recipes</h1>
    <div id="recipe-container">
    <p>
      <div class="recipe">
      <h3> Venezuelan arepas </h3>
      {/* <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Arepa_de_pabellon.jpg/440px-Arepa_de_pabellon.jpg" alt="Arepa with meat" width="200"> --> */}
      <table>
          <tr>
              <th>Prep Time</th>
              <th>Cook Time</th>
              <th>Amount Made</th>
          </tr>
          <tr>
              <td>10 min</td>
              <td>10 min</td>
              <td>6 arepas (2-3 servings)</td>
          </tr>
      </table>
      <h4> Ingedrients </h4>
          <ul>
              <li>1 1/4 cups masa harina de maíz</li>
              <li>1 cup lukewarm water</li>
              <li>A pinch of salt</li>
          </ul>
      <h4> Preparation and cooking instructions </h4>
          <ol>
              <li>Put water in a large bowl with the salt and stir to dissolve the salt.</li>
              <li>Put half of the harina de maíz (1/2 cup) in the bowl and mix.</li>
              <li>Put the rest of the harina de maíz in the bowl and mix completely <br />Note: dough should be malleable</li>
              <li>Let sit for 5 minutes</li>
              <li>Roll dough into  6 evenly sized balls</li>
              <li>Flatten the balls to about the size of an english muffin</li>
              <li>Preheat griddle to medium-high heat with a thin layer of cooking oil.</li>
              <li>Cook arepas for 5 minutes on each side, reducing heat to medium once flipped.</li>
              <li>Cut halfway open and enjoy with your favorite fillings!</li>
          </ol>
      </div>
    </p>


    <p>
      <div class="recipe">
      <h3> Breakfast Omelette </h3>
      {/* <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Omelet_With_Fixings.jpg/440px-Omelet_With_Fixings.jpg" alt="Omelette" width="200"> --> */}
      <table>
          <tr>
              <th>Prep Time</th>
              <th>Cook Time</th>
              <th>Amount Made</th>
          </tr>
          <tr>
              <td>5 min</td>
              <td>5 min</td>
              <td>1 omelette (1 serving)</td>
          </tr>
      </table>
      <h4> Ingedrients </h4>
          <ul>
              <li>2 medium to large eggs</li>
              <li>1 small bell pepper</li>
              <li>1/8 onion</li>
              <li>3 leaves spinach</li>
              <li>Half handful of cheese</li>
          </ul>
      <h4> Preparation and cooking instructions </h4>
          <ol>
              <li>Dice the vegetables and place in small bowl with cheese.</li>
              <li>Whisk eggs in a small bowl.</li>
              <li>Lightly grease small pan and place on stove at medium heat</li>
              <li>Pour eggs into pan</li>
              <li>Wait a minute or so and evenly placec vegetables and cheese over egges</li>
              <li>Once egg is drying up, flip.</li>
              <li>Let sit for 20-30 seconds and remove from eat.</li>
              <li>Add salt, peper, salsa or anything else you like and enjoy!</li>
          </ol>
      </div>
    </p>
    </div>
  </main>
  );
}