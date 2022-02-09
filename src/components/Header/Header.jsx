import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return <header>{user ? <p>Signing GuestBook as {user}</p> : <p>Sign In Friend</p>}</header>;
}
