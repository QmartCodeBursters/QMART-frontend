import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [userDetails, setUserDetails] = useState(null); // Add userDetails state

  return (
    <AppContext.Provider
      value={{ email, setEmail, role, setRole, userDetails, setUserDetails }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
