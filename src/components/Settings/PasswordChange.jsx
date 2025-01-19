import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Button } from "./AddressForm";

export default function changePassword (){

  const [ data, setData ] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <Container>
      <PasswordContainer>
        <header>Change Password</header>
        
        <PasswordSection>

          <form>
            <label>
              New Password <br /> <input type="text"  placeholder="Enter new password" />
            </label>

            <label>
              Confirm Password <br /> <input type="text,number" placeholder="Confirm password"/>
              <i class="far fa-eye"></i>
            </label>

            <ChangeButton>Change Password </ChangeButton>

          </form>
          
        </PasswordSection>
      </PasswordContainer>
    </Container>
  );
};

const Container = styled.div`
 background-color: #edeff2;
  width: 55.5%;
  padding-top: 1rem;
  color: #1a1a1a;
  display: flex;
  justify-content: center;
  margin: auto;
  

  @media (max-width: 768px) {
    /* margin-top: 95px; */
    width: 88%;
  }
`;
const PasswordContainer = styled.div`
 background-color: #ffffff;
  width: 90%;
  max-width: 1280px;
  margin: auto;
  margin-bottom:4rem;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  

  header {
    font-weight: 600;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0px 1px #e5e5e5;
  }

  form {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0 120px;

  label {
    width: 100%;
  }

  input {
    width: 99%;
    padding: 0.8rem;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid #e6e6e6;
    outline: none;
  }
  }
`;
const PasswordSection = styled.div`
  padding: 32px;

  input {
    width: 99%;
    margin-top: 5px;
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
}
`;

const ChangeButton =styled(Button)`
    margin-top: 32px;
`

