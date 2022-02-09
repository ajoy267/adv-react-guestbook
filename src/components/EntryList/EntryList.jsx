import React from 'react';
import { useEntry } from '../../context/EntryContext';
import './EntryList.css';

export default function EntryList() {
  const { entry } = useEntry();

  return (
    <div className="message">
      {entry.map(({ name, message }) => (
        <div key={message} className="each-message">
          <p className="message-name">{name}: </p>
          <p className="message-message">{message}</p>
        </div>
      ))}
    </div>
  );
}
