import React from "react";
import styled from "styled-components";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Button } from "./UserAdress";

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
          <ChangeButton>Change Password </ChangeButton>
        </PasswordSection>
      </PasswordContainer>
    </Container>
  );
};
const Container = styled.div`
 background-color: #edeff2;
  width: 100%;
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
  padding: 12px;
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
  padding: 10px;

  input {
    width: 99%;
    margin-top: 5px;
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
}
`;

const ChangeButton =styled(Button) `
margin-top: 25px;
 `

const NewPass = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  label {
    width: 100%;
  }

  input {
    width: 99%;
    padding: 0.8rem;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid #e6e6e6;
  }
`;