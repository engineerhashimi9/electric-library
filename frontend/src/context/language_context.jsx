import { createContext, useState } from 'react';

// 1. Create the context
export const GlobalContext = createContext();

// 2. Create a provider component to hold the state
export default function CurrentLanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <GlobalContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}
