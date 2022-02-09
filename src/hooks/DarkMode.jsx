import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
import './Hooks.css';

export default function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button className="dark" type="button" onClick={darkMode.disable}>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> Dark Mode
      </button>
    </div>
  );
}
