import React from 'react';
import EntryList from '../../components/EntryList/EntryList';
import GuestForm from '../../components/GuestForm/GuestForm';
import Header from '../../components/Header/Header';
import { EntryProvider } from '../../context/EntryContext';
import Animation from '../../hooks/Animation';
import DarkModeToggle from '../../hooks/DarkMode';

export default function Home() {
  return (
    <div>
      <EntryProvider>
        <Header />
        <DarkModeToggle />
        <GuestForm />
        <Animation />
        <EntryList />
      </EntryProvider>
    </div>
  );
}
