import React from "react";
import styled from "styled-components";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const changePassword = () => {
  return (
    <Container>
      <PasswordContainer>
        <header>Change Password</header>

        <PasswordSec>
          <label>
            Current Password <br />
            <input type="text,number" />
          </label>
          <br />
          <br />

          <NewPass>
            <label>
              New Password <br /> <input type="text" value="password" />
            </label>

            <label>
              Confirm Password <br /> <input type="text,number" />
              <i class="far fa-eye"></i>
            </label>
          </NewPass>
          <button>Change Password </button>
        </PasswordSec>
      </PasswordContainer>
    </Container>
  );
};

export default changePassword;

const Container = styled.div`
  background-color: #edeff2;
  max-width: 1280px;
  padding-top: 20px;
  font-size: 14px;
  color: #1a1a1a;
`;
const PasswordContainer = styled.div`
  width: 70%;
  background-color: #ffffff;
  margin: auto;
  margin-right: 48px;
  /* display: flex; */
  /* flex-direction: column; */
  border-radius: 5px;

  header {
    font-weight: 600;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 10px;
    box-shadow: 1px 1px #e5e5e5;
  }
`;

const PasswordSec = styled.div`
  padding-left: 15px;
  input {
    width: 43.5rem;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
  }
  button {
    padding: 12px 20px;
    width: 9rem;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    background-color: #fa8232;
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 12px;
    text-align: center;
  }
`;

const NewPass = styled.div`
  display: flex;
  gap: 10px;

  input {
    width: 21.2rem;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
  }
`;
