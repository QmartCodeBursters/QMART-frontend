// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import Axios from "../../utilis/Axios";
// import summaryAPI from "../../common/summaryAPI";

// const QrCode = () => {
//   const [amount, setAmount] = useState("");
//   const [businessName, setBusinessName] = useState("SAIL04 SUPERMARKET");
//   const [merchantAccountNumber, setMerchantAccountNumber] = useState(""); // Example placeholder
//   const [qrCodeUrl, setQrCodeUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleGenerateQR = async () => {
//     try {
//       setLoading(true);

//       const response = await Axios({
//         ...summaryAPI.fetchQRcode,
//         data: {
//           amount,
//           businessName,
//           merchantAccountNumber,
//         },
//       });

//       if (response.data && response.data.qrCodeData) {
//         setQrCodeUrl(response.data.qrCodeData); // Dynamically set QR code URL
//       } else {
//         console.error("Failed to generate QR code");
//       }
//     } catch (error) {
//       console.error("Error generating QR code:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle Share button
//   const handleShareClick = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: "QR Code",
//           text: "Check out this QR code for payment!",
//           url: qrCodeUrl, // Use dynamically generated QR code URL
//         });
//       } catch (error) {
//         console.error("Error sharing:", error);
//       }
//     } else {
//       alert("Your browser does not support the share feature.");
//     }
//   };

//   // Handle Download button
//   const handleDownloadClick = () => {
//     if (qrCodeUrl) {
//       const link = document.createElement("a");
//       link.href = qrCodeUrl; // Use dynamically generated QR code URL
//       link.download = "QR_code.png";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       alert("QR code is not available to download.");
//     }
//   };

//   const handleLogout = () => {
//     // Clear storage
//     localStorage.clear();
//     sessionStorage.clear();

//     navigate("/dashboard");
//   };

//   return (
//     <Container>
//       <Header>SCAN HERE</Header>

//       {qrCodeUrl ? (
//         <Image src={qrCodeUrl} alt="Generated QR Code" />
//       ) : (
//         <Placeholder>
//           {loading ? "Generating QR Code..." : "QR Code will appear here"}
//         </Placeholder>
//       )}

//       <InputContainer>
//         <Input
//           type="text"
//           placeholder="Enter Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <Input
//           type="text"
//           placeholder="Merchant Account Number"
//           value={merchantAccountNumber}
//           onChange={(e) => setMerchantAccountNumber(e.target.value)}
//         />
//       </InputContainer>

//       <Title>{businessName}</Title>

//       <Buttons>
//         <button onClick={handleGenerateQR} type="button" disabled={loading}>
//           {loading ? "Generating..." : "Generate QR Code"}
//         </button>

//         <button onClick={handleShareClick} type="button" disabled={!qrCodeUrl}>
//           Share
//         </button>

//         <button onClick={handleDownloadClick} type="button" disabled={!qrCodeUrl}>
//           Download
//         </button>

//         <button onClick={handleLogout} type="button">
//           Close
//         </button>
//       </Buttons>
//     </Container>
//   );
// };

// export default QrCode;

// const Container = styled.div`
//   max-width: 1280px;
//   padding: 30px;
//   font-size: 14px;
//   color: #1a1a1a;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: auto;
//   gap: 10px;
// `;

// const Header = styled.div`
//   font-weight: 600;
//   font-size: 1.5rem;
//   text-align: center;
//   padding-top: 70px;

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }
// `;

// const Image = styled.img`
//   width: 25%;
//   max-width: 400px;
//   height: auto;

//   @media (max-width: 768px) {
//     width: 70%;
//   }
// `;

// const Placeholder = styled.div`
//   width: 25%;
//   max-width: 400px;
//   height: 400px;
//   background-color: #f0f0f0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   border: 2px dashed #ccc;

//   @media (max-width: 768px) {
//     width: 70%;
//   }
// `;

// const Title = styled.div`
//   margin: 20px 0px;
//   font-size: 25px;
//   font-weight: 800;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 100%;
//   max-width: 400px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 100%;

//   &:focus {
//     outline: none;
//     border-color: #09456b;
//   }
// `;

// const Buttons = styled.div`
//   display: flex;
//   gap: 15px;
//   flex-wrap: wrap;

//   button {
//     padding: 12px 65px;
//     border-radius: 4px;
//     background-color: #09456b;
//     border: none;
//     color: white;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #073957;
//     }

//     &:disabled {
//       background-color: #ccc;
//       cursor: not-allowed;
//     }
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 10px;
//   }
// `;






// import React, { useEffect, useState } from "react";
// import QRCode from "qrcode";
// import { useLocation } from "react-router-dom";
// import { useAppContext } from "../../common/AuthContext";

// const QrCode = () => {
//   const [qrCodeUrl, setQrCodeUrl] = useState("");
//   const { userDetails } = useAppContext();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const amount = queryParams.get("amount");

//   useEffect(() => {
//     console.log("User Details:", userDetails); // Debugging userDetails
  
//     if (!userDetails) {
//       console.log("User is not logged in.");
//       return;
//     }
  
//     if (!amount) {
//       console.log("Amount is missing in the URL.");
//       return;
//     }
  
