import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState('');

  const login = (username, password) => {
    const loginSuccesful =
      username === process.env.AUTH_USERNAME && password === process.env.AUTH_PASSWORD;

    if (loginSuccesful) setUser({ username });
    return loginSuccesful;
  };

  const logout = (callback) => {
    setUser('');
    callback();
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>{children}</UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser needs to be inside UserProvider');
  }
  return context;
}

export { UserProvider, useUser };
