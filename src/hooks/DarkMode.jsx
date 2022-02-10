import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
import './Hooks.scss';

export default function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <div className="slider">
        <button type="button" onClick={darkMode.disable}>
          ☀
        </button>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <button type="button" onClick={darkMode.enable}>
          ☾
        </button>
      </div>
    </div>
  );
}
