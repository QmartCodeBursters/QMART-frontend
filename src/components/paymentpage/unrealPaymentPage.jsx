import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../../common/AuthContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 20px; */
  width: 80%;
  max-width: 500px;
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
  font-size: 16px;
  margin: 5px 0;
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
  background-color: #edeff2;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px;
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
  margin: 20px 20px;
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
  padding: 40px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  /* margin-right: 0px; */
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
  width: 300px;

  .popupButton {
    display: flex;
    justify-content: center;
    gap: 20px;

    button {
      background-color: red;
      color: white;
      border: none;
      border-radius: 2px;
      padding: 8px 12px;
      margin-top: 10px;
      cursor: pointer;

      &:nth-child(2) {
      background-color: #fa8232;
    }
    }

   

  }
`;

const PinPopup = styled.div`
  position: absolute;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 40;
  text-align: center;
  

  .popupButton {
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      background-color: rgba(27, 99, 146, 1);
      color: white;
      border: none;
      border-radius: 2px;
      padding: 8px 12px;
      margin-top: 10px;
    }
  }
`;

const PinInputBox = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 15px 5px;
  color: #333;
  font-weight: bold;
  background-color: #f9f9f9;
  &::placeholder {
    color: transparent;
  }
  &:focus {
    outline: none;
    border-color: #fa8232;
  }
`;

const PinInputContainer = styled.div``

const PinInput = styled.div`
  display: flex;
`;



const PaymentPagetwo = () => {
  const [amount, setAmount] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showPinPopUp, setShowPinPopUp] = useState(false);
  const [pin, setPin] = useState("");
  const [transactionFee] = useState("0.05");
  const [pinInputs, setPinInputs] = useState(["", "", "", ""]);
  const pinRefs = useRef([]);
  const navigate = useNavigate();

  const { userDetails } = useAppContext();

  // Helper Functions
  const handleNumberInput = (value) => {
    if (value === "x") {
      setAmount((prev) => prev.slice(0, -1));
    } else {
      setAmount((prev) => prev + value);
    }
  };

  const handlePayment = () => {
    if (amount && parseFloat(amount) <= parseFloat(userDetails?.walletBalance || 0)) {
      setShowConfirmation(true);
    } else if (!amount) {
      alert("Please enter an amount.");
    } else {
      alert("Insufficient funds.");
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

  const handlePinInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^[0-9]$/.test(value)) {
      const newPinInputs = [...pinInputs];
      newPinInputs[index] = value;
      setPinInputs(newPinInputs);
      setPin(newPinInputs.join(""));
      if (index < 3 && value) {
        pinRefs.current[index + 1]?.focus();
      }
    }
  };

  const handlePinBackspace = (e, index) => {
    if (e.key === "Backspace" && !pinInputs[index] && index > 0) {
      const prevInput = pinRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handlePinButtonClick = (num) => {
    const emptyIndex = pinInputs.findIndex((pin) => pin === "");
    if (emptyIndex !== -1) {
      const newPinInputs = [...pinInputs];
      newPinInputs[emptyIndex] = num;
      setPinInputs(newPinInputs);
      setPin(newPinInputs.join(""));
      if (emptyIndex < 3) {
        pinRefs.current[emptyIndex + 1]?.focus();
      }
    }
  };

  const handlePinSubmit = () => {
    if (pin === "1234") {
      navigate("/paymentsuccess");
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
        {userDetails?.business?.businessName.charAt(0) || "Default Business Name"}
      </CircleImage>
      <Header>{userDetails?.business?.businessName || "Fetching Name..."}</Header>
      <SubHeader>
        Account No: {userDetails?.accountNumber || "Fetching Data..."}
      </SubHeader>

      <InfoCard>
        <span>
          Wallet Balance: ₦{userDetails?.walletBalance || "Fetching Data..."}
        </span>
      </InfoCard>

      <AmountDisplay>₦{amount || "0"}</AmountDisplay>

      <PinGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "x"].map((num) => (
          <PinButton key={num} onClick={() => handleNumberInput(num)}>
            {num === "x" ? "⌫" : num}
          </PinButton>
        ))}
      </PinGrid>

      <SendButton onClick={handlePayment}>Send Money</SendButton>

      <Overlay show={showConfirmation} />

      {showConfirmation && (
        <ConfirmationPage show={showConfirmation}>
          <ConfirmationHeader>
            <XIcon onClick={handleCancelConfirmation}>✕</XIcon>
            <Header>₦{amount}</Header>
          </ConfirmationHeader>
          <SubHeader>
            Business: {userDetails?.business?.businessName || "Fetching Name..."}
          </SubHeader>
          <SubHeader>
            Account Number: {userDetails?.accountNumber || "Fetching Data..."}
          </SubHeader>
          <SubHeader>Amount: ₦{amount}</SubHeader>
          <SubHeader>Transaction Fee: ₦{transactionFee}</SubHeader>
          <SubHeader>
            Payment Method: Wallet (Balance: ₦
            {userDetails?.walletBalance || "Fetching Data..."})
          </SubHeader>

          <SendButton onClick={() => setShowPinPopUp(true)}>Pay</SendButton>
        </ConfirmationPage>
      )}

      {showCancelPopup && (
        <ReminderPopup>
          <p>Are you sure you want to cancel the payment?</p>
          <div className="popupButton">
            <button onClick={() => handlePopupCancel(true)}>Yes</button>
            <button onClick={() => handlePopupCancel(false)}>No</button>
          </div>
        </ReminderPopup>
      )}

      {showPinPopUp && (
        <PinPopup>
          <h3>Enter Transaction PIN</h3>

          <PinInputContainer>
            {pinInputs.map((digit, index) => (
              <PinInputBox
                key={index}
                ref={(el) => (pinRefs.current[index] = el)}
                id={`pin-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handlePinInputChange(e, index)}
                onFocus={(e) => e.target.select()}
                onKeyDown={(e) => handlePinBackspace(e, index)}
              />
            ))}
          </PinInputContainer>

          <PinGrid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
              <PinButton key={num} onClick={() => handlePinButtonClick(num)}>
                {num}
              </PinButton>
            ))}
            <PinButton
              key="x"
              onClick={() => {
                setPinInputs(["", "", "", ""]);
                setPin("");
                pinRefs.current[0]?.focus();
              }}
            >
              ⌫
            </PinButton>
          </PinGrid>

          <SendButton onClick={handlePinSubmit}>Submit PIN</SendButton>
          <XIcon onClick={() => setShowPinPopUp(false)}>✕</XIcon>
        </PinPopup>
      )}
    </Container>
  );
};

export default PaymentPagetwo;


