import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import AxiosToastError from "../../utilis/AxiosToastError";
import Axios from "../../utilis/Axios";
import summaryAPI from "../../common/summaryAPI";
import toast from "react-hot-toast";
import axios from "axios";

const Otpgen = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6 OTP input fields
  const [seconds, setSeconds] = useState(60); // Countdown state
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer); // Cleanup interval
    }
  }, [seconds]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return; // Prevent non-numeric input
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Only allow one digit
    setOtp(newOtp);

    // Move to next input if not the last box
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    const email = localStorage.getItem('userEmail'); // Retrieve email
  
    try {
      const response = await axios.post('/api/v1/user/verify-otp', { otp: otpCode, email });
  
      if (response.data.success) {
        toast.success('OTP verified successfully!');
        navigate('/login'); // Redirect user after verification
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error verifying OTP.');
    }
  };
  
  const handleRequestOTP = async () => {
    const email = localStorage.getItem('userEmail'); 
    try {
      const response = await axios.post('/api/v1/user/send-otp', { email });
  
      if (response.data.success) {
        toast.success('OTP sent successfully!');
        setSeconds(60); 
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error sending OTP.');
    }
  };

  const isOtpValid = otp.every((digit) => digit !== "");

  return (
    <Wrapper>
      <InnerWrapper>
        <FormCont>
          <form onSubmit={handleSubmit}>
            <p>OTP Verification</p>
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
              {seconds === 0 && <Link onClick={handleRequestOTP}>Resend</Link>}
            </span>
          </form>
        </FormCont>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Otpgen;




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
  width: 50%;
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
    border-color: #ffaf02;
    background-color: #f8f7f2;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #f8931d;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #f8931d;
    cursor: pointer;
  }

  &:hover {
    background-color: #d5700b;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const OtpInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px; /* Add some gap between input fields */
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    gap: 5px; /* Adjust gap on smaller screens */
  }

  @media (max-width: 480px) {
    gap: 3px; /* Further adjust gap on very small screens */
  }
`;
