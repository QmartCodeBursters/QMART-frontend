import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WalletCard from "./WalletCard";
import TransactionHistory from "./TransactionHistory";
import innerbg from "../../assets/png/innerbg.png";
import DropdownMenu from "../../static/Sidebar/Dropdownmenu";
import { FiMenu } from "react-icons/fi"; 

const Bgcolor = styled.div`
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
  margin: auto;
  margin-top: 70px;
  padding: 30px 10px;
  min-height: calc(100vh - 70px);
  padding-bottom: 30px;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 90%;
  padding-bottom: 40px;
`;

const HamburgerMenu = styled.div`
  position: absolute;
  top: 250x;
  left: 150px;
  z-index: 10;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

function Wallet() {
  const [transactions, setTransactions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  // Mock data for wallet balance
  const storeData = {
    storeName: "QMart Stores",
    balance: 0, // Example balance
  };

  // Mock API call for transactions
  useEffect(() => {
    const fetchTransactions = async () => {
      const mockData = []; // Empty data for now
      setTransactions(mockData);
    };

    fetchTransactions();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState); // Toggle dropdown visibility
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Close the dropdown
  };

  const handleNavigation = (destination) => {
    // Implement navigation logic
    console.log("Navigating to:", destination);
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log("Logging out...");
  };

  return (
    <Bgcolor>
      {/* Hamburger Menu Button */}
      <HamburgerMenu onClick={toggleDropdown}>
        <FiMenu size={30} color="#333" />
      </HamburgerMenu>

      {/* Overlay to close dropdown */}
      {isDropdownOpen && <Overlay onClick={closeDropdown} />}

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <DropdownMenu
          isOpen={isDropdownOpen}
          closeDropdown={closeDropdown}
          handleNavigation={handleNavigation}
          handleLogout={handleLogout}
          isLoggedIn={true}
        />
      )}

      <Container>
        <Wrapper>
          <WalletCard balance={storeData.balance} />
          <TransactionHistory transactions={transactions.slice(0, 4)} />
        </Wrapper>
      </Container>
    </Bgcolor>
  );
}

export default Wallet;
