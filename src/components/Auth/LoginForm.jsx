import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

export default function LoginForm() {
  const [error, setError] = useState('');
  const user = useUser();
  const history = useHistory();
  const location = useLocation();
  const { formState, handleFormChange } = useForm({ username: '', password: '' });
  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginWasSuccessful = user.login(formState.username, formState.password);

    {
      loginWasSuccessful
        ? history.replace(from.pathname)
        : setError('Login was unsuccessful, Please try again');
    }
  };
  return (
    <main>
      <h4>Sign In</h4>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input id="username" name="username" type="username" onChange={handleFormChange} />
        </label>
        <label>
          Password
          <input id="password" name="password" type="password" onChange={handleFormChange} />
        </label>
        <button type="submit" aria-label="sign in">
          Sign In
        </button>
      </form>
      {error && <h5>{error}</h5>}
    </main>
  );
}
