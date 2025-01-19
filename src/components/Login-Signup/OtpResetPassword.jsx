import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAppContext } from "../../common/AuthContext";
import Axios from "../../utilis/Axios";
import summaryAPI from "../../common/summaryAPI";
import AxiosToastError from "../../utilis/AxiosToastError";

const OtpResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  useEffect(() => {
    if (!email) {
      toast.error("Email not found. Please try again.");
      // navigate("/previous-route");
    }
  }, [email, navigate]);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    const nextInput = document.getElementById(`otp-${index + 1}`);
    if (value && nextInput) nextInput.focus();
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Debugging log
    const otpCode = otp.join("");
    if (!otpCode || otpCode.length !== 6) {
      return toast.error("Please enter a valid 6-digit OTP.");
    }

    console.log("Submitting OTP:", otpCode); // Debugging log
    console.log("Submitting Email:", email); // Debugging log

    try {
      const response = await Axios({
        method: summaryAPI.emailResetPass.method,
        url: summaryAPI.emailResetPass.url,
        data: { otp: otpCode, email },
      });

      console.log("Response from server:", response.data); 

      if (response.data.success) {
        toast.success('OTP verified successfully!');
        console.log("Navigating to /login...");
        navigate('/login');
        console.log("Navigation executed.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error.response ? error.response.data : error);
      toast.error('Error verifying OTP.');
    }
  };

  const handleRequestOTP = async () => {
    try {
      const response = await Axios({
        method: summaryAPI.resendOTP.method,
        url: summaryAPI.resendOTP.url,
        data: { email },
      });

      if (response.data.success) {
        toast.success('OTP sent successfully!');
        setSeconds(60);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error sending OTP:', error.response ? error.response.data : error);
      toast.error('Error sending OTP.');
    }
  };

  const isOtpValid = otp.every((digit) => /^\d$/.test(digit));

  return (
    <Wrapper>
      <InnerWrapper>
        <FormCont>
          <form onSubmit={handleSubmit}>
            <p>OTP Verification</p>
            <p>We sent an OTP to: {email}</p>
            <p>Enter the 6-digit code sent to your registered Email</p>

            <OtpInput>
              {otp.map((digit, index) => (
                <StyledInput
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  maxLength="1"
                />
              ))}
            </OtpInput>

            <SubmitButton
              type="submit"
              className={isOtpValid ? "active" : ""}
              disabled={!isOtpValid}
            >
              Verify
            </SubmitButton>

            <span>
              Didn't get the code? Resend in {seconds}s{" "}
              {seconds === 0 && <button onClick={handleRequestOTP}>Resend</button>}
            </span>
          </form>
        </FormCont>
      </InnerWrapper>
    </Wrapper>
  );
};

export default OtpResetPassword;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  background: #edf2ee;
`;

const InnerWrapper = styled.div`
  width: 85%;
  max-width: 1200px;
`;

const FormCont = styled.div`
  background-color: #fff;
  width: 40%;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0 auto;

  p:nth-child(2) {
    font-size: 12px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 20px;
    font-weight: 500;

    span {
      font-size: 12px;
      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: red;
      }

      button {
        background: transparent;
        border: none;
        color: red;
      }
    }
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledInput = styled.input`
  width: 60px;
  height: 60px;
  padding: 12px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: green;
    background-color: #e8ffe8;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: gray;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
  transition: background-color 0.3s ease;

  &.active {
    background-color: green;
    cursor: pointer;
  }

  &:hover {
    background-color: #025b08;
  }

  &:disabled {
    opacity: 0.6;
  }
`;

const OtpInput = styled.div`
  display: flex;
  justify-content: space-between;
`;
