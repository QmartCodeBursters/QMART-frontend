// import { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { RiTruckLine } from "react-icons/ri";
// import faq from "../../assets/png/faq.png";
// import { FaUnlockAlt, FaRegUser, FaPlus, FaMinus } from "react-icons/fa";

// const Contactnow = () => {
//   const [openFaqIndex, setOpenFaqIndex] = useState(null);

  
//   const toggleFaq = (index) => {
//     if (openFaqIndex === index) {
//       setOpenFaqIndex(null);
//     } else {
//       setOpenFaqIndex(index);
//     }
//   };

//   const Faqs = [
//     {
//       question: "How do merchants generate a QR code for payment?",
//       answer:
//         "Merchants can click the 'Generate QR Code' button in the app, and a unique code will be displayed instantly for the customer to scan.",
//     },
//     {
//       question: "How do customers make payments?",
//       answer:
//         "Customers open the app, click 'Scan QR Code,' and confirm the payment using an OTP generated from their linked wallet.",
//     },
//     {
//       question: "What happens after the payment is made?",
//       answer:
//         "Both the merchant and the customer receive instant confirmation of the transaction for their records.",
//     },
//     {
//       question: "Can customers use the app without linking a wallet?",
//       answer:
//         "No, linking a wallet is necessary to enable secure OTP-based payment verification.",
//     },
//     {
//       question: "Is the payment process secure?",
//       answer:
//         "Yes, QMart uses OTP verification and encrypted payment gateways to ensure secure transactions.",
//     },
//     {
//       question: "What if an OTP isn’t received?",
//       answer:
//         "Customers can request a new OTP directly from the payment page for uninterrupted processing.",
//     },
//   ];

//   return (
//     <Wrapper>
//       <Contactwrapper>

//         <Assisttoday>

//             <Link to = "/wallet">
//                 <button>
//                 <RiTruckLine />
//                 Track Payment
//                 </button>
//             </Link>

//             <Link to = "/reset-password">
//                 <button>
//                 <FaUnlockAlt />
//                 Reset Password
//                 </button>
//             </Link>

//             <Link to = "/dashboard">
//                 <button>
//                 <FaRegUser />
//                 User Account
//                 </button>
//             </Link>

//         </Assisttoday>

//         <Faqlisting>
           
//           <Faqabout>
//           <h3>FAQs About QMart!</h3>
          
//             {Faqs.map((faq, index) => (
//               <FaqItem key={index}>
//                 <FaqQuestion onClick={() => toggleFaq(index)}>
//                     {faq.question}
//                     <span className="icon">
//                         {openFaqIndex === index ? <FaMinus /> : <FaPlus />}
//                     </span>
//                 </FaqQuestion>

//                 {openFaqIndex === index && <FaqAnswer>{faq.answer}</FaqAnswer>}
//               </FaqItem>
//             ))}
//         </Faqabout>

//           <img src={faq} alt="faq" />
//         </Faqlisting>
        
//       </Contactwrapper>
//     </Wrapper>
//   );
// };

// export default Contactnow;

// const Wrapper = styled.div``;

// const Contactwrapper = styled.div`
// max-width: 1280;
// width: 75%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
// `;

// const Assisttoday = styled.div`
//   margin-top: 120px;
//   display: flex;
//   flex-wrap: wrap; 
//   /* gap: 20px; Space between buttons */

//   button {
//     margin: 20px 30px;
//     align-items: center;
//     justify-content: center;
//     padding: 15px 30px;
//     border: 1px solid #fa823298;
//     background-color: white;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
//       rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
//     cursor: pointer;
//     text-decoration: none;
//     color: black; 
//     gap: 10px; 
//   }

//   button:hover {
//     background-color: #fa8232; 
//     color: white; 
//   }

//   svg {
//     color: #fa8232; 
//     font-size: 18px; 
//     margin-right: 10px;
//   }

//   @media (max-width: 768px) {
//     justify-content: center;
//     gap: 15px; 
//   }
// `;

// const Faqlisting = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   gap: 20px;
//   max-width: 90%;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-top: 100px;

//   img {
//     max-width: 40%;
//     flex-shrink: 0;
//   }

