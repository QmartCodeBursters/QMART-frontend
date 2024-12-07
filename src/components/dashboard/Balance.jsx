import React, { useState } from "react";
import styled from "styled-components";
import { FaUser, FaHistory, FaQrcode, FaBell, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin-top: 4rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h5 {
    font-size: 1.2rem;
    color: rgba(27, 99, 146, 1);
    margin: 0;
  }

  .hamburger {
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
    display: block;
  }
`;

const RightSection = styled.div`
  text-align: right;
  margin-top: 1rem;

  h1 {
    font-size: 1.5rem;
    color: rgba(27, 99, 146, 1);
    margin: 0;
  }

  p {
    color: #888;
    font-size: 0.9rem;
    margin: 0;
  }

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

const BalanceCard = styled.div`
  background: linear-gradient(90deg, rgba(27, 99, 146, 1), #55a0d1);
  padding: 30px;
  border-radius: 20px;
  color: white;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  p {
    margin: 0;
    font-size: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin: 10px 0;
  }
  span {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 20px;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  button {
    flex: 1;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) =>
    props.primary ? "#fff" : "rgba(27, 99, 146, 1)"};
  color: ${(props) => (props.primary ? "rgba(27, 99, 146, 1)" : "#fff")};
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

const DropdownMenu = styled.div`
  position: fixed;
  top: 4.4rem;
  left: 0;
  height: auto;
  border-radius: 20px;
  width: 250px;
  background-color: rgba(27, 99, 146, 1);
  color: white;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  &.open {
    transform: translateX(0);
  }

  @media (max-width: 1024px) {
    width: 200px;
    height: auto;
  }
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 5;
`;



const Balance = ({ storeName, balance }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleNavigation = (route) => {
    navigate(route); // Navigate to the specified route
    closeDropdown(); // Close the dropdown after navigation
  };

  return (
    <Container>
      <Overlay isOpen={isDropdownOpen} onClick={closeDropdown} />
      <DropdownMenu className={isDropdownOpen ? "open" : ""}>
        <DropdownItem onClick={() => handleNavigation("/profile")}>
          <FaUser /> Profile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/paymenthistory")}>
          <FaHistory /> Payment History
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/qrcodemanagement")}>
          <FaQrcode /> QR Code Management
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/notificationsettings")}>
          <FaBell /> Notification Settings
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/accountsettings")}>
          <FaCog /> Account Settings
        </DropdownItem>
      </DropdownMenu>

      <Header>
        <LeftSection>
          <span className="hamburger" onClick={toggleDropdown}>
            ☰
          </span>
          <h5>Dashboard</h5>
        </LeftSection>
        <RightSection>
          <h1>Welcome {storeName} 👌</h1>
          <p>{new Date().toLocaleString()}</p>
        </RightSection>
      </Header>

      <BalanceCard>
        <p>
          Dear {storeName}, here is your balance:{" "}
          <span onClick={toggleBalanceVisibility}>
            {isBalanceVisible ? "👁️" : "👁️‍🗨️"}
          </span>
        </p>
        <h2>{isBalanceVisible ? `₦${balance.toLocaleString()}` : "₦****"}</h2>
        <ButtonGroup>
          <Button primary onClick={() => navigate("/paymenthistory")}>
            Payment History
          </Button>
          <Button onClick={() => navigate("/wallet")}>Withdraw Funds</Button>
        </ButtonGroup>
      </BalanceCard>
    </Container>
  );
};

export default Balance;

