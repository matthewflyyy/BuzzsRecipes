import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  console.log(localStorage.getItem(userName));

  return (
    <main>
      <div id="logInContent" className="login-box">
            <div className="welcome">
              {authState !== AuthState.Unknown && <h1>Welcome Back!</h1>}
              {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />)}
              {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                  userName={userName}
                  onLogin={(loginUserName) => {
                    onAuthChange(loginUserName, AuthState.Authenticated);
                }}/>)}
            </div>
            <div className="explanation">Login to save and share recipes!</div>
        </div>
        </main> 
  );
}