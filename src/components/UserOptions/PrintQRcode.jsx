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
  const { role, businessName } = useAppContext();

  const storeName = businessName || "Default Business Name";

  useEffect(() => {
    if (role !== "merchant") {
      navigate("/dashboard"); // Redirect non-merchants to the dashboard
      return;
    }

    const generateQRCode = async () => {
      const link = "https://qmartcode.netlify.app";
      try {
        setLoading(true);
        const qrCode = await QRCode.toDataURL(link); // Generate QR code for the link
        setQrCodeUrl(qrCode);
        setLoading(false);
      } catch (err) {
        console.error("Failed to generate QR code:", err);
        setLoading(false);
      }
    };

    generateQRCode();
  }, [role, navigate]);

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

  if (role !== "merchant") {
    return <p>Unauthorized Access</p>;
  }

  return (
    <Container>
      <Wrapper ref={componentRef}>
        <Header>{storeName}</Header>
        <Subhead>Scan the QR code below</Subhead>
        <Scan>
          <Red>to make payment on QMart!</Red>
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
