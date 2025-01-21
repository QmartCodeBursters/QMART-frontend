import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { PaystackButton } from 'react-paystack';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import summaryAPI from '../../common/summaryAPI';
import axios from 'axios';

const PaystackLoad = () => {
  const publicKey = "pk_test_3217235cf2d6cb8ca24feb4e3b1302cf72995d3d";
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [wallet, setWallet] = useState(null);

  const merchantId = "merchant_id_placeholder"; // Replace dynamically if necessary
  
  // Calculate amount with a 0.5% transaction fee
  const transactionFee = Math.round(amount * 0.005); // Adjust fee logic if necessary
  const calculatedAmount = parseFloat(amount) * 100 + transactionFee * 100;
  const transactionReference = uuidv4();

  // Function to fetch wallet details
  // const fetchWalletDetails = async (email) => {
  //   try {
  //     const res = await fetch(`${summaryAPI.fetchMerchant.url}?email=${email}`, {
  //       method: summaryAPI.fetchMerchant.method,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await res.json();
  //     if (data.success) {
  //       setWallet(data.wallet);
  //     } else {
  //       toast.error("Error fetching wallet details");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching wallet details:", error);
  //     toast.error("Failed to fetch wallet details.");
  //   }
  // };

  // useEffect(() => {
  //   if (email) {
  //     fetchWalletDetails(email);
  //   }
  // }, [email]);

  const componentProps = {
    email,
    amount: Math.round(calculatedAmount),
    metadata: {
      firstName,
    },
    publicKey,
    text: "Pay Now",
    reference: transactionReference,
    onSuccess: async (response) => {
      toast.success(`Payment Successful! Transaction ID: ${response.reference}`, {
        position: "top-center",
      });

      // Send transaction details to the backend
      const handlePaymentSuccess = async (response) => {
        toast.success(`Payment Successful! Transaction ID: ${response.reference}`, {
          position: "top-center",
        });
      
        // Send transaction details to the backend using the correct endpoint
        try {
          const transactionId = response.reference;  // Use the response reference as the transaction ID
          
          // Use dynamic URL with the actual transactionId
          const res = await axios(`${summaryAPI.transaction.url       }`, {
            method: summaryAPI.transaction.method, // Ensure this matches the correct method from the API
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              transactionId: response.reference,
              amount: Math.round(calculatedAmount / 100), // Example of amount sent with the request
              email,
              firstName,
              transactionFee,
              type: "deposit", 
            }),
          });
      
          const data = await res.json();
          if (data.success) {
            toast.success("Transaction saved successfully!");
          } else {
            toast.error(`Error saving transaction: ${data.message}`);
          }
        } catch (error) {
          console.error("Error saving transaction:", error);
          toast.error("Failed to save transaction.");
        }
      };
      
    },
    onClose: () => toast.error("Transaction was not completed"),
  };

  return (
    <Wrapper>
      <Title>MAKE YOUR PAYMENT</Title>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            setAmount(value);
          }}
          inputMode="numeric"
          pattern="[0-9]*"
        />

        <p>Transaction Fee: {transactionFee} Naira (0.5%)</p>

        {wallet ? (
          <p>
            Wallet Balance: {wallet.balance} {wallet.currency}
          </p>
        ) : (
          <p>Loading wallet balance...</p>
        )}

        <PayButton>
          <PaystackButton {...componentProps} />
        </PayButton>
      </FormContainer>
    </Wrapper>
  );
};

export default PaystackLoad;

const Wrapper = styled.div`
  padding: 20px;
  margin: 100px 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  margin: 20px 0;
  font-weight: 600;
  color: black;
`;

const FormContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  p {
    font-size: 12px;
    margin: 10px 0;
    color: red;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 12px;
  outline: none;

  &:focus {
    border-color: #fa8232;
    box-shadow: 0 0 5px rgba(19, 105, 161, 0.5);
  }
`;

const PayButton = styled.div`
  text-align: center;
  margin-top: 20px;

  button {
    width: 100%;
    padding: 12px;
    background-color: #fa8232;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #803e00;
    }
  }
`;
