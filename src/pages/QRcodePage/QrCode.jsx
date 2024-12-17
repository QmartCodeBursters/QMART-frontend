import React, { useState } from "react";
import styled from "styled-components";
import QR from "../../assets/png/QR code .png"

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

      <Image src={QR} alt="Barcode" />

      <Title>SAIL04 SUPERMARKET</Title>

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
  max-width: 1280px;
  /* height: 100vh; */
  padding: 30px;
  font-size: 14px;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* box-sizing: border-box; */
  gap: 10px;

`;

const Header = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;;
  /* border: 2px solid red; */
  padding-top: 70px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

 const Image = styled.img`
    width:30%;
    max-width: 400px;
    height: auto;

    @media (max-width: 768px) {
    width: 70%;
  }
 `

 const Title = styled.div`
  margin: 20px 0px;
  font-size:2.5rem;
  font-weight:600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
 `

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
    transition:background-color 0.3s ease;


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
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;