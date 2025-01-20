import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Balance from "./Balance";
import CashFlow from "./CashFlow";
import RecentPayments from "./RecentPayments";
import styled from "styled-components";
import AxiosToastError from "../../utilis/AxiosToastError";
import Axios from "../../utilis/Axios";
import summaryAPI from "../../common/summaryAPI";
import toast from "react-hot-toast";
import { useAppContext } from "../../common/AuthContext";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { userDetails, businessName, updateBusinessName } = useAppContext(); 

  const [storeData, setStoreData] = useState({
    role: "",
    storeName: "",
    balance: 0,
  });

  const recentPaymentsData = [];
  const mockData = {
    currentMonth: "January",
    months: [
      { name: "January", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "February", paymentReceived: 0, amountWithdrawn: 0 },
      { name: "March", paymentReceived: 0, amountWithdrawn: 0 },
    ],
  };

  const [selectedMonthReceived, setSelectedMonthReceived] = useState(
    mockData.currentMonth
  );
  const [selectedMonthWithdrawn, setSelectedMonthWithdrawn] = useState(
    mockData.currentMonth
  );

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
        if (user.role === "merchant") {
          setStoreData({
            role: user.role,
            storeName:
              user?.businessName ||
              userDetails?.business?.businessName ||
              "Default Business Name",
            balance: user.accountBalance || 0,
          });
          updateBusinessName(user.businessName || "No business name");
        } else if (user.role === "customer") {
          setStoreData({
            role: user.role,
            storeName: user.firstName || "Customer",
            balance: user.accountBalance || 0,
          });
          updateBusinessName(user.firstName || "Customer");
        }
      } catch (error) {
        AxiosToastError(error);
      }
    };
    fetchUserData();
  }, [updateBusinessName]);

  const navigateToQRCodePage = () => {
    navigate({
      pathname: "/qrcode",
      state: { businessName },
    });
  };

  return (
    <Container>
      <Balance
        storeName={businessName} 
        balance={storeData.balance}
        role={storeData.role}
      />
      <CashFlow
        selectedMonthReceived={selectedMonthReceived}
        setSelectedMonthReceived={setSelectedMonthReceived}
        selectedMonthWithdrawn={selectedMonthWithdrawn}
        setSelectedMonthWithdrawn={setSelectedMonthWithdrawn}
        paymentReceived={selectedMonthReceivedData.paymentReceived}
        amountWithdrawn={selectedMonthWithdrawnData.amountWithdrawn}
      />
      <RecentPayments transactions={recentPaymentsData} />
      {/* Render button to navigate to QRCodePage */}
      <Button>
        {/* <button onClick={navigateToQRCodePage}>Generate QR Code</button>   */}
      </Button>
    </Container>
  );
};

export default Dashboard;

const Button = styled.div``;
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 20px;
  max-width: 975px;
  margin: 0 auto;
`;
