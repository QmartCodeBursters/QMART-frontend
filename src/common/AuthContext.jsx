import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');  // Store user role in context

  return (
    <AppContext.Provider value={{ email, setEmail, role, setRole }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
