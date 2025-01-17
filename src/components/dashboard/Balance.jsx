

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
  animation: slideInFromTop 1s ease-out;

 

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
    font-family: 'Poppins', sans-serif;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) =>
    props.primary ? "#fff" : "#FA8232;"};
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
  height: 100vh;
  /* border-radius: 0px 20px; */
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
    border-radius: 0px 0px 20px 0px;
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




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaHistory, FaQrcode, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Balance = ({ storeName, balance, role }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track login state
  const [currentTime, setCurrentTime] = useState(new Date()); // State for time
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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
    navigate(route);
    closeDropdown();
  };

  const disableBackNavigation = () => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  };

  const handleLogout = () => {
    // Clear storage
    localStorage.clear();
    sessionStorage.clear();
    setIsLoggedIn(false); // Update login state

    // Show success toast
    toast.success("Logout successful!");

    // Disable browser back navigation
    disableBackNavigation();

    // Navigate to home
    navigate("/", { replace: true });
    closeDropdown();
  };

  return (
    <Container>
      {/* Overlay for dropdown menu */}
      <Overlay isOpen={isDropdownOpen} onClick={closeDropdown} />

      {/* Dropdown menu */}
      <DropdownMenu className={isDropdownOpen ? "open" : ""}>
        {isLoggedIn && (
          <>
            <DropdownItem onClick={() => handleNavigation("/profile")}>
              <FaUser /> Profile
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/paymenthistory")}>
              <FaHistory /> Payment History
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/QRcode")}>
              <FaQrcode /> QR Code Management
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/notification-settings")}>
              <FaBell /> Notification Settings
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/settings")}>
              <FaCog /> Account Settings
            </DropdownItem>
          </>
        )}
        <DropdownItem onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </DropdownItem>
      </DropdownMenu>

      {/* Header */}
      <Header>
        <LeftSection>
          <span className="hamburger" onClick={toggleDropdown}>
            ☰
          </span>
          <h5>Dashboard</h5>
        </LeftSection>
        <RightSection>
          <h1>Welcome {storeName} 👌</h1>
          <p>{currentTime.toLocaleString()}</p>
        </RightSection>
      </Header>

      {/* Navbar */}
      <nav>
        {isLoggedIn ? (
          // Links for logged-in users
          <>
            {/* <a href="/dashboard">Dashboard</a>
            <a href="/wallet">Wallet</a>
            <a href="/profile">Profile</a> */}
          </>
        ) : (
          // Links for non-logged-in users
          <>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </>
        )}
      </nav>

      {/* Balance Card */}
      <BalanceCard>
        <p>
          Dear {storeName}, here is your balance:{" "}
          <span onClick={toggleBalanceVisibility}>
            {isBalanceVisible ? "👁️" : "👁️‍🗨️"}
          </span>
        </p>
        <h2>{isBalanceVisible ? `₦${balance.toLocaleString()}` : "₦****"}</h2>
        <ButtonGroup>
          {role === "customer" && isLoggedIn ? (
            <Button primary onClick={() => navigate("/UserScan")}>
              Make Payment
            </Button>
          ) : role === "merchant" && isLoggedIn ? (
            <Button primary onClick={() => navigate("/ReceivePayment")}>
              Receive Payment
            </Button>
          ) : null}
          {isLoggedIn && (
            <Button onClick={() => navigate("/wallet")}>Withdraw Funds</Button>
          )}
        </ButtonGroup>
      </BalanceCard>
    </Container>
  );
};

export default Balance;


