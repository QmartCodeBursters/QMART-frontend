import React from "react";
import styled from "styled-components";

const UserPaymentConfir = () => {
  return (
    <Container>
    <Wrapper>
        <Cancelcircle>
        <CloseButton>&#x2715;</CloseButton>
        </Cancelcircle>
        <Content>
          <ThankYouText>Thank You For Your Purchase</ThankYouText>
          <CheckmarkWrapper>
            <CheckmarkCircle>
              <Checkmark>✓</Checkmark>
            </CheckmarkCircle>
          </CheckmarkWrapper>
          <OrderText>Order #4152 Confirmed</OrderText>
          <TrackOrderButton>Track Order</TrackOrderButton>
          <DashboardLink href="./Dashboard">Go to Dashboard</DashboardLink>
        </Content>
      
    </Wrapper>
    </Container>
  );
};

export default UserPaymentConfir;

// Styled Components

const Container = styled.div`
    width: 100%;
    text-align: center;
    justify-content: center;
    justify-self: center;
    display: flex;
    max-width: 1280px;
`
const Wrapper = styled.div`
  /* display: flex; */
  justify-content: center;
  width: 80%;
  align-items: center;
  margin-bottom: 5px;
  flex-wrap: wrap;
  padding-top: 180px;
  padding-bottom: 70px;
  position: relative;
  /* background-color: aliceblue; */
  /* width: 100vw;
  height: 100vh; */
  /* background-color: #f9fafc; */
`;

// const Container = styled.div`
//   position: relative;
//   text-align: center;
//   /* width: 400px; */
//   /* padding: 30px; */
  
//   background-color: aliceblue;
  
//   /* background: #fff; */
//   /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
// `;
const Cancelcircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top:75px;
  right: -10px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid rgba(255, 0, 0, 1);
  
`
const CloseButton = styled.span`
  
  font-size: 24px;
  color: rgba(255, 0, 0, 1);
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThankYouText = styled.p`
  font-size: 20px;
  /* line-height: 12px; */
  font-weight: 400;
  color:rgba(0,0,0,1);
  margin-top: 120px;
  margin-bottom: 50px;
`;

const CheckmarkWrapper = styled.div`
  margin: 20px 0;
`;

const CheckmarkCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* background-color: #f9fafc; */
  border: 5px solid #f58220;
`;

const Checkmark = styled.span`
  color: #f58220;
  font-size: 50px;
  /* justify-self: center; */
  /* font-weight: bold; */
`;

const OrderText = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: rgba(10, 13, 19, 1);
  margin: 20px 0 30px;
`;

const TrackOrderButton = styled.button`
  background-color: #f58220;
  color: #fff;
  border: none;
  width: 75%;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  /* flex-wrap: wrap; */
  
  /* cursor: pointer; */

  &:hover {
    background-color: #e6731b;
  }
`;

const DashboardLink = styled.a`
  margin-top: 30px;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  text-decoration: none;
  margin-bottom: 80px;

  &:hover {
    text-decoration: underline;
    color: rgba(0, 0, 0, 1);
  }
`;