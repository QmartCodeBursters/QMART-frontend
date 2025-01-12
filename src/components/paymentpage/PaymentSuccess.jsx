import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 0 auto;
  /* background-color: #f9fafb; */
  font-family: "Arial", sans-serif;
  max-width: 380px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 25px 20px;
  width: 90%;
  max-width: 380px;
  text-align: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const CloseIcon = styled.div`
  top: 20px;
  left: 20px;
  font-size: 20px;
  cursor: pointer;
  color: #555;
`;

const ShareIcon = styled.div`
  top: 20px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  color: #555;
`;

const CheckIcon = styled.div`
  background-color: #34c759;
  color: #ffffff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 0 auto 15px;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333333;
  margin-bottom: 10px;
`;

const Amount = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 15px;
`;

const Details = styled.div`
  text-align: left;
  margin-top: 10px;

  p {
    font-size: 14px;
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    color: #777;

    span {
      font-weight: 600;
      color: #000000;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #eaeaea;
    margin: 15px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background-color: ${(props) =>
    props.primary ? "rgba(27, 99, 146, 1)" : "#f5f5f5"};
  color: ${(props) => (props.primary ? "#ffffff" : "#000000")};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0d507d" : "#eaeaea")};
  }

  svg {
    font-size: 18px;
  }
`;

const PaymentSuccess = () => {
  const [paymentData, setPaymentData] = useState(null);

  const CURRENCY = "₦";

  useEffect(() => {
    const fetchData = async () => {
      const mockData = {
        transactionId: "000085752257",
        paymentTime: "25-02-2023, 13:22:16",
        paymentMethod: "Bank Transfer",
        senderName: "Fatimah Foluso",
        amount: 1000000,
        transactionFee: 50,
      };
      setTimeout(() => setPaymentData(mockData), 1000);
    };

    fetchData();
  }, []);

  const navigateHome = () => {
    window.location.href = "/dashboard"; // Navigate to home page
  };

  const downloadReceipt = () => {
    const receiptContent = `
      Payment Success!
      Transaction ID: ${paymentData.transactionId}
      Payment Time: ${paymentData.paymentTime}
      Payment Method: ${paymentData.paymentMethod}
      Sender Name: ${paymentData.senderName}
      Amount: ${CURRENCY}${paymentData.amount}
      Transaction Fee: ${CURRENCY}${paymentData.transactionFee}
    `;
    const blob = new Blob([receiptContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Receipt.txt";
    link.click();
  };

  const shareReceipt = () => {
    if (navigator.share) {
      navigator.share({
        title: "Payment Receipt",
        text: `
          Payment Success!
          Transaction ID: ${paymentData.transactionId}
          Amount: ${CURRENCY}${paymentData.amount}
        `,
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  if (!paymentData) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Card>
        <Icon>
          <CloseIcon onClick={navigateHome}>&#10005;</CloseIcon>
          <ShareIcon onClick={shareReceipt}>&#128279;</ShareIcon>
        </Icon>
        <CheckIcon>✓</CheckIcon>
        <Title>Payment Success!</Title>
        <Amount>
          {CURRENCY}
          {paymentData.amount.toLocaleString()}
        </Amount>

        <Details>
          <p>
            Transaction ID: <span>{paymentData.transactionId}</span>
          </p>
          <p>
            Payment Time: <span>{paymentData.paymentTime}</span>
          </p>
          <p>
            Payment Method: <span>{paymentData.paymentMethod}</span>
          </p>
          <p>
            Sender Name: <span>{paymentData.senderName}</span>
          </p>
          <p>
            Amount:{" "}
            <span>
              {CURRENCY}
              {paymentData.amount.toLocaleString()}
            </span>
          </p>
          <p>
            Transaction Fee:{" "}
            <span>
              {CURRENCY}
              {paymentData.transactionFee.toLocaleString()}
            </span>
          </p>
          <hr />
        </Details>

        <ButtonContainer>
          <Button onClick={downloadReceipt}>&#8681; Get PDF Receipt</Button>
          <Button primary onClick={navigateHome}>
            Back to Home
          </Button>
        </ButtonContainer>
      </Card>
    </Container>
  );
};

export default PaymentSuccess;
