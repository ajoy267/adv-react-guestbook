import { createContext, useContext, useState } from 'react';

const EntryContext = createContext();

function EntryProvider({ children }) {
  const [entry, setEntry] = useState([]);
  return <EntryContext.Provider value={{ entry, setEntry }}>{children}</EntryContext.Provider>;
}

function useEntry() {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error('useEntry needs to be inside EntryProvider');
  }
  return context;
}

export { EntryProvider, useEntry };
