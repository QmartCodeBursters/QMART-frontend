import React, { useState } from "react";
import styled from "styled-components";
import QR from "../../assets/png/QR code .png";

const QrCode = () => {
  const [buttonClicked, setButtonClicked] = useState("");

  const handleShareClick = () => {
    setButtonClicked("Share");
  };

  const handleContinueShoppingClick = () => {
    setButtonClicked("Continue Shopping");
  };
  return (
    <Container>
      <Header>SCAN HERE</Header>

      <img src={QR} alt="Barcode" />

      <h1>SAIL04 SUPERMARKET</h1>

      <Buttons>
        <button onClick={handleShareClick} type="submit">
          Share
        </button>

        <button onClick={handleContinueShoppingClick} type="link">
          Download
        </button>
      </Buttons>
      {buttonClicked && <Feedback>You clicked: {buttonClicked}</Feedback>}
    </Container>
  );
};

export default QrCode;

const Container = styled.div`
  background-color: #edeff2;
  max-width: 100%;
  height: 100vh;
  font-size: 14px;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img {
    width: 500px;
    height: 500px;
  }
  h1 {
    margin: 50px 0px;
    font-size:45px ;
  }
  @media (max-width: 768px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
`;

const Header = styled.div`
  font-weight: 900;
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;

  button {
    padding: 12px 65px;
    border-radius: 4px;
    background-color: #09456b;
    border: none;
    color: white;
    border: none;
    margin: 10px 0;
    cursor: pointer;

  &:hover{
        background-color: #073957;

  }
  }

  button:nth-child(2) {
    border-radius: 4px;
    background-color: #fa8232;
    color: white;
    border: none;
    margin: 10px 0;
    cursor: pointer;

    &:hover {
      background-color: #d96c29;
    }
    }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

`;

const Feedback = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
