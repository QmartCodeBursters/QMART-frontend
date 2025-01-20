import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../common/AuthContext";
import DropdownMenu from "../../static/Sidebar/Dropdownmenu";
import { FiMenu } from "react-icons/fi"; // Import Hamburger Icon from react-icons

const UserProfile = () => {
  const { userDetails } = useAppContext();
  const chartRef = useRef(null); // Reference for the Chart.js canvas
  const [profileImage, setProfileImage] = useState(null); // State to store the profile image
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  // Ensure userDetails is not null or undefined
  if (!userDetails) {
    return <div>Loading...</div>;
  }

  // Retrieve the avatar from localStorage on component mount
  useEffect(() => {
    const storedAvatar = localStorage.getItem('avatar');
    if (storedAvatar) {
      setProfileImage(storedAvatar); // Set the profile image from localStorage
    }
  }, []);

  const {
    firstName = "N/A",
    lastName = "N/A",
    role = "N/A",
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
      const ctx = chartRef.current.getContext("2d");
      const initials = getInitials(firstName, lastName);
  
      ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height);
      ctx.font = "bold 24px Arial";
      ctx.fillStyle = "#4CAF50";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(initials, chartRef.current.width / 2, chartRef.current.height / 2);
    }
  }, [firstName, lastName, profileImage]);

  const initials = getInitials(firstName, lastName);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Container> 
         {/* Hamburger Menu Button */}
      <HamburgerMenu onClick={toggleDropdown}>
        <FiMenu size={30} color="#333" />
      </HamburgerMenu>

      {/* Overlay to close dropdown */}
      {isDropdownOpen && <Overlay onClick={closeDropdown} />}

    {/* Dropdown menu */}
    {isDropdownOpen && (
        <DropdownMenu
          isOpen={isDropdownOpen}
          closeDropdown={closeDropdown}
          handleNavigation={() => {}}
          handleLogout={() => {}}
          isLoggedIn={true}
        
        />
      )}
  

      <h1>PROFILE</h1>
      
      <ProfileCard>
        {profileImage ? (
           <ProfileImage src={profileImage} alt="User Image" />
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

const Container = styled.div`
  max-width: 700px;
  margin: 100px auto;
 padding: 20px;
  border-radius: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: slideInFromTop 1s ease-out;

  @keyframes slideInFromTop {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h1 {
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    color: #333;
    font-weight: 600;
  }
`;

// Styling for Hamburger Menu
const HamburgerMenu = styled.div`
  position:;
  top: 90px;
  left: 90px;
  cursor: pointer;
  z-index: 1000; /* Ensure it's on top of other elements */
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  z-index: 999;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  border: 3px solid #d58308; /* Green border for accent */
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: #eac408; /* Darker green on hover */
  }
`;

const ProfileCanvas = styled.canvas`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #4CAF50;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Role = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 5px;
`;

const EditLink = styled.a`
  margin-top: 10px;
  font-size: 1rem;
  color: #1b6392;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3b8d9e;
  }
`;

const StoreInfo = styled.div`
  margin-bottom: 30px;
  background-color: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const BusinessDetails = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #555;
`;

const Value = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #444;
  text-align: right;
`;

