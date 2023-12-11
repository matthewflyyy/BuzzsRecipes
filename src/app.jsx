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
                    <NavLink className='dropbtn' to='recipes'>Recipes</NavLink>
                    <div id="myDropdown" className="dropdown-content">
                        <NavLink to='recipes'>All</NavLink>
                        <NavLink to='breakfast'>Breakfast</NavLink>
                        <NavLink to='lunch'>Lunch</NavLink>
                        <NavLink to='dinner'>Dinner</NavLink>
                    </div>
                </div>
            </li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink id='logInBtn' to='login'>Log In</NavLink></li>
            <li><NavLink id='myaccount' to='myaccount'>My Account</NavLink></li>
            <li><NavLink id='signOut' to='login' onClick='logout'>Sign Out</NavLink></li>  
            </menu>
        </nav>
        </header>

        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/login' element={<Login />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/about' element={<About />} />
            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/addrecipe' element={<AddRecipe />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

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

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }