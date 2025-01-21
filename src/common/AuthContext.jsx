import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import summaryAPI from "./summaryAPI";
import { MdAccountBalance } from "react-icons/md";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    address: "",
    accountBalance: ""
  });
  const [businessName, setBusinessName] = useState("Fetching business name...");
  const [accountNumber, setAccountNumber] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  
  useEffect(() => {
    if (!userDetails?._id) return;

    const fetchBusinessNameAndAccountNumber = async () => {
      const constructedURL = `${summaryAPI.fetchMerchant.url}/${userDetails._id}`;

      try {
        const response = await axios.get(constructedURL);

        if (response.data?.businessName) {
          setBusinessName(response.data.businessName);
        } else {
          setBusinessName("Business name not found.");
        }

        if (response.data?.accountNumber) {
          setAccountNumber(response.data.accountNumber); 
        } else {
          setAccountNumber("Account number not found.");
        }
        if (response.data?.accountBalance) {
          setUserDetails((prev) => ({ ...prev,accountBalance: response.data.accountBalance }));
        } else {
          console.error("Error fetchingaccountBalance");
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
    setUserDetails((prev) => ({
      ...prev,
      _id: userData._id,
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      address: userData.address,
     accountBalance: userData.accountBalance || prev.accountBalance,
    }));
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
        profileImage,
      setProfileImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
