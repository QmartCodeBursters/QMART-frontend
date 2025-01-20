import React from 'react';
import { FaUser, FaHistory, FaQrcode, FaBell, FaCog, FaSignOutAlt, FaWallet, FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify'; // Make sure to import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import Axios from '../../utilis/Axios';
import summaryAPI from '../../common/summaryAPI';


const DropdownMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0; /* Ensures the dropdown menu starts from the top */
  height: 100%; /* Ensure it covers the full height */
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

const DropdownMenu = ({ isOpen, closeDropdown, handleNavigation, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Function to disable back navigation after logout
  const disableBackNavigation = () => {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, '', window.location.href);
    };
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
      
      // Disable back navigation after logout
      disableBackNavigation();

      navigate('/', { replace: true });
      closeDropdown();
    } catch (error) {
      console.error('Logout Error:', error.message);
      toast.error('Failed to log out.');
    }
  };

  return (
    <DropdownMenuWrapper className={isOpen ? 'open' : ''}>
      {isLoggedIn && (
        <>
          <DropdownItem onClick={() => handleNavigation('/dashboard')}>
            <FaHome /> Dashboard
          </DropdownItem>
          <DropdownItem onClick={() => handleNavigation('/profile')}>
            <FaUser /> Profile
          </DropdownItem>
          <DropdownItem onClick={() => handleNavigation('/paymenthistory')}>
            <FaHistory /> Payment History
          </DropdownItem>
          <DropdownItem onClick={() => handleNavigation('/QRcode')}>
            <FaQrcode /> QR Code Management
          </DropdownItem>
          <DropdownItem onClick={() => handleNavigation('/wallet')}>
            <FaWallet /> Wallet
          </DropdownItem>
          <DropdownItem onClick={() => handleNavigation('/notification-settings')}>
            <FaBell /> Notification Settings
          </DropdownItem>
          <DropdownItem onClick={() => handleNavigation('/settings')}>
            <FaCog /> Account Settings
          </DropdownItem>
        </>
      )}
      <DropdownItem onClick={handleLogout}>
        <FaSignOutAlt /> Logout
      </DropdownItem>
    </DropdownMenuWrapper>
  );
};

export default DropdownMenu;
