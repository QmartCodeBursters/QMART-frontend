import React, { useState } from "react";
import Balance from "./Balance";
import CashFlow from "./CashFlow";
import RecentPayments from "./RecentPayments";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 20px;
  max-width: 975px;
  margin: 0 auto;
`;

const Dashboard = () => {
  // Mock data to simulate API responses
  const storeData = {
    storeName: "QMart Stores",
    balance: 1156734534.45,
  };

  const recentPaymentsData = [
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 10000,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 16750,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 136870,
      status: "completed",
    },
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 10000,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 16750,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 136870,
      status: "completed",
    },
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 10000,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 16750,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 136870,
      status: "completed",
    },
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 10000,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 16750,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 136870,
      status: "completed",
    },
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 10000,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 16750,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 136870,
      status: "completed",
    },
  ];

  // Mock data for different months (for dynamic month selection)
  const mockData = {
    currentMonth: "December",
    months: [
      {
        name: "January",
        paymentReceived: 0,
        amountWithdrawn: 0,
      },
      { name: "February", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "March", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "April", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "May", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "June", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "July", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "August", paymentReceived: 0, amountWithdrawn: 0 },
      {
        name: "September",
        paymentReceived: 0,
        amountWithdrawn: 0,
      },
      { name: "October", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "November", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "December", paymentReceived: 0, amountWithdrawn: 0 },
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
