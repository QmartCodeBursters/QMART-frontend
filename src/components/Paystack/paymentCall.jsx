import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PaymentCallback = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Get the parameters from the URL
    const urlParams = new URLSearchParams(location.search);
    const trxref = urlParams.get('trxref');
    const reference = urlParams.get('reference');

    // You can now call the backend API to verify the payment with these values
    if (trxref && reference) {
      // Call backend API to verify the payment
      verifyPayment(reference);
    }
  }, [location]);

  const verifyPayment = async (reference) => {
    try {
      const response = await axios.get(`https://qmart-backend-3.onrender.com/api/v1/paystack/verify/${reference}`);
      console.log(response)
      const contentType = response.headers.get('content-type');
  
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        
        if (data.status == true) {
          console.log('Payment verified and merchant credited');
          // Redirect to success page or show a success message
          window.location.href = "/transaction/success"; // or show success message
          
        } else {
          console.log('Payment verification failed');
          // Redirect to failure page or show an error message
          window.location.href = "/payment/failure"; // or show error message
        }
      } else {
        console.error('Received non-JSON response:', await response.text());
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      // // Optionally show an error page or message to the user
      window.location.href = "/payment/failure";
    }
  };
  
  

  return (
    <Wrapper>
      <h1>Payment Callback</h1>
      <p>Verifying payment...</p>
    </Wrapper>
  );
};

export default PaymentCallback;

const Wrapper = styled.div`
    margin-top: 100px;
`
