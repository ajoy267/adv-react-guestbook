import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

export default function LoginForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const history = useHistory();
  const location = useLocation();
  const [error, setError] = useState('');

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      name === process.env.REACT_APP_AUTH_USERNAME &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser(name);
      setName('');
      setPassword('');
      history.replace(from.pathname);
    } else {
      setError('Login unsuccesful, Please try again.');
    }
  };

  return (
    <main>
      <h4>Sign In</h4>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" aria-label="sign in">
          Sign In
        </button>
      </form>
      {error && <h5>{error}</h5>}
    </main>
  );
}
