import React from 'react';
import './about.css';

export function About() {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  return (
    <main>
      <div className="about-us">
        <h1>About Us</h1>
      </div>
      <div className="about-info">
      <p>Buzz's Recipes is a site meant to make cooking more efficient and easier. Often we can spend more time looking for a recipe and deciding what to cook than we actually do cooking. Buzz's Recipe is here to help cut down that time. Features include:</p>
      <ul>
        <li>Browsing recipes by category</li>
        <li>Adding in your own favorite recipes</li>
        <li>Sharing recipes with your friends</li>
        <li>Saving recipes to your own account for easy access later</li>
      </ul>
      </div>
      <div id="quote">
        <p>"{quote}"</p>
        <p>{quoteAuthor}</p>
      </div>
      <p className="patience">*Please have patience as we continue to develop the site. We will slowly be rolling out all features and be making the interface more accessible. Please contact us with any questions.*</p>
    </main>
  );
}