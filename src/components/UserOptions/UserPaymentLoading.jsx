import React from "react";
import styled, { keyframes } from "styled-components";

const UserPaymentLoading=()=>{
  return (
    <Wrapper>
      <LoadingContainer>
        <Spinner />
        <Message>Processing your payment, please wait...</Message>
      </LoadingContainer>
    </Wrapper>
  );
}

export default UserPaymentLoading;

// Styled Components
const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

const LoadingContainer = styled.div`
  text-align: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 200px;
  height: 200px;
  border: 60px solid #e0e0e0;
  border-top: 60px solid rgba(250, 130, 50, 1);
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  margin: 30px auto;
`;

const Message = styled.p`
  font-size: 50px;
  color: #333;
  margin-top: 70px;
`;
