import React, { useEffect, useState } from "react";
import Balance from "./Balance";
import CashFlow from "./CashFlow";
import RecentPayments from "./RecentPayments";
import styled from "styled-components";
import AxiosToastError from "../../utilis/AxiosToastError";
import Axios from "../../utilis/Axios";
import summaryAPI from "../../common/summaryAPI";
import toast from "react-hot-toast";

const Button = styled.div``;
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 20px;
  max-width: 975px;
  margin: 0 auto;
`;

const Dashboard = () => {
  const [storeData, setStoreData] = useState({
    role: "",
    storeName: "",
    balance: 0,
  });

  const recentPaymentsData = [
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 0,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 0,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 0,
      status: "completed",
    },
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 0,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 0,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 0,
      status: "completed",
    },
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 0,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 0,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 0,
      status: "completed",
    },
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 0,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 0,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 0,
      status: "completed",
    },
    {
      name: "Aserikan Adetola",
      date: "9 January 2023",
      amount: 0,
      status: "completed",
    },
    {
      name: "Fatimah Fatimah",
      date: "January 25th",
      amount: 0,
      status: "on the way",
    },
    {
      name: "Foluso Ojo",
      date: "January 25th",
      amount: 0,
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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios({
          method: "GET",
          url: summaryAPI.fetchUser.url,
        });
        const user = response.data;
        console.log(user);

        if (user.role === "merchant") {
          setStoreData({
            role: user.role,
            storeName: user.businessName || "No business name",
            balance: user.accountBalance || 0,
          });
        } else if (user.role === "customer") {
          setStoreData({
            role: user.role,
            storeName: user.firstName || "Customer",
            balance: user.accountBalance || 0,
          });
        }

        // if (response.data.success) {
        //   toast.success(response.data.message);
        // } else {
        //   toast.error(response.data.message);
        // }
      } catch (error) {
        AxiosToastError(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <Container>
      <Balance storeName={storeData.storeName} balance={storeData.balance} role={storeData.role} />
      <CashFlow
        selectedMonthReceived={selectedMonthReceived}
        setSelectedMonthReceived={setSelectedMonthReceived}
        selectedMonthWithdrawn={selectedMonthWithdrawn}
        setSelectedMonthWithdrawn={setSelectedMonthWithdrawn}
        paymentReceived={selectedMonthReceivedData.paymentReceived}
        amountWithdrawn={selectedMonthWithdrawnData.amountWithdrawn}
      />
      <RecentPayments transactions={recentPaymentsData} />
      {/* Render buttons based on role */}
    </Container>
  );
};

export default Dashboard;
