import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import toast from "react-hot-toast";
import summaryAPI, { baseURL } from "../../common/summaryAPI";
import { useAppContext } from "../../common/AuthContext";
import AxiosToastError from "../../utilis/AxiosToastError";

const Login = () => {
  const { setEmail, setRole, setUserDetails, balance,  setBusinessName, setAccountNumber } = useAppContext(); // Access context
  const navigate = useNavigate();
  const [email, setEmailInput] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: `${baseURL}${summaryAPI.login.url}`,
        data: { email, password },
        withCredentials: true,
      });

      if (response.data.success) {
        toast.success("Login successful!");

        const { user } = response.data.data;

        
        setEmail(user.email);
        setRole(user.role);
        setUserDetails(user); 
        

        
        if (user.role === "merchant") {
          if (user.business) {
            navigate("/dashboard");
          } else {
            navigate("/merchant-create-business");
          }
        } else {
          navigate("/dashboard");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error.response ? error.response.data : error.message);
      AxiosToastError(error);
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2>LOGIN</h2>

          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link to="/reset-password">
            <p>Forgot Password?</p>
          </Link>

          <button type="submit">Login</button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div``;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    max-width: 450px;
    /* background-color: white; */
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
      /* margin: 10px 0; */

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
