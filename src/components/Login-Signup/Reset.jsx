import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAppContext } from "../../common/AuthContext";
import summaryAPI from "../../common/summaryAPI";
import Axios from "../../utilis/Axios";
import AxiosToastError from "../../utilis/AxiosToastError";

const VerifyEmailOTP = () => {
  const {setEmail } = useAppContext();
  const [data, setData] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!data.email.trim()) {
        toast.error("Email is required");
        return;
      }

      const response = await Axios({
        ...summaryAPI.emailResetPass,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message || "Something went wrong");
        return;
      }

      if (response.data.success) {
        toast.success(response.data.message) || "Email sent successfully";
        setEmail(data.email);
        setData({
          email: "",
        });
        navigate("/otp-verification");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  const isEmailValid = data.email.trim() !== "";

  return (
    <Wrapper>
      <InnerWrapper>
        <FormCont>
          <form onSubmit={handleSubmit}>
            <h2>FORGOT PASSWORD</h2>
            <StyledInput
              type="email"
              placeholder="Enter your Registerd Email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <SubmitButton
              type="submit"
              className={isEmailValid ? "active" : ""}
              disabled={!isEmailValid}
            >
              Verify
            </SubmitButton>

            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>

          </form>
        </FormCont>
      </InnerWrapper>
    </Wrapper>
  );
};

export default VerifyEmailOTP;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  /* background: #EDF2EE; */
`;

const InnerWrapper = styled.div`
  width: 85%;
  max-width: 1200px;
`;

const FormCont = styled.div`
  /* background-color: #fff; */
  width: 80%;
  max-width: 450px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0 auto;


  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 20px;
    font-weight: 500;
    

    h2 {
      font-size: 24px;
      text-align: center;
    }

    span {
        font-size: 12px;

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
  width: 100%;
  padding: 12px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #fa8232;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  }
`;

