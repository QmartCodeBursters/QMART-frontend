import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../assets/svg/card.svg";
import { IoMdArrowDropright } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const banks = [
  "Access Bank",
  "Zenith Bank",
  "First Bank",
  "Guaranty Trust Bank (GTB)",
  "United Bank for Africa (UBA)",
  "Fidelity Bank",
  "Stanbic IBTC",
  "Ecobank",
  "Union Bank",
  "Skye Bank",
];

function UserWalletCard({ balance, setBalance }) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addMoneyModalOpen, setAddMoneyModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [addAmount, setAddAmount] = useState(""); // Amount to add
  const [cardNumber, setCardNumber] = useState(""); // Card number state
  const [expiryDate, setExpiryDate] = useState(""); // Expiry date state
  const [cvv, setCvv] = useState(""); // CVV state
  const [cardPin, setCardPin] = useState(["", "", "", ""]); // Card pin state
  const [pinVisible, setPinVisible] = useState([false, false, false, false]); // Pin visibility state
  const [amount, setAmount] = useState(""); // Transfer amount state
  const [timer, setTimer] = useState(600); // Timer in seconds (10 minutes)
  const [transferDetails, setTransferDetails] = useState({
    accountNumber: "",
    bank: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");  // Error message state

  useEffect(() => {
    let interval;
    if (timer > 0 && isModalOpen) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, isModalOpen]);

  const generateAccountNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  const getRandomBank = () => {
    return banks[Math.floor(Math.random() * banks.length)];
  };

  const handleMakeTransfer = () => {
    setTransferDetails({
      accountNumber: generateAccountNumber(),
      bank: getRandomBank(),
    });
    setPaymentMethod("transfer");
    setTimer(600); // Reset the timer to 10 minutes
  };

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setTimer(600); // Reset the timer when modal closes
      setErrorMessage(""); // Clear any error message when modal closes
    }
  };

  const toggleAddMoneyModal = () => {
    setAddMoneyModalOpen(!addMoneyModalOpen);

    // Reset all relevant states to their original values
    setPaymentMethod(null);  // Reset the payment method to null
    setAddAmount("");  // Reset the amount to add
    setCardNumber("");  // Reset card number
    setExpiryDate("");  // Reset expiry date
    setCvv("");  // Reset CVV
    setCardPin(["", "", "", ""]);  // Reset card PIN
    setAmount("");  // Reset transfer amount
    setTransferDetails({ accountNumber: "", bank: "" }); // Reset transfer details

    // Reset the balance on the card to zero
    setBalance(0);  // Assuming balance comes from the parent, reset it to zero

    setErrorMessage(""); // Clear any error message when the Add Money modal closes
  };

  const handleWithdraw = () => {
    if (cardPin.join("").length === 4) {
      setErrorMessage(""); // Clear any previous errors
      setIsModalOpen(false);
      setShowSuccessMessage(true);
    } else {
      setErrorMessage("Please enter a 4-digit PIN."); // Set error message
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleCardPinChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newPin = [...cardPin];
      const newPinVisible = [...pinVisible];

      newPin[index] = value;
      setCardPin(newPin);

      if (value) {
        newPinVisible[index] = true;
        setPinVisible(newPinVisible);

        setTimeout(() => {
          newPinVisible[index] = false;
          setPinVisible([...newPinVisible]);
        }, 200);

        if (index < 3) {
          document.getElementById(`card-pin-${index + 1}`).focus();
        }
      } else if (!value && index > 0) {
        document.getElementById(`card-pin-${index - 1}`).focus();
      }
    }
  };

  // Handle Card Number Input
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 16) {
      setCardNumber(value);
    }
  };

  // Handle Expiry Date Input
  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 4) {
      if (value.length >= 3) {
        value = value.slice(0, 2) + "/" + value.slice(2, 4); // Insert slash after MM
      }
      setExpiryDate(value);
    }
  };

  // Handle CVV Input
  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Only digits allowed
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    if (value.length <= 3) {
      setAmount(value);
    }
  };

  const handleProceedClick = () => {
    if (amount && !isNaN(amount) && Number(amount) > 0) {
      setTransferDetails({
        ...transferDetails,
        amount: amount,  // Store the amount in the transfer details
      });
      setAddMoneyModalOpen(false);  // Close the modal
      console.log("Proceeding with transfer details:", transferDetails);
    } else {
      setErrorMessage("Please enter a valid amount."); // Set error message
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
          <AddMoney onClick={toggleAddMoneyModal}>
            <span>Add Money</span>
            <span>
              <IoMdArrowDropright size={20} />
            </span>
          </AddMoney>
          <Withdraw onClick={toggleModal}>
            <span>Withdraw</span>
            <span>
              <IoMdArrowDropright size={20} />
            </span>
          </Withdraw>
        </Button>
      </Flex>

      {/* Add Money Modal */}
      <ModalOverlay isOpen={addMoneyModalOpen}>
        <ModalContent>
          <CloseButton onClick={toggleAddMoneyModal}>
            <IoClose />
          </CloseButton>

          <h3>Add Money to Wallet</h3>

          {/* Payment Method Selector */}
          {!paymentMethod && (
            <>
              <ButtonOption onClick={() => setPaymentMethod("bank_card")}>
                <strong>Add Bank Card</strong>
              </ButtonOption>
              <ButtonOption onClick={() => {setPaymentMethod("transfer"); handleMakeTransfer();}}>
                <strong>Make Transfer</strong>
              </ButtonOption>
              <ButtonOption onClick={() => setPaymentMethod("ussd")}>
                <strong>Make USSD Payment</strong>
              </ButtonOption>
            </>
          )}

          {/* Display error message */}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          {/* Bank Card Form */}
          {paymentMethod === "bank_card" && (
            <>
              <h4>Enter Bank Card Details</h4>

              {/* Card Number Input */}
              <label>Card Number</label>
              <Input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength="16"
                placeholder="Enter 16-digit card number"
              />

              {/* Expiry Date Input */}
              <label>Expiry Date (MM/YY)</label>
              <Input
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                maxLength="5"
                placeholder="MM/YY"
              />

              {/* CVV Input */}
              <label>CVV</label>
              <Input
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                maxLength="3"
                placeholder="Enter 3-digit CVV"
              />

              {/* Card Pin Input */}
              <label>Card Pin</label>
              <div style={{ display: "flex", gap: "10px", margin: "10px 80px" }}>
                {cardPin.map((digit, idx) => (
                  <PinInput
                    key={idx}
                    id={`card-pin-${idx}`}
                    type="text"
                    value={pinVisible[idx] ? digit : digit ? "\u2022" : ""}
                    onChange={(e) => handleCardPinChange(e, idx)}
                    maxLength="1"
                  />
                ))}
              </div>

              {/* Amount to Add */}
              <label>Amount to Add</label>
              <Input
                type="number"
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value)}
                placeholder="Enter amount to add"
              />

              <Withdraw onClick={() => alert("This is where you would normally proceed to payment.")}>
                <span>Add Money </span>
              </Withdraw>
            </>
          )}

          {/* Transfer Modal */}
          {paymentMethod === "transfer" && !amount && (
            <>
              <label>Enter Amount to Transfer</label>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Enter Amount in Naira"
                style={{
                  width: "100%", 
                  padding: "10px", 
                  fontSize: "16px", 
                  borderRadius: "5px", 
                  border: "1px solid #ccc", 
                  outline: "none", 
                  boxSizing: "border-box", 
                  marginBottom: "15px",
                }}
              />

              <Withdraw onClick={handleProceedClick} disabled={!amount || isNaN(amount) || Number(amount) <= 0}>
                <span>Proceed</span>
              </Withdraw>
            </>
          )}

          {amount && (
            <>
              <h4>Transfer Details</h4>
              <p>
                <strong>Account Number:</strong> {transferDetails.accountNumber}
              </p>
              <p>
                <strong>Bank:</strong> {transferDetails.bank}
              </p>
              <p><strong>Amount:</strong>₦{amount}</p> 
              <p>
                <strong>Payment Processor:</strong> Paystack
              </p>

              <Countdown>{formatTime(timer)}</Countdown>

              {timer <= 0 ? (
                <TransferButton>
                  <span>I've Sent the Money</span>
                </TransferButton>
              ) : (
                <TransferButton disabled>
                  <span>I've Sent the Money</span>
                </TransferButton>
              )}
            </>
          )}

        </ModalContent>
      </ModalOverlay>

      {/* Withdraw Modal */}
      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={toggleModal}>
            <IoClose />
          </CloseButton>
          <h3>Withdraw Funds</h3>

          {/* Display fixed account details */}
          <div>
            <strong>Account Number:</strong> 1234567890
          </div>
          <div>
            <strong>Bank:</strong> Sail Bank
          </div>
          <div>
            <strong>Account Name:</strong> Moshood Aserikan
          </div>

          <label>Enter Amount to Withdraw</label>
          <Input 
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="Enter amount to withdraw"
          />

          <label>Enter Card Pin</label>
          <div style={{ display: "flex", gap: "10px", margin: "10px 80px" }}>
            {cardPin.map((digit, idx) => (
              <PinInput
                key={idx}
                id={`card-pin-${idx}`}
                type="text"
                value={pinVisible[idx] ? digit : digit ? "\u2022" : ""}
                onChange={(e) => handleCardPinChange(e, idx)}
                maxLength="1"
              />
            ))}
          </div>

          <Withdraw
            onClick={handleWithdraw}
            disabled={!withdrawAmount || cardPin.join("").length !== 4}
          >
            <span>Withdraw</span>
          </Withdraw>
        </ModalContent>
      </ModalOverlay>
    </div>
  );
}




// Styled components for error message display
const ErrorMessage = styled.div`
  color: red;
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
`;






// Styled components

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
const SuccessMessage = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
`;

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
  margin: 0 auto;
 
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

const AddMoney = styled.p`
  display: flex;
  align-items: center;
  background-color: #ff3b30;
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
    bottom: 15px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const PinInput = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 70px;
  right: 160px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ButtonOption = styled.div`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const Countdown = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: red;
`;

const TransferButton = styled.div`
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #fa8232;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  max-width: 200px;
  text-align: center;
  font-weight: bold;
  margin: 0 auto;
  &:hover {
    background-color: #f85e0a;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default UserWalletCard;
