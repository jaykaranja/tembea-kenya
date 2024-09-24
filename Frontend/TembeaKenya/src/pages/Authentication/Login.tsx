// LoginPage.js

import React, { useState } from 'react';
import { login, isAuthenticated } from '../../utils/authentication/auth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = login(username, password);
    if (user) {
      localStorage.setItem('authUser', JSON.stringify(user));
      window.location.href = '/dashboard'; // Redirect to another page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
