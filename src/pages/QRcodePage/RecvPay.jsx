import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation


const RecvPay = () => {
    const navigate = useNavigate(); // Initialize navigation function
    const HandleOnClick = () => {
        navigate("/qr-code");
    };
    return(
        <ScanContainer>

            
           <button onClick={HandleOnClick}>CLICK HERE TO RECEIVE PAYMENT</button>
        </ScanContainer>

    )
}

export default RecvPay ;

const ScanContainer = styled.div `
 background-color: #edeff2;
  max-width: 1280px;
  height:100vh;
  padding: 30px;
  font-size: 14px;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 10px;

 button{
    background-color:#f85e0a;
    color: #ffffff;
    border-radius: 8px;
    border: transparent;
    font-weight: 600;
    font-size: 20px;
    padding: 20px 50px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color:#1B6392 ;
    }
 }
 `