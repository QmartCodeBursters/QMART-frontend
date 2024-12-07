import React from "react";
import  UserProfile from "./Userprofile"; 

const MainUserProfile = () => {
  // Example user data; replace it with actual user data from your store or API
  const user = {
    name: "Dianna Russell",
    role: "MERCHANT",
    profileImage: "https://example.com/uploads/profile123.jpg", //the profile image coming from the backend will replace the image//
    storeName: "Qmart Store",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    email: "dainne.ressell@gmail.com",
    phone: "+123456789",
    bankDetails: {
      accountName: "Dianna Russell",
      accountNumber: "(671) 555-0110",
      bank: "Sail Bank",
    },
    businessDescription:
      "A premier store offering groceries and daily essentials.",
    businessRegNumber: "12345-67890",
   
  };

  return <UserProfile user={user} />;
};

export default MainUserProfile;
