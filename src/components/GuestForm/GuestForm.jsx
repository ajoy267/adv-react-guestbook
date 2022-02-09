import React, { useState } from 'react';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './GuestForm.css';

export default function GuestForm() {
  const [name, setName] = useState('');
  const [userEntry, setUserEntry] = useState('');
  const { user, setUser } = useUser();
  const { setEntry } = useEntry();

  function updateList() {
    if (!userEntry) return;
    setUser(name);
    setEntry((prevState) => [...prevState, { name, message: userEntry }]);
    setUserEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  const handleNew = (e) => {
    e.preventDefault();
    setUser('');
    setName('');
  };

  const guestName = (
    <div className="head">
      <p>Please Sign the Guest Book</p>
      <div className="name">
        <label className="user-name">Guest Name: </label>
        <input
          type="text"
          placeholder="Guest Name"
          className="user-name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {user ? null : guestName}
        <div className="entry">
          <label className="user-entry">Guest Entry: </label>
          <input
            type="text"
            placeholder="Your Entry"
            className="user-name-input"
            value={userEntry}
            onChange={(e) => setUserEntry(e.target.value)}
          />
        </div>
        <button className="sign" type="submit">
          Sign
        </button>
        {user ? (
          <button className="sign-out" onClick={handleNew}>
            Not {user}?
          </button>
        ) : null}
      </form>
    </div>
  );
}
