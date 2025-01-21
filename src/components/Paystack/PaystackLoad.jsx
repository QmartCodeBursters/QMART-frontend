

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { PaystackButton } from 'react-paystack';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid'; // Import uuid library


const PaystackLoad = () => {
  const publicKey = "pk_test_3217235cf2d6cb8ca24feb4e3b1302cf72995d3d"; // Replace with your Paystack public key
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Calculate amount with a 0.5% transaction fee
  const calculatedAmount = parseFloat(amount) * 100 * 1.005; // Convert Naira to Kobo and add 0.5%

  // Generate a unique transaction reference
  const transactionReference = uuidv4();

    const componentProps = {
        email,
        amount: Math.round(calculatedAmount), // Ensure it's an integer (Kobo)
        metadata: {
        name,
        phone,
        },
        publicKey,
        text: "Pay Now",
        reference: transactionReference, // Pass the unique reference
        onSuccess: async (response) => {
            toast.success(`Payment Successful! Transaction ID: ${response.reference}`, {
              position: "top-center",
            });
          
            // Send transaction details to the backend
            try {
              const res = await fetch("/api/v1/transaction/transactionId", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  transactionId: response.reference,
                  amount: calculatedAmount,
                  email,
                  name,
                  phone,
                }),
              });
          
              const textResponse = await res.text();
              let data = {};

              try {
                data = JSON.parse(textResponse);
              } catch (err) {
                console.error("Failed to parse JSON:", err);
                toast.error("Failed to save transaction: Invalid response format.");
                return;
              }
          
              if (data.success) {
                toast.success("Transaction saved successfully!");
              } else {
                toast.error(`Error saving transaction: ${data.message}`);
              }
              
              if (data.success) {
                toast.success("Transaction saved successfully!");
              } else {
                toast.error(`Error saving transaction: ${data.message}`);
              }
            } catch (error) {
              console.error("Error saving transaction:", error);
              toast.error("Failed to save transaction.");
            }
          },
    }          

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
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      <Input
          type="text"  
          placeholder="Phone number"
          value={phone}
          onChange={(e) => {
           
            const value = e.target.value.replace(/[^0-9]/g, '');
            setPhone(value);
          }}
          inputMode="numeric" 
          pattern="[0-9]*"    
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

        <p>Transaction Fee: 0.5% per transaction</p>

        <PayButton>
          <PaystackButton {...componentProps} />
        </PayButton>
      </FormContainer>
    </Wrapper>
  );
};

export default PaystackLoad;

// Styled Components
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
  
  p{
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
