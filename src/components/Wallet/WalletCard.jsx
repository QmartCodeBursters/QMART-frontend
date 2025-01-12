import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../assets/svg/card.svg";
import { IoMdArrowDropright } from "react-icons/io";
import { IoClose } from "react-icons/io5"; // Cancel icon
import { Link } from "react-router-dom";

// Flex container for layout
const Flex = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: end;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 800px) {
    padding: 15px;
    flex-direction: column;
    align-items: center;
  }
`;

// Button for withdraw action
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  gap: 15px;
  @media (max-width: 800px) {
    margin-left: 0;
    width: 100%;
    justify-content: center;

  }
`;

// Withdraw action styling
const Withdraw = styled.p`
  display: flex;
  align-items: center;
  background-color: #fa8232;
  color: white;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  max-width: 200px;
  justify-content: center;
  text-align: center;
  span {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-left: 5px;
  }
  &:hover {
    background-color: #f85e0a;
  }
  @media (max-width: 800px) {
    padding: 12px 25px;
    font-size: 18px;
  }
`;

// const AddMoney = styled.p`
//   display: flex;
//   align-items: center;
//   background-color: #FF3B30;
//   ;
//   color: white;
//   border-radius: 4px;
//   padding: 12px 20px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   max-width: 200px;
//   justify-content: center;
//   text-align: center;
//   span {
//     display: flex;
//     align-items: center;
//     font-size: 16px;
//     margin-left: 5px;
//   }
//   &:hover {
//   background-color: #f53026;
//   }
//   @media (max-width: 800px) {
//     padding: 12px 25px;
//     font-size: 18px;
//   }
// `;

// Image container with card and settings
const Image = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  img {
    width: 100%;
    border-radius: 8px;
  }
  p {
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 12px;
    color: white;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #1596ec;
    }
  }
  @media (max-width: 800px) {
    max-width: 400px;
    p {
      right: 30px;
      top: 0px;
      font-size: 15px;
    }
  }
`;

// Balance information
const Bal = styled.div`
  color: red;
  position: absolute;
  bottom: 10px;
  left: 30px;
  display: flex;
  flex-direction: column;
  #balance {
    font-size: 25px;
    font-weight: bold;
  }
  span {
    font-size: 12px;
    color: white;
  }
  @media (max-width: 800px) {
    left: 15px;
    bottom: 20px;
    #balance {
      font-size: 22px;
    }
  }
`;

// Modal Overlay for centering and background
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal Content for short, centered design
const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  width: 250px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  align-items: center;
  max-height: auto;
  justify-content: center;
`;

// Input styling for amount and pin
const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

// Pin Input styling for 4-digit entry
const PinInput = styled(Input)`
  width: 50px;
  text-align: center;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #333;
`;

const SuccessMessage = styled.div`
  color: green;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DoneButton = styled.div`
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
`;

function WalletCard({ balance }) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [pin, setPin] = useState(["", "", "", ""]);
  const [pinVisible, setPinVisible] = useState([false, false, false, false]); // Track visibility of each digit
  const [isWithdrawalSuccessful, setIsWithdrawalSuccessful] = useState(false);

  const dummyAccountDetails = {
    accountName: "Aserikan Moshood Adetola",
    accountNumber: "1234567890",
    bankName: "Sail Bank",
  };

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsWithdrawalSuccessful(false);
    setWithdrawAmount("");
    setPin(["", "", "", ""]);
    setPinVisible([false, false, false, false]);
  };

  const handleWithdraw = () => {
    if (pin.join("").length === 4) {
      setIsWithdrawalSuccessful(true);
    } else {
      alert("Please enter a 4-digit PIN.");
    }
  };

  const handlePinChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newPin = [...pin];
      const newPinVisible = [...pinVisible];

      newPin[index] = value; // Update the PIN value
      setPin(newPin);

      if (value) {
        newPinVisible[index] = true; // Show the digit briefly
        setPinVisible(newPinVisible);

        setTimeout(() => {
          newPinVisible[index] = false; // Hide the digit after a brief moment
          setPinVisible([...newPinVisible]);
        }, 200); // Adjust delay as necessary (200ms is brief)

        if (index < 3) {
          document.getElementById(`pin-${index + 1}`).focus(); // Move to the next input
        }
      } else if (!value && index > 0) {
        document.getElementById(`pin-${index - 1}`).focus(); // Move back to the previous input
      }
    }
  };

  return (
    <div>
      <Flex>
        <Image>
          <img src={Card} alt="ATM card" />
          <Link to="/walletsettings">
            <p>Settings</p>
          </Link>
          <Bal>
            <span>
              Wallet Balance:{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={toggleBalanceVisibility}
              >
                {isBalanceVisible ? "👁️️" : "👁️‍🗨️"}
              </span>
            </span>
            <span id="balance">
              {isBalanceVisible ? `\u20A6${balance.toLocaleString()}` : "****"}
            </span>
          </Bal>
        </Image>
        <Button>
          {/* <AddMoney onClick={toggleModal}>
            <span>Add Money</span>
            <span>
              <IoMdArrowDropright size={20} />
            </span>
          </AddMoney> */}

          <Withdraw onClick={toggleModal}>
            <span>Withdraw</span>
            <span>
              <IoMdArrowDropright size={20} />
            </span>
          </Withdraw>
        </Button>
      </Flex>

      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={toggleModal}>
            <IoClose />
          </CloseButton>

          {isWithdrawalSuccessful ? (
            <SuccessMessage>
              <span>✅</span>
              <p>Withdrawal Successful!</p>
              <DoneButton onClick={toggleModal}>Done</DoneButton>
            </SuccessMessage>
          ) : (
            <>
              <h3>Withdraw</h3>
              <div style={{ textAlign: "left", width: "100%" }}>
                <p>
                  <strong>Account Name:</strong>{" "}
                  {dummyAccountDetails.accountName}
                </p>
                <p>
                  <strong>Account Number:</strong>{" "}
                  {dummyAccountDetails.accountNumber}
                </p>
                <p>
                  <strong>Bank Name:</strong> {dummyAccountDetails.bankName}
                </p>
              </div>

              <label>Amount to Withdraw</label>
              <Input
                type=""
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="Enter amount"
              />

              <label>Enter 4-Digit PIN</label>
              <div style={{ display: "flex", gap: "10px" }}>
                {pin.map((digit, idx) => (
                  <PinInput
                    key={idx}
                    id={`pin-${idx}`}
                    type="text"
                    value={pinVisible[idx] ? digit : digit ? "\u2022" : ""} // Show digit briefly, then replace with dot
                    onChange={(e) => handlePinChange(e, idx)}
                    maxLength="1"
                  />
                ))}
              </div>

              <Withdraw onClick={handleWithdraw}>
                <span>Confirm Withdrawal</span>
              </Withdraw>

              </>
          )}
        </ModalContent>
      </ModalOverlay>
    </div>
  );
}

export default WalletCard;

