import React from "react";
import styled from "styled-components";
import ProfileImg from "../../assets/png/Profileimage.png";
import backgroundImage from "../../assets/png/bg.png";

const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${backgroundImage}) no-repeat;
  background-color: rgba(242, 242, 242, 1);
  padding: 2rem 1rem;
  margin-top: 3rem;

  h2{
    color: rgba(27, 99, 146, 1);
    font-family: sans-serif;
  }

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const UserProfileContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 100%;
  max-width: 600px;
  flex: 1;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem; 
  }
`;

const ProfileCard = styled(Card)`
  text-align: center;

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  h3 {
    margin: 0;
    font-size: 1.25rem;
    color: rgba(27, 99, 146, 1);
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #777;
  }

  a {
    font-size: 0.9rem;
    color: rgba(27, 99, 146, 1);
    text-decoration: underline;
    cursor: pointer;
  }
`;

const AddressCard = styled(Card)`
  .storeName {
    font-weight: bold;
    font-size: 1.1rem;
    color: rgba(27, 99, 146, 1);
  }

  h4 {
    font-size: 0.9rem;
    color: rgba(27, 99, 146, 1);
    margin-bottom: 0.5rem;
  }

  p {
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #555;
  }

  a {
    font-size: 0.9rem;
    color: rgba(27, 99, 146, 1);
    text-decoration: underline;
    cursor: pointer;
  }
`;

const InfoCard = styled(Card)`
  h4 {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: rgba(27, 99, 146, 1);
  }

  p {
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #555;
  }

  a {
    font-size: 0.9rem;
    color: rgba(27, 99, 146, 1);
    text-decoration: underline;
    cursor: pointer;
  }
`;

const UserProfile = ({ user }) => {
  const {
    name,
    role,
    profileImage, // Profile image URL from the API
    storeName,
    address,
    email,
    phone,
    bankDetails,
    businessDescription,
    businessRegNumber,
  } = user;

  return (
    <UserProfileWrapper>
      <h2>User Profile</h2>
      <UserProfileContent>
        <ProfileSection>
          <ProfileCard>
            <img
              src={ProfileImg} // Use dynamic image from API(profileImage)
              alt=""
            />
            <h3>{name}</h3>
            <p>{role}</p>
            <a href="Accountsettings">Edit Profile</a>
          </ProfileCard>
          <AddressCard>
            <p className="storeName">{storeName}</p>
            <p>{address}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <h4>Business Description</h4>
            <p>{businessDescription}</p>
            <h4>Business Registration Number</h4>
            <p>{businessRegNumber}</p>
            <a href="Accountsettings">Edit Details</a>
          </AddressCard>
        </ProfileSection>

        <InfoCard>
          <h4>Bank Withdrawal Details</h4>
          <p>Account Name: {bankDetails.accountName}</p>
          <p>Account Number: {bankDetails.accountNumber}</p>
          <p>Bank: {bankDetails.bank}</p>
          <a href="Accountsettings">Edit Bank Details</a>
        </InfoCard>
      </UserProfileContent>
    </UserProfileWrapper>
  );
};

export default UserProfile;
