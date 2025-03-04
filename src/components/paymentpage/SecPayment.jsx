import "./sec.css";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "antd";
import OtpInput from "react-otp-input";
import { useAppContext } from "../../common/AuthContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 20px; */
  width: 80%;
  max-width: 450px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  height: auto;
  /* background-color: #ffff; */
  position: relative;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  padding: 30px;
  
  position: relative;
`;

const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #333;
  color: white;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Header = styled.h2`
  margin: 10px 0;
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

const SubHeader = styled.p`
  color: #666;
  font-size: 14px;
  /* margin: 5px 0; */
`;

const CircleImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fa8232;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  margin: 10px 0;
  overflow: hidden;
`;

const InfoCard = styled.div`
  background-color: #f2f1ed;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  box-sizing: border-box;
`;

const AmountDisplay = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #f0cea5;
  border-radius: 8px;
  /* margin: 20px 20px; */
  box-sizing: border-box;
`;

const PinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const PinButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color: #edeff2;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SendButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  color: white;
  background-color: #fa8232;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    background-color: #803e00;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 10;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const ConfirmationPage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 10px;
  padding-bottom: 40px;
  width: 100%;
  overflow: hidden;
  margin-right: 0px;
  margin-bottom: 0px;
  height: auto;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 20;
`;

const ConfirmationHeader = styled.div`
  display: flex;
  gap: 37%;
  align-items: center;
`;

const XIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #333;
`;

const ReminderPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 30;
  text-align: center;
  width: 200px;

  .popupButton {
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      background-color: rgba(27, 99, 146, 1);
      color: white;
      border: none;
      border-radius: 2px;
    }
  }
`;

const PinPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 40;
  text-align: center;
  width: 200px;

  .popupButton {
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      background-color: rgba(27, 99, 146, 1);
      color: white;
      border: none;
      border-radius: 2px;
    }
  }
`;

const PinInput = styled.div`
  display: flex;
`;


const PaymentPage = () => {
  const location = useLocation(); // Get location using useLocation hook
  const navigate = useNavigate();
  const { userDetails, businessName } = useAppContext(); // Destructure app context safely

  // Fetching parameters from URL
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get("amount");
  const storeName = queryParams.get("businessName") || businessName || userDetails?.business?.businessName || "Default Business Name";
  const accountNumber = queryParams.get("accountNumber") || userDetails?.accountNumber || "N/A";
  const walletBalance = queryParams.get("walletBalance") || userDetails?.accountBalance || "0.00";

  // Component state
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showPinPopUp, setShowPinPopUp] = useState(false);
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactionFee] = useState("0.005");

  const togglePinModalDisplay = () => setShowPinPopUp(!showPinPopUp);

  // Handle payment action
  const handlePayment = () => {
    setShowConfirmation(true);
    navigate('/paystack-payment')
  };

  const confirmUserPin = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/transaction-status"); // Navigate after payment
    }, 3000);
  };

  // Handle cancellation of the payment
  const handleCancelConfirmation = () => {
    setShowCancelPopup(true);
  };

  const handlePopupCancel = (confirm) => {
    setShowCancelPopup(false);
    if (confirm) {
      setShowConfirmation(false);
    }
  };

  const handlePinSubmit = () => {
    if (pin === "1234") {
      navigate("/paymentsuccess"); // Navigate to success page on correct PIN
    } else {
      alert("Invalid PIN. Please try again.");
    }
  };

  return (
    <Container>
      <BackButton onClick={() => navigate("/dashboard")}>&larr;</BackButton>
      <Header>Make Payment</Header>

      <SubHeader>Sending money to</SubHeader>
      <CircleImage>
        <span>{storeName.charAt(0)}</span> {/* Fallback: First letter of storeName */}
      </CircleImage>

      <Header>{storeName}</Header>
      <SubHeader>Account No: {accountNumber}</SubHeader>

      <InfoCard>
        <span>Wallet Balance: ₦{walletBalance}</span>
      </InfoCard>

      <AmountDisplay>₦{amount}</AmountDisplay>

      <SendButton onClick={handlePayment}>Send Money</SendButton>

      {/* Confirmation Page */}
      {showConfirmation && (
        <ConfirmationPage show={showConfirmation}>
          <ConfirmationHeader>
            <XIcon onClick={handleCancelConfirmation}>✕</XIcon>
            <Header>₦{amount}</Header>
          </ConfirmationHeader>
          <SubHeader>Business: {storeName}</SubHeader>
          <SubHeader>Account Number: {accountNumber}</SubHeader>
          <SubHeader>Amount: ₦{amount}</SubHeader>
          <SubHeader>Transaction Fee: ₦{transactionFee}</SubHeader>
          <SubHeader>Payment Method: Wallet (Balance: ₦{walletBalance})</SubHeader>

          <SendButton onClick={() => setShowPinPopUp(true)}>Pay</SendButton>
        </ConfirmationPage>
      )}

      {/* Reminder Popup */}
      {showCancelPopup && (
        <ReminderPopup>
          <p>Are you sure you want to cancel the payment?</p>
          <div className="popupButton">
            <button onClick={() => handlePopupCancel(true)}>Yes</button>
            <button onClick={() => handlePopupCancel(false)}>No</button>
          </div>
        </ReminderPopup>
      )}

      {/* PIN Popup */}
      {showPinPopUp && (
        <PinPopup>
          <h3>Enter Transaction PIN</h3>

          <PinGrid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "x"].map((num) => (
              <PinButton
                key={num}
                onClick={() => {
                  if (num === "x") {
                    setPin((prev) => prev.slice(0, -1));
                  } else {
                    setPin((prev) => prev + num);
                  }
                }}
              >
                {num === "x" ? "⌫" : num}
              </PinButton>
            ))}
          </PinGrid>
          <SendButton onClick={handlePinSubmit}>Submit PIN</SendButton>
          <XIcon onClick={() => setShowPinPopUp(false)}>✕</XIcon>
        </PinPopup>
      )}
    </Container>
  );
};



export default PaymentPage;



