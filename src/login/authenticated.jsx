import React from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/login`, {
      method: 'delete',
    }).then(() => props.onLogout());
    localStorage.removeItem('userName');
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <button className='btn-primary' onClick={() => navigate('/play')}>
        Play
      </button>
      <button className='btn-secondary' onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}