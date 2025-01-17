import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../../common/AuthContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  /* font-family: Arial, sans-serif; */
  max-width: 450px;
  margin: 100px auto;
  /* background-color: #ffffff; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
  animation: slideInFromTop 1s ease-out;


  @keyframes slideInFromTop {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background-color: #333;
  color: #fff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f8ff;
    color: #0b4166;
  }
`;

const Header = styled.h2`
  /* margin: 20px 0 10px; */
  color: #333;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SubHeader = styled.p`
  color: #666;
  font-size: 16px;
  /* margin: 5px 0; */
  text-align: center;
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
  margin: 15px 0;
`;

const AmountDisplay = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #f0cea5;
  border-radius: 8px;
  margin: 20px 20px;
  box-sizing: border-box;
`;

const PinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

const PinButton = styled.button`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8c88b;
  }
`;

const SendButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #f8931d;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ac5e04;
  }

  &:disabled {
    background-color: #e3cfb3;
    cursor: not-allowed;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const ConfirmationPage = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(100%)")}; 
  transition: transform 0.3s ease-in-out;
  z-index: 20;
`;

const ReminderPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 30;
  text-align: center;

  .popupButton {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    button {
      padding: 10px 15px;
      background-color: #f8931d;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #f8931d;
      }
    }
  }
`;


const PaymentPage = () => {
  const { userDetails } = useAppContext(); // Get user details from context
  const [amount, setAmount] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showPinPopUp, setShowPinPopUp] = useState(false);
  const [pin, setPin] = useState("");
  const [transactionFee] = useState("50.00");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Default values for storeName, accountNumber, and walletBalance if userDetails is not available
  const storeName = userDetails?.business?.businessName || "Default Business Name";
  const accountNumber = userDetails?.accountNumber || "N/A";
  const walletBalance = userDetails?.accountBalance || "0.00";

  const handleNumberInput = (value) => {
    if (value === "x") {
      setAmount((prev) => prev.slice(0, -1));
    } else {
      setAmount((prev) => prev + value);
    }
  };

  const handlePayment = () => {
    if (amount && parseFloat(amount) > 0) {
      const data = {
        amount,
        businessName: storeName,
        accountNumber,
      };
      sessionStorage.setItem("paymentDetails", JSON.stringify(data));

      // Add the amount as a query parameter in the URL
      navigate(`/qr-code?amount=${amount}`);
    } else {
      alert("Please enter a valid amount.");
    }
  };

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
      // Placeholder for actual PIN verification
      navigate("/paymentsuccess");
    } else {
      alert("Invalid PIN. Please try again.");
    }
  };

  return (
    <Container>
      <BackButton onClick={() => navigate("/dashboard")}>&larr;</BackButton>
      <Header>Receive Payment</Header>
      <CircleImage>{storeName.charAt(0)}</CircleImage>
      <Header>{storeName}</Header>
      <SubHeader>Account No: {accountNumber}</SubHeader>

      <AmountDisplay>₦{amount || "0"}</AmountDisplay>

      <PinGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "x"].map((num) => (
          <PinButton key={num} onClick={() => handleNumberInput(num)}>
            {num === "x" ? "⌫" : num}
          </PinButton>
        ))}
      </PinGrid>

      {!loading ? (
        <SendButton onClick={handlePayment}>Receive Payment</SendButton>
      ) : (
        <SendButton disabled>Please Wait....</SendButton>
      )}

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
          <SubHeader>
            Payment Method: Wallet (Balance: ₦{walletBalance})
          </SubHeader>

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

