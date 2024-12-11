import React from "react";
import Dashboard from "./Dashboard";



const MainDashboard = () => {

const user = {
    name: "Dianne Russell",
    role: "Merchant",
    address: "4400 Parker Rd. Allentown, New Mexico 31134",
    email: "dianne.russell@gmail.com",
    phone: "(617) 555-0110",
    orders: [
      { id: "#788", date: "8 Sep, 2020", total: 135.0, products: 3, status: "Processing" },
      { id: "#703", date: "24 May, 2020", total: 25.0, products: 1, status: "On the way" },
      { id: "#193", date: "22 Oct, 2020", total: 250.0, products: 6, status: "Completed" },
      { id: "#561", date: "1 Feb, 2020", total: 35.0, products: 2, status: "Completed" },
      { id: "#3536", date: "21 Sep, 2020", total: 578.0, products: 10, status: "Completed" },
      { id: "#492", date: "22 Oct, 2020", total: 346.0, products: 8, status: "Completed" },
    ],
  };
  

  return <Dashboard user={user} />;
};

export default MainDashboard;

