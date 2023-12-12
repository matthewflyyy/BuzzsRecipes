import React from 'react';
import './myaccount.css'

export function MyAccount({ userName }) {
  return (
    <main>
      <a className="top-right" to="./addrecipe">Add Recipe</a>
      <h1 className="user-name">{userName}</h1>
      <p>*Brooklynn just sent you a recipe*</p>
      <h3>Saved Recipes</h3>
      <br/>
        <div className="recipe">
        <h3> Venezuelan arepas </h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Arepa_de_pabellon.jpg/440px-Arepa_de_pabellon.jpg" alt="Arepa with meat" width="200" />
        <table>
          <thead>
            <tr>
                <th>Prep Time</th>
                <th>Cook Time</th>
                <th>Amount Made</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>10 min</td>
                <td>10 min</td>
                <td>6 arepas (2-3 servings)</td>
            </tr>
            </tbody>
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
    </main>
  );
}