import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../common/AuthContext"; 


const QrCode = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const { userDetails, businessName } = useAppContext(); 
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get("amount");

  useEffect(() => {
    const generateQRCode = async () => {
      if (!userDetails || !amount || !businessName) {
        console.error("Missing required information for QR code generation.");
        return;
      }

      const accountNumber = userDetails.accountNumber || "N/A";
      const finalDetails = {
        amount,
        businessName: businessName || userDetails?.business?.businessName || "Default Business Name", 
        accountNumber,
      };

      try {
        const qrCode = await QRCode.toDataURL(JSON.stringify(finalDetails));
        setQrCodeUrl(qrCode);
      } catch (err) {
        console.error("Error generating QR Code:", err);
      }
    };


     generateQRCode();
  }, [amount, userDetails, businessName]);

  if (!userDetails) {
    return <p style={{ textAlign: "center" }}>Please log in to view the QR code.</p>;
  }

  if (!amount) {
    return <p style={{ textAlign: "center" }}>No amount specified in the URL.</p>;
  }

  if (!businessName && !userDetails?.business?.businessName) {
    return <p style={{ textAlign: "center" }}>Business name is missing.</p>;
  }
 return (
    <div style={{ textAlign: "center", padding: "20px", marginTop: "100px" }}>
      <h1>Scan QR Code</h1>
      {qrCodeUrl ? (
        <div>

          <img
            src={qrCodeUrl}
            alt="QR Code"
            style={{ width: "300px", margin: "20px auto" }}
          />
          <div style={{ marginTop: "10px", fontSize: "18px" }}>
            <strong>Business Name:</strong> {businessName || userDetails?.business?.businessName || "Default Business Name"}
          </div>
          <div style={{ marginTop: "5px", fontSize: "16px" }}>
            <strong>Account Number:</strong> {userDetails?.accountNumber}
          </div>

{/* //           <img src={qrCodeUrl} alt="QR Code" style={{ width: "300px" }} />
//           <div>{userDetails?.business?.businessName || "Default Business Name"}</div>
//           <div>Account Number: {userDetails?.accountNumber}</div> */}
          {/* Navigate to PaymentPage passing businessName, accountName, walletBalance, and amount */}

          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              display: "none"
            }}
            
            onClick={() =>
              navigate("/payment", {
                state: {
                  businessName: businessName || userDetails?.business?.businessName,
                  accountName: userDetails?.accountNumber,
                  walletBalance: userDetails?.walletBalance,
                  amount, // Pass the amount here
                },
              })
            }
          >
            {/* Proceed to Payment */}
          </button>
        </div>
      ) : (
        <p>Generating QR Code...</p>
      )}
    </div>
  );
}

export default QrCode;