import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // For navigation

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(""); // To store error message
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Ensure only one character is input
    setOtp(newOtp);

    // Move to next input after entering a value
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      if (!otp[index] && index > 0) {
        // Move to previous input if current input is empty and backspace/delete is pressed
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleSendOtp = () => {
    const enteredOtp = otp.join(""); // Join the OTP array into a string
    const correctOtp = "123456"; // Simulated correct OTP for testing purposes

    if (enteredOtp === correctOtp) {
      setError(""); // Clear error message before navigating
      setTimeout(() => {
        navigate("/resetpassword"); // Delay navigation to /resetpassword by 5 seconds
      }, 3000); // 3 seconds delay
    } else {
      setError("Invalid OTP"); // Show error message if OTP is incorrect
    }
  };

  return (
    <PageWrapper>
      <Title>
        <p>Check email for OTP</p>
      </Title>
      <OTPInputContainer>
        {otp.map((value, index) => (
          <OTPInput
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)} // Added keydown listener for backspace/delete
          />
        ))}
      </OTPInputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Display error message */}
      <SendOtpButton onClick={handleSendOtp}>Send OTP</SendOtpButton>
    </PageWrapper>
  );
};

export default OTPPage;

// Styled components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
  box-sizing: border-box;
  padding-top: 40px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h1`
  font-size: 17px;
  margin-bottom: 20px;
  color: #9d9393;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const OTPInputContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const OTPInput = styled.input`
  width: 60px;
  height: 60px;
  font-size: 24px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #4e89ae;
  }

  &::placeholder {
    color: transparent;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
`;

const SendOtpButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: white;
  background-color: #4e89ae;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 250px;

  &:hover {
    background-color: #35758c;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: center;
`;
