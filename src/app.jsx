import React from 'react';
import { Home } from './home/home';
import { Login } from './login/login';
import { Recipes } from './recipes/recipes';
import { About } from './about/about';
import { AddRecipe } from './addrecipe/addrecipe';
import { MyAccount } from './myaccount/myaccount';

export default function App() {
  return (
    <div>
      <h1>Recipes Page</h1>
      <Home />
      <Login />
      <Recipes />
      <About />
      <AddRecipe />
      <MyAccount />
    </div>
  );
}