import React, { useState } from "react";
import Balance from "./Balance";
import CashFlow from "./CashFlow";
import RecentPayments from "./RecentPayments";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Dashboard = () => {
  // Mock data to simulate API responses
  const storeData = {
    storeName: "QMart Stores",
    balance: 1156734534.45, 
  };

  const recentPaymentsData = [
    { name: "Aserikan Adetola", date: "9 January 2023", amount: 10000, status: "completed"},
    { name: "Fatimah Fatimah", date: "January 25th", amount: 16750, status: "on the way" },
    { name: "Foluso Ojo", date: "January 25th", amount: 136870, status: "completed" },
    { name: "Aserikan Adetola", date: "9 January 2023", amount: 10000, status: "completed"},
    { name: "Fatimah Fatimah", date: "January 25th", amount: 16750, status: "on the way" },
    { name: "Foluso Ojo", date: "January 25th", amount: 136870, status: "completed" },
    { name: "Aserikan Adetola", date: "9 January 2023", amount: 10000, status: "completed"},
    { name: "Fatimah Fatimah", date: "January 25th", amount: 16750, status: "on the way" },
    { name: "Foluso Ojo", date: "January 25th", amount: 136870, status: "completed" },
    { name: "Aserikan Adetola", date: "9 January 2023", amount: 10000, status: "completed"},
    { name: "Fatimah Fatimah", date: "January 25th", amount: 16750, status: "on the way" },
    { name: "Foluso Ojo", date: "January 25th", amount: 136870, status: "completed" },
    { name: "Aserikan Adetola", date: "9 January 2023", amount: 10000, status: "completed"},
    { name: "Fatimah Fatimah", date: "January 25th", amount: 16750, status: "on the way" },
    { name: "Foluso Ojo", date: "January 25th", amount: 136870, status: "completed" },
  ];

  // Mock data for different months (for dynamic month selection)
  const mockData = {
    currentMonth: "December",
    months: [
      {
        name: "January",
        paymentReceived: 1298000000,
        amountWithdrawn: 1500000,
      },
      { name: "February", paymentReceived: 25000000, amountWithdrawn: 1200000 },
      { name: "March", paymentReceived: 400000000, amountWithdrawn: 2000000 },
      { name: "April", paymentReceived: 50090000000, amountWithdrawn: 2500000 },
      { name: "May", paymentReceived: 30000000, amountWithdrawn: 1000000 },
      { name: "June", paymentReceived: 45000000, amountWithdrawn: 2200000 },
      { name: "July", paymentReceived: 554000000, amountWithdrawn: 3000000 },
      { name: "August", paymentReceived: 650000000, amountWithdrawn: 3500000 },
      {
        name: "September",
        paymentReceived: 400000000,
        amountWithdrawn: 2100000,
      },
      { name: "October", paymentReceived: 35000000, amountWithdrawn: 1800000 },
      { name: "November", paymentReceived: 70000000, amountWithdrawn: 5000000 },
      { name: "December", paymentReceived: 80000000, amountWithdrawn: 6000000 },
    ],
  };

  const [selectedMonthReceived, setSelectedMonthReceived] = useState(
    mockData.currentMonth
  );
  const [selectedMonthWithdrawn, setSelectedMonthWithdrawn] = useState(
    mockData.currentMonth
  );

  // Get the data for the selected month for both received and withdrawn
  const selectedMonthReceivedData = mockData.months.find(
    (month) => month.name === selectedMonthReceived
  );
  const selectedMonthWithdrawnData = mockData.months.find(
    (month) => month.name === selectedMonthWithdrawn
  );

  return (
    <Container>
      <Balance storeName={storeData.storeName} balance={storeData.balance} />
      <CashFlow
        selectedMonthReceived={selectedMonthReceived}
        setSelectedMonthReceived={setSelectedMonthReceived}
        selectedMonthWithdrawn={selectedMonthWithdrawn}
        setSelectedMonthWithdrawn={setSelectedMonthWithdrawn}
        paymentReceived={selectedMonthReceivedData.paymentReceived}
        amountWithdrawn={selectedMonthWithdrawnData.amountWithdrawn}
      />
      <RecentPayments transactions={recentPaymentsData} />
    </Container>
  );
};

export default Dashboard;
