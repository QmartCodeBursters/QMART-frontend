import React from "react";
import styled from "styled-components";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function changePassword (){
  return (
    <Container>
      <PasswordContainer>
        <header>Change Password</header>

        
        <PasswordSection>
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
              Confirm Password <br /> <input type="text,number"/>
              <i class="far fa-eye"></i>

            </label>
          </NewPass>


          <button>Change Password </button>

        </PasswordSection>
      </PasswordContainer>
    </Container>
  );
};

const Container = styled.div`
 background-color: #edeff2;
  width: 100%;
  padding: 20px 15px;
  font-size: 14px;
  color: #1a1a1a;
  display: flex;
  justify-content: center;
`;
const PasswordContainer = styled.div`
 background-color: #ffffff;
  width: 90%;
  max-width: 1280px;
  margin: auto;
  margin-bottom:4rem;
  padding: 1rem;
  border: 1px solid #e6e6e6;
  border-radius: 5px;

  header {
    font-weight: 600;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0px 1px #e5e5e5;
  }
`;

const PasswordSection = styled.div`
  padding-left: 15px;
  /* display: flex; */
  /* flex-direction: column; */

  input {
    width: 99%;
    /* max-width: 500px; */
    margin-top: 5px;
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
}
    button{
      width: 14%;
      /* max-width: 150px; */
      padding: 16px 20px;
      border: none;
      border-radius: 8px;
      color: #ffffff;
      background-color: #fa8232;
      margin-top:25px;
      margin-bottom: 20px;
      font-size: 12px;
      text-align: center;
      cursor: pointer;

      @media (max-width: 768px) {
      width: 28%;
    }

  }
`;

const NewPass = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  label {
    width: 48.2%;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid #e6e6e6;
  }
`;
