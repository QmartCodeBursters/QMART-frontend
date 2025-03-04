import "./sec.css";
import { MdOutlineVerifiedUser } from "react-icons/md";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "antd";
import OtpInput from "react-otp-input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  font-family: Arial, sans-serif;
  max-width: 450px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  height: auto;
  background-color: #ffff;
  position: relative;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
  rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 40px;
  position: relative;

  p {
    font-size: 20px;
  }
`;

const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #fff;
  color: rgba(27, 99, 146, 1);
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

// const Header = styled.h2`
//   margin: 10px 0;
//   color: #333;
//   font-size: 24px;
//   font-weight: bold;
// `;

// const SubHeader = styled.p`
//   color: #666;
//   font-size: 16px;
//   margin: 5px 0;
// `;

// const CircleImage = styled.div`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   background-color: rgba(27, 99, 146, 1);
//   color: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 32px;
//   font-weight: bold;
//   margin: 10px 0;
//   overflow: hidden;
// `;

// const InfoCard = styled.div`
//   background-color: #edeff2;
//   border-radius: 8px;
//   padding: 15px;
//   width: 100%;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 15px 0px;
//   box-sizing: border-box;
// `;

// const AmountDisplay = styled.div`
//   width: 100%;
//   padding: 20px;
//   font-size: 32px;
//   font-weight: bold;
//   text-align: center;
//   background-color: #edeff2;
//   border-radius: 10px;
//   margin: 20px 20px;
//   box-sizing: border-box;
// `;

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
  background-color: #f2f2ed;
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
  margin-top: 40px;
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

const Iconstyle = styled.p`
  font-size: 80px;
  margin-bottom: 20px;
  color: #e69705;
`

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

const PaymentPage = ({ storeName, accountNumber, walletBalance }) => {
  const [amount, setAmount] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showPinPopUp, setShowPinPopUp] = useState(false);
  const [pin, setPin] = useState("");
  const [transactionFee] = useState("50.00");
  const [openPinModal, setOpenPinModal] = useState(false);
  const [userPin, setUserPin] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const togglePinModalDisplay = () => setOpenPinModal(!openPinModal);

  const handleNumberInput = (value) => {
    if (value === "x") {
      // setAmount((prev) => prev.slice(0, -1));
      setUserPin((prev) => prev.slice(0, -1));
    } else {
      console.log(value);
      // setAmount((prev) => prev + value);
      setUserPin((prev) => prev + value);
    }
  };

  const handlePayment = () => {
    togglePinModalDisplay();
    navigate("/dashboard");
    // if (amount && parseFloat(amount) <= parseFloat(walletBalance)) {
    //   setShowConfirmation(true);
    // } else if (!amount) {
    //   alert("Please enter an amount.");
    // } else {
    //   alert("Insufficient funds.");
    // }
  };

  const confirmUserPin = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/qr-code";
    }, 3000);
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

      <Iconstyle as={MdOutlineVerifiedUser} />
      <p>Transaction Successful</p>
      <SendButton onClick={handlePayment}>Done</SendButton>

      {/* Overlay */}
      <Overlay show={showConfirmation} />
      {/* PIN Popup */}
      {/* <Modal open={openPinModal} onCancel={togglePinModalDisplay} footer={null}>
        <div className="otp-form">
          <div className="otp-div">
            <OtpInput
              value={userPin}
              onChange={setUserPin}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <PinGrid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "x"].map((num) => (
              <PinButton key={num} onClick={() => handleNumberInput(num)}>
                {num === "x" ? "⌫" : num}
              </PinButton>
            ))}
          </PinGrid>
          <div>
            {!loading ? (
              <SendButton onClick={confirmUserPin}>Receive Payment</SendButton>
            ) : (
              <SendButton disabled>Please Wait....</SendButton>
            )}
          </div>
        </div>
      </Modal> */}
    </Container>
  );
};

PaymentPage.defaultProps = {
  storeName: "QMART Stores",
  accountNumber: "123456789",
  walletBalance: "1000.00",
};

export default PaymentPage;
