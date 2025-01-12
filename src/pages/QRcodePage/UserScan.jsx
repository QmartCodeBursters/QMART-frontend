import React, { useRef, useState }from "react";
import styled from "styled-components";
import jsQR from "jsqr";

const ScanHere = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [qrResult, setQrResult] = useState("Click the button to start scanning");

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute("playsinline", true); // Required for iOS
        videoRef.current.play();
        scanQRCode();
      }
    } catch (error) {
      console.error("Error accessing the camera:", error);
      setQrResult("Unable to access the camera.");
    }
  };

  const scanQRCode = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const canvasContext = canvas.getContext("2d");

    const scan = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
        const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

        if (qrCode) {
          setQrResult(`QR Code Found: ${qrCode.data}`);
          stopCamera();
          return;
        }
      }
      requestAnimationFrame(scan);
    };

    scan();
  };

  const stopCamera = () => {
    const video = videoRef.current;
    if (video && video.srcObject) {
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
    }
  };

  const handleOnClick = () => {
    startCamera();
  };

  return (
    <ScanContainer>
      <Video ref={videoRef}/>
      <Canvas ref={canvasRef} hidden />
      <p>{qrResult} </p>
      <button onClick={handleOnClick}>CLICK HERE TO MAKE PAYMENT</button>
    </ScanContainer>
  );
};


export default ScanHere ;

const ScanContainer = styled.div `
 background-color: #edeff2;
  max-width: 1280px;
  height:100vh;
  padding: 30px;
  font-size: 14px;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 10px;

 button{
    background-color:#1B6392 ;
    color: #ffffff;
    border-radius: 8px;
    border: transparent;
    font-weight: 600;
    font-size: 20px;
    padding: 20px 50px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f85e0a;
    }
 }`

 const Video = styled.video`
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const Canvas = styled.canvas`
  display: none;
 `