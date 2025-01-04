import React, { useState } from "react";
import styled from "styled-components";
import QR from "../../assets/png/QR code .png"

const QrCode = () => {
  const [buttonClicked, setButtonClicked] = useState("");

  // Handle Share button
  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "QR Code",
          text: "Check out this QR code for payment!",
          url: window.location.href, // Current page URL
        });
        setButtonClicked("Share");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Your browser does not support the share feature.");
    }
  };

  // Handle Download button
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = QR; // Path to the QR code image
    link.download = "QR_code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setButtonClicked("Download");
  };

  return (
    <Container>
      <Header>SCAN HERE</Header>

      <Image src={QR} alt="Barcode" />
      
      <Title>SAIL04 SUPERMARKET</Title>
      
      <Buttons>
        <button onClick={handleShareClick} type="button">
          Share
        </button>

        <button onClick={handleDownloadClick} type="button">
          Download
        </button>
      </Buttons>
    
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
  gap: 10px;

`;

const Header = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
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
    cursor: pointer;
    width: 100%;

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