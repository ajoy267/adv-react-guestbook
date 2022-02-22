import React from 'react';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './EntryList.css';

export default function EntryList() {
  const { entry } = useEntry();
  const { user } = useUser();

  return (
    <div className="message">
      {entry.map(({ message }) => (
        <div key={message} className="each-message">
          <p className="message-name">{user}: </p>
          <p className="message-message">{message}</p>
        </div>
      ))}
    </div>
  );
}
