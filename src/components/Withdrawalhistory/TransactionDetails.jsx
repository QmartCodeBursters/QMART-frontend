

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  margin: 90px auto;
  font-family: Arial, sans-serif;
  max-width: 600px; 
  padding-top: 20px;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    margin: 70px 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DetailItem = styled.li`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

const StatusText = styled.span`
  color: ${(props) =>
    props.status === "Completed"
      ? "green"
      : props.status === "Failed"
      ? "red"
      : props.status === "Pending"
      ? "orange"
      : "inherit"};
`;

const BackLink = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
    margin-top: 15px;
  }
`;

const TransactionDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const transaction = location.state?.transaction; // Get the transaction passed from history page

  if (!transaction) {
    return <p>No withdrawal data available.</p>;
  }

  return (
    <Container>
      <Title>Withdrawal Details</Title>
      <DetailsList>
        <DetailItem>
          <strong>Amount:</strong> {transaction.amount}
        </DetailItem>
        <DetailItem>
          <strong>Date:</strong> {transaction.date}
        </DetailItem>
        <DetailItem>
          <strong>Status:</strong>{" "}
          <StatusText status={transaction.status}>
            {transaction.status}
          </StatusText>
        </DetailItem>
        <DetailItem>
          <strong>Withdraw To:</strong> {transaction.details}
        </DetailItem>
        <DetailItem>
          <strong>Transaction ID:</strong> {transaction.txId}
        </DetailItem>
        <DetailItem>
          <strong>Type:</strong> {transaction.type}
        </DetailItem>{" "}
        
      </DetailsList>
      <BackLink onClick={() => navigate("/WithdrawalHistory")}>Back to History</BackLink>{" "}    {/* Go back to previous page */}
     
    </Container>
  );
};

export default TransactionDetails;
