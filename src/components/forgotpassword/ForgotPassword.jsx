import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:2230/api/v1/user/request-password-reset";

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(apiUrl, { email });

      if (response.data) {
        toast.success(response.data?.message);
      }

      setSuccess(true);
      setTimeout(() => {
        navigate("/otppage");
      }, 4000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message);

      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <FormWrapper>
        <Title>Forget Password</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Submit"}
          </Button>
        </form>
        <Message success={success}>{message}</Message>
      </FormWrapper>
    </Container>
  );
};

export default ForgotPassword;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #f4f4f4;
  margin-top: 70px;
  padding-bottom: 15rem;
  padding-top: 4rem;
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
  color: #8d8484;
  font-size: 20px;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
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
    background-color: #dd6c20;
  }
`;

const Message = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => (props.success ? "green" : "red")};
`;
