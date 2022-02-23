import React from 'react';
import { useUser } from '../../context/UserContext';
import './Header.css';

export default function Header() {
  const { user } = useUser();

  return <header>{user ? <p>Signing Guest Book as {user}</p> : <p>Sign In Friend</p>}</header>;
}
