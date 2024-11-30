import React from "react";
import styled from "styled-components";
import Qmart from "../chooserole/images/Qmartlogo.png";


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5rem 2rem 5rem;
  margin: 0px;
  background-color: #004a79;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  align-items: center;

  img {
    height: 34px;
    width: 39px;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  .dashboard {
    display: flex;
    gap: 5px;
  }

  a {
    color: grey;
    margin: 0 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline; /* Optional for better usability */
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;

    a {
      margin: 0.5rem 0.5rem;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;

  button {
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;

    &.login-btn {
      background-color: transparent;
      color: white;
      border: 1px solid #ff8c00;
      border-radius: 8px;
      width: 100px;
      padding: 10px 0;

      &:hover {
        text-decoration: underline; /*Optional hover effect*/
        background-color: #ff8c00; /*changes background on hover */
      }
    }

    &.signup-btn {
      background-color: #ff8c00;
      color: white;
      border-radius: 5px;

      &:hover {
        background-color: #e57a00; /* Slightly darker shade on hover */
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    button {
      margin: 0.5rem 0;
    }
  }
`;

export default function AppHeader() {
  return (
    <Header>
      <Logo>
        <img src={Qmart} alt="" />
        <Logo>QMart</Logo>
      </Logo>
      <Nav>
        <a href="/">Home</a>
        <a className="dashboard" href="/dashboard">Dashboard</a>
        <a href="#">Wallet</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </Nav>

      <AuthButtons>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </AuthButtons>
    </Header>
  );
}