//   .icon {
//     width: 24px;
//     height: 24px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: white;
//     background-color: #fa8232;
//     border-radius: 50%; 
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
//     font-size: 12px;
//     flex-shrink: 0;
//   }

//   @media (max-width: 768px) {
//     flex-wrap: wrap; 
//     flex-direction: column; 
//     align-items: center;

//     img {
//       max-width: 85%; 
//       margin-top: 20px;
//     }
//   }
// `;


// const Faqabout = styled.div`
//   width: 100%;
//   margin-bottom: 20px;

//   h3{
//     font-size: 30px;
//     margin: 20px;
//   }
// `;

// const FaqItem = styled.div`
//   margin-bottom: 10px;
//   border: 1px solid #ddd;
//   background-color: white;
//   border-radius: 5px;
//   padding: 10px;
// `;

// const FaqQuestion = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 12px;
//   flex-shrink: 0;
//   align-items: center;
//   cursor: pointer;
//   font-weight: 500;
// `;

// const FaqAnswer = styled.div`
//   margin-top: 10px;
//   font-size: 12px;
//   color: #555;
// `;


import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiTruckLine } from "react-icons/ri";
import faq from "../../assets/png/faq.png";
import { FaUnlockAlt, FaRegUser, FaPlus, FaMinus } from "react-icons/fa";

const Contactnow = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const Faqs = [
    {
      question: "How do merchants generate a QR code for payment?",
      answer:
        "Merchants can click the 'Generate QR Code' button in the app, and a unique code will be displayed instantly for the customer to scan.",
    },
    {
      question: "How do customers make payments?",
      answer:
        "Customers open the app, click 'Scan QR Code,' and confirm the payment using an OTP generated from their linked wallet.",
    },
    {
      question: "What happens after the payment is made?",
      answer:
        "Both the merchant and the customer receive instant confirmation of the transaction for their records.",
    },
    {
      question: "Can customers use the app without linking a wallet?",
      answer:
        "No, linking a wallet is necessary to enable secure OTP-based payment verification.",
    },
    {
      question: "Is the payment process secure?",
      answer:
        "Yes, QMart uses OTP verification and encrypted payment gateways to ensure secure transactions.",
    },
    {
      question: "What if an OTP isn’t received?",
      answer:
        "Customers can request a new OTP directly from the payment page for uninterrupted processing.",
    },
  ];

  return (
    <Wrapper>
      <Contactwrapper>
        <Assisttoday>
          <Link to="">
            <button>
              <RiTruckLine />
              Track Payment
            </button>
          </Link>

          <Link to="">
            <button>
              <FaUnlockAlt />
              Reset Password
            </button>
          </Link>

          <Link to="">
            <button>
              <FaRegUser />
              User Account
            </button>
          </Link>
        </Assisttoday>

        <Faqlisting>
          <Faqabout>
            <h3>FAQs About Qmart!</h3>

            {Faqs.map((faq, index) => (
              <FaqItem key={index}>
                <FaqQuestion onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <span className="icon">
                    {openFaqIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </FaqQuestion>

                {openFaqIndex === index && <FaqAnswer>{faq.answer}</FaqAnswer>}
              </FaqItem>
            ))}
          </Faqabout>

          <img src={faq} alt="faq" />
        </Faqlisting>
      </Contactwrapper>
    </Wrapper>
  );
};

export default Contactnow;

const Wrapper = styled.div``;

const Contactwrapper = styled.div`
  max-width: 1280px;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Assisttoday = styled.div`
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;

  button {
    margin: 20px 30px;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    border: 1px solid #fa823298;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    gap: 10px;
  }

  button:hover {
    background-color: #fa8232;
    color: white;
  }

  svg {
    color: #fa8232;
    font-size: 18px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }
`;

const Faqlisting = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 20px;
  max-width: 900px; /* Fixed max width */
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 100px;

  img {
    max-width: 40%;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 85%;
      margin-top: 20px;
    }
  }
`;

const Faqabout = styled.div`
  width: 100%;
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    margin: 20px 0;
  }
`;

const FaqItem = styled.div`
  margin-bottom: 10px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  width: 100%; /* Ensures FAQ items maintain fixed width */
  box-sizing: border-box;
`;

const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;

  .icon {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #fa8232;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 12px;
    flex-shrink: 0;
  }
`;


const FaqAnswer = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #555;
`;
