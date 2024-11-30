import React from "react";
import styled from "styled-components";
import QR from "../../assets/png/QR code .png";

const QrCode = () => {
  return (
    <Container>
      <Header>SCAN HERE</Header>

      <img src={QR} alt="" />

      <h1>SAIL04 SUPERMARKET</h1>

      <Buttons>
        <buttonOne>Share</buttonOne>
        <buttonTwo>Continue Shopping</buttonTwo>
      </Buttons>
    </Container>
  );
};

export default QrCode;

const Container = styled.div`
  background-color: #edeff2;
  max-width: 1280px;
  padding-top: 20px;
  font-size: 14px;
  color: #1a1a1a;
  border: 2px solid gold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 320px;
    height: 320px;
  }
  h1{
    margin-bottom: 120px;
  }
`;

const Header = styled.div`
  font-weight: 900;
  margin-top: 30px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  buttonOne {
    width: 130px;
    padding: 12px 20px;
    background-color: #09456b;
    color: #ffffff;
    text-align: center;
    border-radius: 4px;
    border: none;
    margin-bottom: 15px;
  }

  buttonTwo {
    width: 130px;
    padding: 12px 20px;
    background-color: #fa8232;
    color: #ffffff;
    text-align: center;
    border-radius: 4px;
    margin-bottom: 15px;
    border: none;
  }
`;
