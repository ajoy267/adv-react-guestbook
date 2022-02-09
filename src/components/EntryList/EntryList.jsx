import React from 'react';
import { useEntry } from '../../context/EntryContext';

export default function EntryList() {
  const { entry } = useEntry();

  return (
    <div>
      <div>
        {entry.map(({ name, message }) => (
          <div key={message}>
            <span>{name}</span>
            <p>{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
