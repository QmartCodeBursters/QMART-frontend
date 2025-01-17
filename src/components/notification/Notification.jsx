import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "../../assets/png/bg.png";
import toast from "react-hot-toast";
import axios from "axios";
import AxiosToastError from "../../utilis/AxiosToastError";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    /* background-color: rgba(242, 242, 242, 1); */
    /* background: url(${backgroundImage}) no-repeat center center fixed; */
    background-size: cover;
    margin: 0;
    padding: 0;
    /* font-family: Arial, sans-serif; */
  }
`;

// Styled Components
const Container = styled.div`
  max-width: 550px;
  margin: 100px auto;
  padding: 50px;
  /* margin-top: 5rem; */
  /* background: white; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
  rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
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

const Header = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  color: rgba(27, 99, 146, 1);
`;

const Subtitle = styled.p`
  text-align: center;
  color: gray;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: rgba(27, 99, 146, 1);
`;

const Toggle = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  input {
    display: none;
  }
  .text {
    color: #004a79;
  }
  .status {
    color: ${(props) => (props.enabled ? "#004a79" : "grey")};
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SaveButton = styled.button`
  display: block;
  width: 100%;
  background-color: ${(props) =>
    props.disabled ? "gray" : " #fa8232;"};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
        background-color: #803e00;
      }
`;

// Popup Styling
const PopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const PopUpContent = styled.div`
  background-color: #f4f7f9;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PopUpHeader = styled.h3`
  margin-bottom: 15px;
  color: rgba(27, 99, 146, 1);
`;

const PasswordInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const PopUpButton = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #fa8232;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
        background-color: #803e00;
      }
`;

// Main Component
const NotificationSettings = ({ userId, role }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [paymentsEnabled, setPaymentsEnabled] = useState(true);
  const [withdrawalsEnabled, setWithdrawalsEnabled] = useState(true);
  const [newslettersEnabled, setNewslettersEnabled] = useState(true);
  const [updatesEnabled, setUpdatesEnabled] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!userId || !role) {
      console.error("userId or role is not defined");
      return;
    }
    const fetchSettings = async () => {
      try {
        const response = await axios.get(`/api/notifications/${userId}/${role}`);
        const data = response.data;
  
        setNotificationsEnabled(data.notificationsEnabled);
        setEmailEnabled(data.emailEnabled);
        setSmsEnabled(data.smsEnabled);
        setPaymentsEnabled(data.paymentsEnabled);
        setWithdrawalsEnabled(data.withdrawalsEnabled);
        setNewslettersEnabled(data.newslettersEnabled);
        setUpdatesEnabled(data.updatesEnabled);
      } catch (error) {
        AxiosToastError(error);
        console.error("Error fetching settings:", error.message);
      }
    };
  
    fetchSettings();
  }, [userId, role]);

  const handleSave = () => {
    setShowPopUp(true);
  };

  const handlePasswordSubmit = () => {
    if (password === "") {
      toast.error("Please input your password.");
      // alert("Please input your password.");
    } else {
      toast.success("Settings saved successfully!");
      setShowPopUp(false);
      setPassword("");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Notification Settings</Header>
        <Subtitle>Choose how you want to receive alerts and updates.</Subtitle>

        <Section>
          <SectionTitle>Allow Notifications</SectionTitle>
          <Toggle enabled={notificationsEnabled}>
            <span className="text">Enable Notifications</span>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            />
            <span className="status">
              {notificationsEnabled ? "ON" : "OFF"}
            </span>
          </Toggle>
        </Section>

        {notificationsEnabled && (
          <>
            <Section>
              <SectionTitle>Delivery Methods</SectionTitle>
              <CheckboxContainer>
                <Toggle enabled={emailEnabled}>
                  <span className="text">Email Notifications</span>
                  <input
                    type="checkbox"
                    checked={emailEnabled}
                    onChange={() => setEmailEnabled(!emailEnabled)}
                  />
                  <span className="status">{emailEnabled ? "ON" : "OFF"}</span>
                </Toggle>

                <Toggle enabled={smsEnabled}>
                  <span className="text">SMS Notifications</span>
                  <input
                    type="checkbox"
                    checked={smsEnabled}
                    onChange={() => setSmsEnabled(!smsEnabled)}
                  />
                  <span className="status">{smsEnabled ? "ON" : "OFF"}</span>
                </Toggle>
              </CheckboxContainer>
            </Section>

            <Section>
              <SectionTitle>Notification Types</SectionTitle>
              <CheckboxContainer>
                <Toggle enabled={paymentsEnabled}>
                  <span className="text">Received Payments</span>
                  <input
                    type="checkbox"
                    checked={paymentsEnabled}
                    onChange={() => setPaymentsEnabled(!paymentsEnabled)}
                  />
                  <span className="status">
                    {paymentsEnabled ? "ON" : "OFF"}
                  </span>
                </Toggle>

                <Toggle enabled={withdrawalsEnabled}>
                  <span className="text">Successful Withdrawals</span>
                  <input
                    type="checkbox"
                    checked={withdrawalsEnabled}
                    onChange={() =>
                      setWithdrawalsEnabled(!withdrawalsEnabled)
                    }
                  />
                  <span className="status">
                    {withdrawalsEnabled ? "ON" : "OFF"}
                  </span>
                </Toggle>

                <Toggle enabled={newslettersEnabled}>
                  <span className="text">Newsletters</span>
                  <input
                    type="checkbox"
                    checked={newslettersEnabled}
                    onChange={() =>
                      setNewslettersEnabled(!newslettersEnabled)
                    }
                  />
                  <span className="status">
                    {newslettersEnabled ? "ON" : "OFF"}
                  </span>
                </Toggle>

                <Toggle enabled={updatesEnabled}>
                  <span className="text">System Updates</span>
                  <input
                    type="checkbox"
                    checked={updatesEnabled}
                    onChange={() => setUpdatesEnabled(!updatesEnabled)}
                  />
                  <span className="status">
                    {updatesEnabled ? "ON" : "OFF"}
                  </span>
                </Toggle>
              </CheckboxContainer>
            </Section>
          </>
        )}

        <SaveButton
          disabled={
            !notificationsEnabled &&
            !emailEnabled &&
            !smsEnabled &&
            !paymentsEnabled &&
            !withdrawalsEnabled &&
            !newslettersEnabled &&
            !updatesEnabled
          }
          onClick={handleSave}
        >
          Save Changes
        </SaveButton>
      </Container>

      {/* Pop-up */}
      <PopUp show={showPopUp}>
        <PopUpContent>
          <PopUpHeader>Enter your password</PopUpHeader>
          <PasswordInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PopUpButton onClick={handlePasswordSubmit}>
            Confirm Changes
          </PopUpButton>
        </PopUpContent>
      </PopUp>
    </>
  );
};

export default NotificationSettings;
