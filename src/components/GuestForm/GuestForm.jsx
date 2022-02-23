import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './GuestForm.css';

export default function GuestForm() {
  const [name] = useState('');
  const [userEntry, setUserEntry] = useState('');
  const { user, setUser } = useUser();
  const { setEntry } = useEntry();
  const history = useHistory();

  function updateList() {
    if (!userEntry) return;

    setEntry((prevState) => [...prevState, { name, message: userEntry }]);
    setUserEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser('');
    history.push('/login');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="entry">
          <label className="user-entry">
            Guest Entry:
            <input
              type="text"
              placeholder="Your Entry"
              className="user-name-input"
              value={userEntry}
              onChange={(e) => setUserEntry(e.target.value)}
            />
          </label>
        </div>
        <button className="sign" type="submit">
          Sign
        </button>
        {user ? (
          <button className="sign-out" onClick={handleLogout}>
            Not {user}?
          </button>
        ) : null}
      </form>
    </div>
  );
}
