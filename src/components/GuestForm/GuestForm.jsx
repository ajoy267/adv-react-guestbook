import React, { useState } from 'react';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function GuestForm() {
  const [name, setName] = useState('');
  const [userEntry, setUserEntry] = useState('');
  const { user, setUser } = useUser();
  const { entry, setEntry } = useEntry();

  function updateList() {
    if (!userEntry) return;
    setUser(name);
    setEntry([...entry, { name, message: userEntry }]);
    setUserEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  const guestName = (
    <div>
      <label>Guest Name: </label>
      <input
        type="text"
        placeholder="Guest Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {user ? null : guestName}
        <div>
          <label>Guest Entry: </label>
          <input
            type="text"
            placeholder="Your Entry"
            value={userEntry}
            onChange={(e) => setUserEntry(e.target.value)}
          />
        </div>
        <button type="submit">Sign</button>
      </form>
    </div>
  );
}
