// import React, { useState } from "react";
// import styled from "styled-components";

// const NewsletterSection = styled.section`
//   background-color: #f9f9f9;
//   padding: 2rem 3rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `;

// const NewsletterText = styled.div`
//   text-align: center;
//   margin-bottom: 1rem;

//   @media (min-width: 768px) {
//     text-align: left;
//     margin-bottom: 0;
//   }

//   h2 {
//     margin: 0;
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: #333;
//   }

//   p {
//     margin: 0.5rem 0 0;
//     font-size: 1rem;
//     color: #666;
//   }
// `;

// const NewsletterForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }

//   input {
//     width: 100%;
//     max-width: 300px;
//     padding: 0.5rem;
//     font-size: 1rem;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     margin-bottom: 1rem;

//     @media (min-width: 768px) {
//       margin-bottom: 0;
//       margin-right: 1rem;
//     }
//   }

//   button {
//     padding: 0.5rem 1rem;
//     font-size: 1rem;
//     color: white;
//     background-color: #004a79;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s;

//     &:hover {
//       background-color: #003355;
//     }
//   }
// `;

// const Newsletter = () => {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     alert(`Subscribed with email: ${email}`);
//     setEmail("");
//   };

//   return (
//     <NewsletterSection>
//       <NewsletterText>
//         <h2>Subscribe to our Newsletter</h2>
//         <p>Join our community for fresh deals and new arrivals straight to your inbox.</p>
//       </NewsletterText>
//       <NewsletterForm onSubmit={handleSubscribe}>
//         <input
//           type="email"
//           placeholder="Your email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Subscribe</button>
//       </NewsletterForm>
//     </NewsletterSection>
//   );
// };

// export default Newsletter;


import React, { useState } from "react";
import styled from "styled-components";

const NewsletterSection = styled.section`
  background-color: #ffffff;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #e8e8e8;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const NewsletterText = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    color: #555;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 600px;
  }

  input {
    width: 100%;
    max-width: 300px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #004a79;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #003355;
    }
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <NewsletterSection>
      <NewsletterText>
        <h2>Subscribe to our Newsletter</h2>
        <p>Join our community: Fresh deals and new arrivals straight to your inbox.</p>
      </NewsletterText>
      <NewsletterForm onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </NewsletterForm>
    </NewsletterSection>
  );
};

export default Newsletter;
