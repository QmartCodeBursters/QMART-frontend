import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import image from "../../assets/png/settingsImg.png";

const AccountSettings = () => {
  return (
    <Container>
      <NavContainer>
        <NavBar>
          <p>Navigation</p>
          <ul>
            <li>
              <a href="#">
                <MdDashboard />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <MdHistory />
                Order History
              </a>
            </li>
            <li>
              <a href="#">
                <IoSettingsOutline />
                Settings
              </a>
            </li>
            <li>
              <a href="#">
                <IoLogInOutline />
                Log-out
              </a>
            </li>
          </ul>
        </NavBar>
      </NavContainer>

      <AcctSettingsContainer>
        <AccountSetting>
          <heading> Account Settings</heading>
          <settingform>
            <left>
              <form action="">
                <label>
                  First Name <br />
                  <input type="text" />
                </label>
                <br />
                <label>
                  Last Name <br />
                  <input type="text" />
                </label>
                <br />
                <label htmlFor="">
                  Email <br />
                  <input type="text" />
                </label>
                <br />
                <label>
                  Phone Number <br />
                  <input type="Number" />
                </label>
                <br /> <br />
                <button>save changes</button>
              </form>
            </left>

            <right>
              <img src={image} alt="" />
              <button>choose image</button>
            </right>
          </settingform>
        </AccountSetting>
      </AcctSettingsContainer>
    </Container>
  );
};

export default AccountSettings;
const Container = styled.div`
  background-color: #edeff2;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 14px;
`;
const NavContainer = styled.div`
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 10px;
  margin-right: -90px;
`;
const NavBar = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #ffffff;
  width: 100%;
  p {
    padding-left: 10px;
    font-weight: 600;
  }
  ul {
    list-style-type: none;
    padding: 2px;
  }
  li {
    line-height: 18px;
  }
  li a {
    text-decoration: none;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    color: #1a1a1a;
    padding: 8px;
  }
  a:hover {
    background-color: #edeff2;
    border-left: 3px solid #20b526;
  }
`;

const AcctSettingsContainer = styled.div`
  background-color: #ffffff;
  width: 70%;
  margin-top: 10px;
  padding-top: 25px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const AccountSetting = styled.div`
  margin-top: -10px;
  width: 100%;
  display: flex;
  flex-direction: column;

  heading {
    font-weight: 600;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-bottom: 10px;
    box-shadow: 1px 1px #e5e5e5;
  }
  settingform {
    display: flex;
    justify-content: space-between;
  }

  form {
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    button {
      padding: 12px 20px;
      width: 8rem;
      border: none;
      border-radius: 4px;
      color: #ffffff;
      background-color: #fa8232;
      margin-top: -15px;
      margin-bottom: 15px;
    }
  }
  input {
    width: 20rem;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
  }

  right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;

    img {
      height: 160px;
      margin-top: -40px;
    }

    button {
      border: none;
      margin-top: 20px;
      padding: 12px 20px;
      border: 2px solid #e6e6e6;
      border-radius: 4px;
    }
  }
`;
