import React from "react";
import styled from "styled-components";

const ScanHere = () => {
    const HandleOnClick = () => {
        alert("Where am i to go to?")

    };
    return(
        <ScanContainer>

            
           <button onClick={HandleOnClick}>CLICK HERE TO SCAN</button>
        </ScanContainer>

    )
}

export default ScanHere ;

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
    background-color:#1B6392 ;
    color: #ffffff;
    border-radius: 8px;
    border: transparent;
    font-weight: 600;
    font-size: 20px;
    padding: 20px 50px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f85e0a;
    }
 }
 `