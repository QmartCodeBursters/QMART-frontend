import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import QRCode from "qrcode";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useAppContext } from "../../common/AuthContext";

const PrintQRcode = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const componentRef = useRef(null);
  const { role, userDetails, businessName } = useAppContext();

  const storeName = businessName || userDetails?.business?.businessName || "Default Business Name";
  const accountNumber = userDetails?.accountNumber || "N/A";
  const walletBalance = userDetails?.accountBalance || "0.00";

  useEffect(() => {
    if (role !== "merchant") {
      navigate("/dashboard"); // Redirect non-merchants to the homepage or another route
      return;
    }

    const generateQRCode = async () => {
      const data = {
        businessName: storeName,
        accountNumber,
        amount: walletBalance,
        // Other data for QR code
      };
      try {
        setLoading(true);
        const qrCode = await QRCode.toDataURL(JSON.stringify(data));
        setQrCodeUrl(qrCode);
        setLoading(false);
      } catch (err) {
        console.error("Failed to generate QR code:", err);
        setLoading(false);
      }
    };

    generateQRCode();
  }, [role, navigate, storeName, accountNumber, walletBalance]);

  const handleDownloadClick = async () => {
    const element = componentRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("PrintQRcode.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/dashboard");
  };

  // Simulate checking email after scanning QR code (replace with actual check logic)
  const handleEmailCheck = (email) => {
    // Simulate checking email in your system
    const emailExists = userDetails?.email === email;

    if (!emailExists) {
      // Navigate to the signup page if email is not found
      navigate("/signup");
    }
  };

  const handleScanQRCode = (scannedData) => {
    const scannedEmail = scannedData?.email; // Assume scanned data contains email field
    if (scannedEmail) {
      handleEmailCheck(scannedEmail);
    } else {
      console.log("No email found in scanned QR code.");
    }
  };

  if (role !== "merchant") {
    return <p>Unauthorized Access</p>; // Render a message or blank screen for non-merchants
  }

  return (
    <Container>
      <Wrapper ref={componentRef}>
        <Header>{storeName}</Header>
        <Subhead>Invites you to QMART</Subhead>
        <Scan>
          Scan my QR code, sign up and <Red>Shop NOW!</Red>
        </Scan>
        <QrCodeContainer>
          {loading ? (
            <p>Generating QR Code...</p>
          ) : (
            <img src={qrCodeUrl} alt="QR Code" />
          )}
        </QrCodeContainer>
        <Footer>QMART, seamless shopping anytime, anywhere!</Footer>
        <Buttons>
          <button onClick={handleDownloadClick} type="button">
            Download as PDF
          </button>
          <button onClick={handleLogout} type="button">
            Close
          </button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default PrintQRcode;


// Styled components remain the same


const Container = styled.div`
  background-color: rgba(27, 99, 146, 1);
  width: 60%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  margin: 100px auto;
  animation: slideInFromTop 1s ease-out;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  max-width: 1280px;
  padding: 40px 20px;
  margin-top: 50px;
  width: 90%;
  text-align: center;
`;

const Header = styled.h1`
  margin-top: 30px;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 725px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Subhead = styled.h2`
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: rgba(26, 26, 26, 1);

  @media (max-width: 685px) {
    font-size: 14px;
  }
`;

const Scan = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 30px;

  @media (max-width: 685px) {
    font-size: 16px;
  }
`;

const Red = styled.span`
  color: red;
  font-weight: 400;
  font-size: 30px;

  @media (max-width: 685px) {
    font-size: 14px;
  }
`;

const QrCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  img {
    width: 300px;
    @media (max-width: 685px) {
      width: 150px;
    }
  }
`;

const Footer = styled.p`
  padding-bottom: 50px;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;

  @media (max-width: 685px) {
    font-size: 15px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #1b6392;
    color: white;
    transition: background-color 0.3s;

    &:hover {
      background-color: #154a6c;
    }

    &:disabled {
      background-color: #a1c4d6;
      cursor: not-allowed;
    }
  }
`;
