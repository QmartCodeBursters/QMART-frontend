import React, { useState, useEffect } from "react";
import styled from "styled-components";
import innerbg from "../../assets/png/innerbg.png";
import Card from "../../assets/svg/card.svg";
import { Link } from "react-router-dom";

// Mock API to simulate fetching the wallet balance, name, and account number
const fetchWalletData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        balance: 1156734534.45, // Simulated balance (in number format)
        walletName: "Aserikan Moshood Adetola", // Static wallet name
        accountNumber: "012345678", // Static account number
      });
    }, 1000); // Simulate a delay of 1 second
  });
};

const BgColor = styled.div`
  width: 100%;
  background-image: url(${innerbg});
  background-color: #edeff2;
  background-size: contain;
  background-position: top;
  height: auto;
`;

const Container = styled.div`
  max-width: 1280px;
  width: 85%;
  margin: 70px auto;
  padding: 0px 10px;
  min-height: calc(100vh - 70px);
  padding-bottom: 30px;
  padding-top: 20px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 5px;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  width: 90%;
`;

const Text = styled.div`
  padding: 20px 0 5px 5px;
  font-size: 12px;
`;

const Flexed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* @media (max-width: 800px) {
    display: block;
    padding-top: 20px;
  } */
  @media (max-width: 800px) {
    flex-direction: column; 
    padding-top: 20px;
  }

  @media (min-width: 820px) and (max-width: 1240px) {
    gap: 50px; 
  }
`;

const Flex = styled.div`
  padding: 3px 0;
  width: 50%;
  img {
    width: 320px;
  }

  @media (max-width: 800px) {
    margin: auto;
    display: block;
    width: 100%;
    img {
      margin-bottom: 5px;
      width: 97%;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 90%;
    }
  }
`;

const FlexText = styled.div`
  padding: 10px 40px 40px 20px;
  width: 50%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2.5rem;
  border-radius: 10px;
  #settings {
    width: 100%;
    text-align: center;
    padding: 10px 0 30px 0;
  }
  div {
    margin: 20px auto;
    input {
      width: 90%;
      padding: 10px 7px;
      font-size: 16px;
      border-radius: 5px;
      margin-top: 5px;
      border: 1px solid #ccc;
      background-color: white;
      outline: none;
    }
  }

  @media (max-width: 800px) {
    margin-top: 15px;
    width: 100%; 
    padding: 20px;
    div {
      text-align: left;
      padding: 0;
      input {
        width: 85%;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    div {
      input {
        font-size: 14px;
      }
    }
  }
`;

const Image = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 12px;
    color: white;
  }
  @media (max-width: 800px) {
    text-align: center;

    p {
      right: 5px;
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
  align-items: flex-start;
  span {
    font-size: 12px;
    color: white;
    padding-bottom: 5px;
  }
  #balance {
    position: relative;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
  }
  @media (max-width: 800px) {
    #balance {
      font-size: 22px;
      width: 190px;
    }
  }

  @media (max-width: 480px) {
    #balance {
      font-size: 20px;
    }
  }
`;

const Save = styled.p`
  text-align: center;
  margin: auto;
  border-color: transparent;
  background-color: #fa8232;
  color: white;
  border-radius: 4px;
  padding: 10px;
  width: 56%;
  font-size: 14px;

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 50%;
    font-size: 12px;
  }
`;

const Styledlink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const EyeIcon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
`;

const WithdrawalForm = styled.div`
  margin-top: 5px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;

  p {
    text-align: center;
    margin-bottom: 20px;
  }

  div {
    margin: 10px 0;
    input {
      width: 85%;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
  }

  button {
    width: 50%;
    padding: 12px;
    font-size: 16px;
    background-color: #fa8232;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    button {
      width: 60%;
    }
  }
`;

function UserWalletSettings() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [balance, setBalance] = useState(null);
  const [walletName, setWalletName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pinVisible, setPinVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getWalletData = async () => {
      const data = await fetchWalletData();
      setBalance(data.balance);
      setWalletName(data.walletName);
      setAccountNumber(data.accountNumber);
    };

    getWalletData();
  }, []);

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  const togglePinVisibility = () => {
    setPinVisible(!pinVisible);
  };

  const handleSaveChanges = () => {
    if (newPin && confirmPin) {
      setModalVisible(true);
    }
  };

  const handlePasswordSubmit = () => {
    if (password) {
      alert("PIN changed!");
      setModalVisible(false);
    } else {
      alert("Please enter your password.");
    }
  };

  const formattedBalance =
    balance !== null ? new Intl.NumberFormat().format(balance) : " ";

  return (
    <>
      <BgColor>
        <Container>
          <Wrapper>
            <Flexed>
              <Flex>
                <Text>
                  <Styledlink to="/wallet">
                    <p>Back</p>
                  </Styledlink>
                </Text>
                <Image>
                  <img src={Card} alt="ATM card" />
                  <Bal>
                    <span id="wallet">
                      Wallet Balance:{" "}
                      <span
                        onClick={toggleBalanceVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        👁️
                      </span>
                    </span>
                    <span id="balance">
                      {balance !== null
                        ? balanceVisible
                          ? `₦${formattedBalance}`
                          : "****"
                        : " "}
                    </span>
                  </Bal>
                </Image>

                <WithdrawalForm>
                  <p>Withdrawal Details</p>
                  <div>
                    <input type="text" placeholder="Bank Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Account Name" />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Account Number"
                      maxLength={10}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Create New Pin"
                      maxLength={4}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm Pin"
                      maxLength={4}
                    />
                  </div>
                  <div className="button-wrapper">
                    <button>Submit Details</button>
                  </div>
                </WithdrawalForm>
              </Flex>

              <FlexText>
                <p id="settings">Wallet Settings</p>
                <div>
                  <div>
                    <p>Wallet Name</p>
                    <input type="text" value={walletName} readOnly />
                  </div>
                  <div>
                    <p>Account Number</p>
                    <input type="text" value={accountNumber} readOnly />
                  </div>
                  <div>
                    <p>Change Pin</p>
                    <div style={{ position: "relative" }}>
                      <input
                        type={pinVisible ? "text" : "password"}
                        value={oldPin}
                        onChange={(e) => setOldPin(e.target.value)}
                        placeholder="Enter old PIN"
                        maxLength={4}
                      />
                      <EyeIcon onClick={togglePinVisibility}>👁️</EyeIcon>
                    </div>
                  </div>
                  <div>
                    <div style={{ position: "relative" }}>
                      <input
                        type={pinVisible ? "text" : "password"}
                        value={newPin}
                        onChange={(e) => setNewPin(e.target.value)}
                        placeholder="Enter new PIN"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div>
                    <div style={{ position: "relative" }}>
                      <input
                        type={pinVisible ? "text" : "password"}
                        value={confirmPin}
                        onChange={(e) => setConfirmPin(e.target.value)}
                        placeholder="Confirm new PIN"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>
                <Save onClick={handleSaveChanges}>Save Changes</Save>
              </FlexText>
            </Flexed>
          </Wrapper>
        </Container>
      </BgColor>

      {modalVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        >
          <div
            style={{
              width: "300px",
              margin: "auto",
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <h3>Please enter your password to save changes</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{ padding: "10px", width: "80%", marginBottom: "20px" }}
            />
            <button onClick={handlePasswordSubmit}>Submit</button>
            <button
              onClick={() => setModalVisible(false)}
              style={{
                backgroundColor: "gray",
                marginTop: "10px",
                color: "white",
                padding: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UserWalletSettings;

