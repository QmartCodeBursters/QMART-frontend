import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import toast from "react-hot-toast";
import summaryAPI, { baseURL } from "../../common/summaryAPI";
import { useAppContext } from "../../common/AuthContext";
import AxiosToastError from "../../utilis/AxiosToastError";

const PasswordUpdate = () => {
  const { email } = useAppContext(); // Access email from context
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (password !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    try {
      // Send a request to reset the password
      const response = await axios({
        method: summaryAPI.resetPassword.method,
        url: `${baseURL}${summaryAPI.resetPassword.url}`,
        data: { email, password, confirmPassword },
        withCredentials: true,
      });

      // Handle success and error responses
      if (response.data.success) {
        toast.success("Password updated successfully!");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during password update:", error.response ? error.response.data : error.message);
      AxiosToastError(error);
    }
  };

  useEffect(() => {
    // Redirect to OTP verification page if email is not available
    if (!email) {
      navigate("/otp-password-verification");
    }
  }, [email, navigate]);

  return (
    <Wrapper>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2>UPDATE YOUR PASSWORD</h2>

          {/* Input fields for password and confirm password */}
          <input
            type="password"
            placeholder="Enter new password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm new password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};

export default PasswordUpdate;

const Wrapper = styled.div``;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    max-width: 450px;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin: 100px 0;
    animation: slideInFromTop 1s ease-out;

    @keyframes slideInFromTop {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    h2 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      padding: 12px;
      border-radius: 5px;
      border: 1px solid grey;
      margin: 5px 0;
      outline: none;
    }

    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: none;
      background-color: #fa8232;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: #803e00;
      }
    }

    p {
      text-align: left;
      color: grey;
      font-size: 12px;
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
  }
`;
