import React, { useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #f4f4f4;
  padding-top: 3rem;
  padding-bottom: 15rem;
  margin-top: 70px;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  color: #7a7777;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Icon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;

  &:hover {
    color: #555;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fa8232;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d36d29;
  }
`;

const Message = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => (props.success ? "green" : "red")};
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1000;
`;

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for showing popup
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setSuccess(false);
      setMessage("Passwords do not match.");
    } else {
      setSuccess(true);
      setMessage("Your password has been reset successfully!");
      setShowPopup(true); // Show the popup on success

      // Delay the navigation to login by 2 seconds
      setTimeout(() => {
        navigate("/login"); // Navigate to the login page
      }, 2000);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Reset Password</Title>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <Icon onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </Icon>
          </InputWrapper>
          <InputWrapper>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Icon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </Icon>
          </InputWrapper>
          <Button type="submit">Reset Password</Button>
        </form>
        {message && <Message success={success}>{message}</Message>}
      </FormWrapper>

      {/* Popup for successful reset */}
      {showPopup && (
        <Popup>
          <h3>Password Reset Successful!</h3>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </Popup>
      )}
    </Container>
  );
};

export default ResetPassword;
