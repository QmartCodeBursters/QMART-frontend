import React from 'react';
import styled from 'styled-components';

const PaymentFailure = () => {
  return (
    <Wrapper>
      <h1>Payment Failed</h1>
      <p>We were unable to process your payment. Please try again.</p>
    </Wrapper>
  );
};

export default PaymentFailure;

const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 24px;
`;