//     const businessName = userDetails.role === "merchant" && userDetails?.business?.businessName
//       ? userDetails.business.businessName
//       : "Default Business Name";
  
//     const data = {
//       amount,
//       businessName,
//       accountNumber: userDetails?.accountNumber || "N/A",
//     };
  
//     const generateQRCode = async () => {
//       try {
//         const qrCode = await QRCode.toDataURL(JSON.stringify(data));
//         setQrCodeUrl(qrCode);
//       } catch (err) {
//         console.error("Failed to generate QR code:", err);
//       }
//     };
  
//     generateQRCode();
//   }, [amount, userDetails]);
//    // Make sure to re-run when userDetails changes

//   if (!userDetails) {
//     return <p>Please log in to view the QR code.</p>;
//   }

//   if (!amount) {
//     return <p>No amount specified in the URL.</p>;
//   }

//   return (
//     <div style={{ textAlign: "center", padding: "20px", marginTop: "100px" }}>
//       <h1>Scan QR Code</h1>
//       {qrCodeUrl ? (
//         <div>
//           <img src={qrCodeUrl} alt="QR Code" style={{ width: "300px" }} />
//           <div>{userDetails?.business?.businessName || "Default Business Name"}</div>
//           <div>Account Number: {userDetails?.accountNumber}</div>
//         </div>
//       ) : (
//         <p>Generating QR Code...</p>
//       )}
//     </div>
//   );
// };

// export default QrCode;

import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { useAppContext } from "../../common/AuthContext";
import { useLocation } from "react-router-dom";

// const QrCode = () => {
//   const [qrCodeUrl, setQrCodeUrl] = useState("");
//   const { userDetails } = useAppContext();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const amount = queryParams.get("amount");

//   useEffect(() => {
//     console.log("User Details:", userDetails); // Debugging userDetails
  
//     if (!userDetails) {
//       console.log("User is not logged in.");
//       return;
//     }
  
//     if (!amount) {
//       console.log("Amount is missing in the URL.");
//       return;
//     }
  
//     // Accessing businessName from userDetails.business
//     const businessName = userDetails?.business?.businessName || "Default Business Name";
  
//     const data = {
//       amount,
//       businessName,
//       accountNumber: userDetails?.accountNumber || "N/A",
//     };
  
//     const generateQRCode = async () => {
//       try {
//         const qrCode = await QRCode.toDataURL(JSON.stringify(data));
//         setQrCodeUrl(qrCode);
//       } catch (err) {
//         console.error("Failed to generate QR code:", err);
//       }
//     };
  
//     generateQRCode();
//   }, [amount, userDetails]);

//   if (!userDetails) {
//     return <p>Please log in to view the QR code.</p>;
//   }

//   if (!amount) {
//     return <p>No amount specified in the URL.</p>;
//   }

//   return (
//     <div style={{ textAlign: "center", padding: "20px", marginTop: "100px" }}>
//       <h1>Scan QR Code</h1>
//       {qrCodeUrl ? (
//         <div>
//           <img src={qrCodeUrl} alt="QR Code" style={{ width: "300px" }} />
//           <div>{userDetails?.business?.businessName || "Default Business Name"}</div>
//           <div>Account Number: {userDetails?.accountNumber}</div>
//         </div>
//       ) : (
//         <p>Generating QR Code...</p>
//       )}
//     </div>
//   );
// };

const QrCode = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const { userDetails } = useAppContext();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get("amount");

  useEffect(() => {
    console.log("User Details:", userDetails); // Debugging userDetails
  
    if (!userDetails) {
      console.log("User is not logged in.");
      return;
    }
  
    if (!amount) {
      console.log("Amount is missing in the URL.");
      return;
    }
  
    const businessName = userDetails?.business?.businessName || "Default Business Name";
    const accountName = userDetails?.accountNumber || "N/A";

    const data = {
      amount,
      businessName,
      accountNumber: userDetails?.accountNumber || "N/A",
    };
  
    const generateQRCode = async () => {
      try {
        const qrCode = await QRCode.toDataURL(JSON.stringify(data));
        setQrCodeUrl(qrCode);
      } catch (err) {
        console.error("Failed to generate QR code:", err);
      }
    };
  
    generateQRCode();
  }, [amount, userDetails]);

  if (!userDetails) {
    return <p>Please log in to view the QR code.</p>;
  }

  if (!amount) {
    return <p>No amount specified in the URL.</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px", marginTop: "100px" }}>
      <h1>Scan QR Code</h1>
      {qrCodeUrl ? (
        <div>
          <img src={qrCodeUrl} alt="QR Code" style={{ width: "300px" }} />
          <div>{userDetails?.business?.businessName || "Default Business Name"}</div>
          <div>Account Number: {userDetails?.accountNumber}</div>
          {/* Navigate to PaymentPage passing businessName, accountName, and walletBalance */}
          <button
            onClick={() => {
              navigate("/payment", {
                state: {
                  businessName: userDetails?.business?.businessName,
                  accountName: userDetails?.accountNumber,
                  walletBalance: userDetails?.walletBalance,
                },
              });
            }}
          >
            
          </button>
        </div>
      ) : (
        <p>Generating QR Code...</p>
      )}
    </div>
  );
};

export default QrCode;



