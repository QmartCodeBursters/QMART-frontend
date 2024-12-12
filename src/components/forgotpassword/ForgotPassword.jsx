// import React, { useState } from "react";
// import styled from "styled-components";

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: auto;
//   background-color: #f4f4f4;
//   padding-bottom: 15rem;
//   padding-top: 4rem;
// `;

// const FormWrapper = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
// `;

// const Title = styled.h2`
//   text-align: center;
//   color: #8d8484;
//   font-size: 20px;
// `;

// const Input = styled.input`
//   width: 95%;
//   padding: 10px;
//   margin: 10px 0;
//   border-radius: 4px;
//   border: 1px solid #ddd;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #fa8232;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #dd6c20;
//   }
// `;

// const Message = styled.div`
//   text-align: center;
//   margin-top: 10px;
//   font-size: 14px;
//   color: ${(props) => (props.success ? "green" : "red")};
// `;

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simulate backend check for email existence
//     const validEmails = ["user1@example.com", "user2@example.com"]; // Example email list

//     if (validEmails.includes(email)) {
//       setSuccess(true);
//       setMessage("Check your email for a reset link.");
//     } else {
//       setSuccess(false);
//       setMessage("Email not registered.");
//     }
//   };

//   return (
//     <Container>
//       <FormWrapper>
//         <Title>Forget Password</Title>
//         <form onSubmit={handleSubmit}>
//           <Input
//             type="email"
//             placeholder="Enter your email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <Button type="submit">Submit</Button>
//         </form>
//         {message && <Message success={success}>{message}</Message>}
//       </FormWrapper>
//     </Container>
//   );
// };

// export default ForgotPassword;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #f4f4f4;
  padding-bottom: 15rem;
  padding-top: 4rem;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  color: #8d8484;
  font-size: 20px;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fa8232;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #dd6c20;
  }
`;

const Message = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => (props.success ? "green" : "red")};
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate backend check for email existence
    const validEmails = ["user1@example.com", "user2@example.com"]; // Example email list

    if (validEmails.includes(email)) {
      setSuccess(true);
      setMessage("Check your email for otp.");

      // Delay routing to OTP page
      setTimeout(() => {
        navigate("/otppage");
      }, 2000); // 2 seconds delay before routing
    } else {
      setSuccess(false);
      setMessage("Email not registered.");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Forget Password</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </form>
        {message && <Message success={success}>{message}</Message>}
      </FormWrapper>
    </Container>
  );
};

export default ForgotPassword;
