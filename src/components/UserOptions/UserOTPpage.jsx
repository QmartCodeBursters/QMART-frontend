import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import innerbg from "../../assets/png/innerbg.png";



// Authentication Page Layout
const UsetOTPpage = () => {
  return (
    <Wrapper>
    <Container>
      <Title>Authentication</Title>
      <SubText>Enter the One time OTP code sent to your registered number</SubText>
      <OTPContainer>
        <OTPInput type="text" maxLength="1" />
        <OTPInput type="text" maxLength="1" />
        <OTPInput type="text" maxLength="1" />
        <OTPInput type="text" maxLength="1" />
        <OTPInput type="text" maxLength="1" />
        <OTPInput type="text" maxLength="1" />
      </OTPContainer>
      <Link to="/loading"><ConfirmButton>Confirm Payment</ConfirmButton></Link>
      <FooterText>
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy.
      </FooterText>
    </Container>
    </Wrapper>
  );
};

export default UsetOTPpage;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  width: 100%;
  /* align-items: center; */
  justify-content: center;
  background-color:rgba(242, 242, 242, 1);
  background-image: url(${innerbg});
  background-size: contain;
  background-position: top;
  padding-top: 200px;
  padding-bottom: 150px;
`
const Container = styled.div`
  background-color: rgba(255,255,255,1);
  padding:50px 30px;
  max-width: 1280px;
  border-radius: 5px;
  box-shadow:rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  /* font-family: Arial, sans-serif; */
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const SubText = styled.p`
  font-size: 1.0rem;
  color: rgba(10,13,19,1);
  margin-bottom: 15px;
  /* text-align: center; */
`;

const OTPContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const OTPInput = styled.input`
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const ConfirmButton = styled.button`
  width: 100%;
  max-width: 400px;
  margin-top: 25px;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #ff7a00;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e66a00;
  }
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  color: #999;
  /* text-align: center; */
  margin-top: 20px;
  max-width: 400px;
`;

