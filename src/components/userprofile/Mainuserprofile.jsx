import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppContext } from "../../common/AuthContext";

const UserProfile = () => {
  const { userDetails } = useAppContext();
  const chartRef = useRef(null); // Reference for the Chart.js canvas

  // Ensure userDetails is not null or undefined
  if (!userDetails) {
    return <div>Loading...</div>;
  }

  const {
    firstName = "N/A",
    lastName = "N/A",
    role = "N/A",
    profileImage = "default-profile.jpg",  // Default image or Cloudinary URL
    businessName = "N/A",
    address = "N/A",
    email = "N/A",
    phoneNumber = "N/A",
    bankDetails = { accountName: "N/A", accountNumber: "N/A", bank: "N/A" },
    businessDescription = "N/A",
    businessRegNumber = "N/A",
  } = userDetails;

  // Generate initials for the profile picture if no image is available
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial} ${lastInitial}`;
  };

  useEffect(() => {
    if (chartRef.current && !profileImage) {
      // Clear the canvas context and draw the initials manually
      const ctx = chartRef.current.getContext("2d");
      const initials = getInitials(firstName, lastName);

      // Draw initials directly on the canvas
      ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height);  // Clear previous content
      ctx.font = "bold 24px Arial";  // Set font style
      ctx.fillStyle = "#4CAF50";  // Set text color
      ctx.textAlign = "center";  // Center the text horizontally
      ctx.textBaseline = "middle";  // Center the text vertically
      ctx.fillText(initials, chartRef.current.width / 2, chartRef.current.height / 2);  // Draw the initials
    }
  }, [firstName, lastName, profileImage]);

  const initials = getInitials(firstName, lastName);

  return (
    <Container>
      <h1>PROFILE</h1>
      <ProfileCard>
        {profileImage ? (
          <ProfileImage src={profileImage} alt={`${firstName} ${lastName}'s profile`} />
        ) : (
          <ProfileCanvas ref={chartRef} width="80" height="80">
            {initials}
          </ProfileCanvas>
        )}
        <ProfileDetails>
          <Name>{firstName} {lastName}</Name>
          <Role>{role}</Role>
          <a href="/Settings">Edit</a>
        </ProfileDetails>
      </ProfileCard>

      <StoreInfo>
        <SectionTitle>User's Information</SectionTitle>
        <InfoRow>
          <Label>Address:</Label>
          <Value>{address}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Email:</Label>
          <Value>{email}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Phone:</Label>
          <Value>{phoneNumber}</Value>
        </InfoRow>
      </StoreInfo>

      <BusinessDetails>
        <SectionTitle>Business Details</SectionTitle>
        <InfoRow>
          <Label>Store Name:</Label>
          <Value>{businessName}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Account Name:</Label>
          <Value>{bankDetails.accountName}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Account Number:</Label>
          <Value>{bankDetails.accountNumber}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Bank:</Label>
          <Value>{bankDetails.bank}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Description:</Label>
          <Value>{businessDescription}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Registration Number:</Label>
          <Value>{businessRegNumber}</Value>
        </InfoRow>
      </BusinessDetails>
    </Container>
  );
};

export default UserProfile;

// Styled-components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  margin: 100px auto;

  h1 {
    text-align: center;
    padding: 10px;
  }
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProfileCanvas = styled.canvas`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Role = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 5px;
`;

const StoreInfo = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

const BusinessDetails = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1b6392;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const Value = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #555;
  text-align: right;
  word-wrap: break-word;
`;
