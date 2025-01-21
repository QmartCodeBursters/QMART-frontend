// /src/components/Balance.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import AxiosToastError from '../../utilis/AxiosToastError';
import Axios from '../../utilis/Axios';
import DropdownMenu from '../../static/Sidebar/Dropdownmenu';  // Ensure you import DropdownMenu correctly

import { FaHome, FaUser, FaHistory, FaQrcode, FaWallet, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

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
`;

const BalanceCard = styled.div`
  background: linear-gradient(90deg, rgba(27, 99, 146, 1), #55a0d1);
  padding: 30px;
  border-radius: 20px;
  color: white;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? '#fff' : '#FA8232;')};
  color: ${(props) => (props.primary ? 'rgba(27, 99, 146, 1)' : '#fff')};
  font-weight: bold;

  &:hover {
    opacity: 0.9;
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
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 5;
`;

const Balance = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();
  const [merchantDetails, setMerchantDetails] = useState({
    accountBalance: 0,
    accountNumber: '',
    businessName: '',
    businessRegNumber: '',
    businessDescription: '',
    role: '',
  });

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchMerchantDetails = async () => {
    try {
      const response = await Axios({
        method: 'GET',
        url: summaryAPI.fetchUser.url,
      });

      console.log('API Response:', response.data);

      if (response.data) {
        setMerchantDetails({
          accountBalance: response.data.accountBalance || 0,
          accountNumber: response.data.accountNumber || '',
          businessName: response.data.businessName || 'Default Business Name',
          businessRegNumber: response.data.businessRegNumber || '',
          businessDescription: response.data.businessDescription || '',
          role: response.data.role || '',
          firstName: response.data.firstName || '',
        });

        toast.success('Details fetched successfully!');
      } else {
        toast.error('Failed to fetch merchant details.');
      }
    } catch (error) {
      console.error('Error fetching merchant details:', error);
      AxiosToastError(error) || 'Error fetching details. Please try again.';
    }
  };

  useEffect(() => {
    fetchMerchantDetails();
  }, []);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleNavigation = (route) => {
    navigate(route);
    closeDropdown();
  };

  const handleLogout = async () => {
    try {
      const response = await Axios({
        ...summaryAPI.logOut,
      });

      if (response.data.error) {
        toast.error(response.data.message || 'Something went wrong');
        return;
      }

      localStorage.clear();
      sessionStorage.clear();
      setIsLoggedIn(false);

      toast.success('Logout successful!');

      navigate('/', { replace: true });
      closeDropdown();
    } catch (error) {
      console.error('Logout Error:', error.message);
      toast.error('Failed to log out.');
    }
  };

  return (
    <Container>
      {/* Overlay for dropdown menu */}
      <Overlay isOpen={isDropdownOpen} onClick={closeDropdown} />

      {/* Dropdown menu */}
      <DropdownMenu
        isOpen={isDropdownOpen}
        closeDropdown={closeDropdown}
        handleNavigation={handleNavigation}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* Header */}
      <Header>
        <LeftSection>
          <span className="hamburger" onClick={toggleDropdown}>
            ☰
          </span>
          <h5>Dashboard</h5>
        </LeftSection>
        <RightSection>
          <h1>
            Welcome,{' '}
            {merchantDetails.role === 'customer'
              ? merchantDetails.firstName
              : merchantDetails.businessName}{' '}
            👌
          </h1>
          <p>{currentTime.toLocaleString()}</p>
        </RightSection>
      </Header>

      {/* Balance Card */}
      <BalanceCard>
        <p>
          Dear{' '}
          {merchantDetails.role === 'customer'
            ? merchantDetails.firstName
            : merchantDetails.businessName || 'Merchant'},
          here is your balance:{' '}
          <span onClick={toggleBalanceVisibility}>
            {isBalanceVisible ? '👁️' : '👁️‍🗨️'}
          </span>
        </p>
        <h2>
          {isBalanceVisible
            ? `₦${merchantDetails.accountBalance.toLocaleString()}`
            : '₦****'}
        </h2>
        <ButtonGroup>
          {merchantDetails.role === 'customer' && isLoggedIn ? (
            <Button primary onClick={() => navigate('/UserScan')}>
              Make Payment
            </Button>
          ) : merchantDetails.role === 'merchant' && isLoggedIn ? (
            <Button primary onClick={() => navigate('/ReceivePayment')}>
              Receive Payment
            </Button>
          ) : null}
          {isLoggedIn && (
            <Button onClick={() => navigate('/wallet')}>Withdraw Funds</Button>
          )}
        </ButtonGroup>
      </BalanceCard>
    </Container>
  );
};

export default Balance;
