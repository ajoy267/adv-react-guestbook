import React from 'react';
import EntryList from '../../components/EntryList/EntryList';
import GuestForm from '../../components/GuestForm/GuestForm';
import Header from '../../components/Header/Header';
import Animation from '../../hooks/Animation';
import DarkModeToggle from '../../hooks/DarkMode';

export default function Home() {
  return (
    <div>
      <Header />
      <DarkModeToggle />
      <GuestForm />
      {/* <Animation /> */}
      <EntryList />
    </div>
  );
}
