import React, { useEffect, useState } from "react";
import qlogo from "../../assets/png/logo.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoReorderTwoOutline } from "react-icons/io5";
import Sidebar from "../Sidebar/SideBar";
import { useAppContext } from "../../common/AuthContext";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { email, setEmail, role, setRole } = useAppContext();

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token) {
      setEmail(""); // Replace with actual email if needed
      setRole("User"); // Replace with actual role if needed
    }
  }, [setEmail, setRole]);

  useEffect(() => {
    const preventBack = () => {
      window.history.pushState(null, null, window.location.href);
    };
  
    if (email) {
      window.history.pushState(null, null, window.location.href);
      window.addEventListener("popstate", preventBack);
  
      return () => {
        window.removeEventListener("popstate", preventBack);
      };
    }
  }, [email]);
  

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    Cookies.remove("jwt");
    setEmail(""); // Clear email
    setRole(""); // Clear role
    toast.success("Logged out successfully!");
    navigate("/");
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
            <p>
              <Link to="./">Home</Link>
            </p>

            {/* Conditionally render Dashboard and Wallet links */}
            {email && (
              <>
                <p>
                  <Link to="/dashboard">Dashboard</Link>
                </p>
                <p>
                  <Link to="/wallet">Wallet</Link>
                </p>
              </>
            )}

            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
            <p>
              <Link to="/aboutUs">About us</Link>
            </p>
          </Navlist>

          <Signcont>
            {email ? (
              <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
            ) : (
              <>
                <Link to="/login">
                  <LoginButton>Login</LoginButton>
                </Link>
                <Link to="/signup">
                  <SigninButton>Sign up</SigninButton>
                </Link>
              </>
            )}
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

const LogoutButton = styled.button`
  padding: 8px 24px;
  border-radius: 4px;
  background-color: #f54242;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c70000;
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
