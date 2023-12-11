import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { Recipes } from './recipes/recipes';
import { About } from './about/about';
import { AddRecipe } from './addrecipe/addrecipe';
import { MyAccount } from './myaccount/myaccount';
import './app.css';


export default function App() {
  return (
    <BrowserRouter>
        <div className='body'>
        <header>
        <h1>Buzz's Recipes<sup>&reg;</sup></h1>

        <nav>
            <menu>

            <li><a href="index.html">Home</a></li>
            <li>
                <div id="recipeLink" className="dropdown">
                    <a className="dropbtn" href="recipes.html">Recipes</a>
                    <div id="myDropdown" className="dropdown-content">
                    <a href="recipes.html">All</a>
                    <a href="breakfast.html">Breakfast</a>
                    <a href="lunch.html">Lunch</a>
                    <a href="dinner.html">Dinner</a>
                    </div>
                </div>
            </li>
            <li><a href="about.html">About</a></li>
            <li><a id="logInBtn" href="login.html">Log In</a></li>
            <li><a id="myaccount" href="myaccount.html">My Account</a></li>
            <li><a id="signOut" href="login.html" onClick="logout()">Sign Out</a></li>
            
            </menu>
        </nav>
        </header>

        <main>
        <h1>Recipes</h1>
        <Home />
        <Login />
        <Recipes />
        <About />
        <MyAccount />
        <AddRecipe />
        </main>

        <footer>
        <p>Matthew Nelson</p>
        <br />
        <a href="websocket.html">Web Socket</a>
        <a className="github" href="https://github.com/matthewflyyy/cs260Fall2023">GitHub</a>
        </footer>
        <script src="home.js"></script>
    </div>
    </BrowserRouter>
  );
}