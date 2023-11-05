import  { createContext, useState } from 'react';

// Create a context for the count
const CountContext = createContext();

// Count Provider component
const CountProvider = ({ children }) => {
  const [route, setRoute] = useState("");

  const url = (pathUrl) => {
    setRoute(pathUrl);
  };

  return (
    <CountContext.Provider value={{ route, url }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
