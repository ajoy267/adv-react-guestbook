import React from 'react';

export default function Header({ user }) {
  if (user === undefined) {
    return (
      <div>
        <p>Sign In Friend!</p>
      </div>
    );
  }
  return (
    <div>
      <p>Signing Guestbook as {user}</p>
    </div>
  );
}
