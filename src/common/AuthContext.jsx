import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import summaryAPI from "./summaryAPI";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });
  const [businessName, setBusinessName] = useState("Fetching business name...");
  const [accountNumber, setAccountNumber] = useState(null);

  
  useEffect(() => {
    if (!userDetails?._id) return; // Early return if userDetails or _id is missing

    const fetchBusinessNameAndAccountNumber = async () => {
      const constructedURL = `${summaryAPI.fetchUserData.url}/${userDetails._id}`;

      try {
        const response = await axios.get(constructedURL);

        if (response.data?.businessName) {
          setBusinessName(response.data.businessName);
        } else {
          setBusinessName("Business name not found.");
        }

        if (response.data?.accountNumber) {
          setAccountNumber(response.data.accountNumber); // Set account number if available
        } else {
          setAccountNumber("Account number not found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setBusinessName("Error fetching business name.");
        setAccountNumber("Error fetching account number.");
      }
    };

    fetchBusinessNameAndAccountNumber();
  }, [userDetails]);

 
  const updateUserDetails = (userData) => {
    setUserDetails({
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    });
  };

 
  const updateBusinessName = (name) => {
    setBusinessName(name);
  };

  
  const updateAccountNumber = (account) => {
    setAccountNumber(account);
  };

  return (
    <AppContext.Provider
      value={{
        email,
        setEmail,
        role,
        setRole,
        userDetails,
        setUserDetails,
        businessName,
        setBusinessName,
        accountNumber, 
        updateBusinessName,
        updateAccountNumber,
        updateUserDetails, 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
