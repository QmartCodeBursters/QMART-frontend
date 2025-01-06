import qlogo from "../../assets/png/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoReorderTwoOutline } from "react-icons/io5";
import {
  IoPersonOutline,
  IoListOutline,
  IoQrCodeOutline,
  IoSettingsOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import Sidebar from "../Sidebar/SideBar";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Wrapper>
        <Navbar>
          <Logocont>
            <img src={qlogo} alt="logo" />
            <p>Qmart</p>
          </Logocont>

          <Navlist>
            <p><Link to="./">Home</Link></p>
            <p>
  <Link to="/dashboard">
    Dashboard 
  </Link>
</p>

            {/* <DropdownWrapper>
              <Dropdown>
                
                <DropdownMenu>
                  <DropdownItem>
                    <IoPersonOutline /> <Link to="/profile">Profile</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <IoListOutline /> <Link to="/payment-history">Payment History</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <IoQrCodeOutline /> <Link to="/qr-management">QR Code Management</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <IoNotificationsOutline /> <Link to="/notifications">Notification Settings</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <IoSettingsOutline /> <Link to="/account-settings">Account Settings</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </DropdownWrapper> */}

            <p><Link to="/wallet">Wallet </Link></p>
            <p><Link to="/contact">Contact Us </Link></p>
            <p><Link to="/aboutUs">About us </Link></p>
            
          </Navlist>

          <Signcont>
            <Link to="/login">
              <LoginButton>Login</LoginButton>
            </Link>
            <Link to="/signup">
              <SigninButton>Sign up</SigninButton>
            </Link>
          </Signcont>

          <Sidenav onClick={handleToggle}>
            <IoReorderTwoOutline />
          </Sidenav>
        </Navbar>
      </Wrapper>

      {toggle && <Sidebar setDisplay={setToggle} />}
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1b6392;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Navbar = styled.div`
  max-width: 1800px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Navlist = styled.div`
  display: flex;
  gap: 20px;
  font-size: 12px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 15px;
  left: 0;
  background-color: #1b6392;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
  width: 200px;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  font-size: 12px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    background-color: #30506b;
  }
`;

const Logocont = styled.div`
  display: flex;
  color: white;
  font-size: 20px;
  gap: 10px;
  cursor: pointer;

  img {
    width: 35px;
  }
`;

const Signcont = styled.div`
  display: flex;
  gap: 20px;
`;

const LoginButton = styled.button`
  background-color: transparent;
  padding: 8px 24px;
  border-radius: 4px;
  border: 1px solid #fa8232;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #30506b;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SigninButton = styled.button`
  padding: 8px 24px;
  border-radius: 4px;
  background-color: #fa8232;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c96d05;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidenav = styled.div`
  font-size: 40px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
