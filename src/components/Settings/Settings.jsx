import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import image from "../../assets/png/Profileimage.png";
import { Button } from "./AddressForm";
import { useAppContext } from "../../common/AuthContext";	
import axios from "axios";
import AxiosToastError from "../../utilis/AxiosToastError";
import Axios from "../../utilis/Axios";
import summaryAPI from "../../common/summaryAPI";
import { toast } from "react-toastify";
import DropdownMenu from "../../static/Sidebar/Dropdownmenu";
import { FiMenu } from "react-icons/fi";  // Add hamburger icon from react-icons

const AccountSettings = () => {
  const { userDetails } = useAppContext();
  const [formData, setFormData] = useState({
    firstName: userDetails.firstName || "",
    lastName: userDetails.lastName || "",
    email: userDetails.email || "",
    phoneNumber: userDetails.phoneNumber || "",
    address: userDetails.address || "",
    businessName: "",
    businessDescr: "",
    regNumber: "",
  });

  const [profileimage, setProfileImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state for dropdown menu

  // Load avatar from localStorage when component mounts
  useEffect(() => {
    const storedAvatar = localStorage.getItem('avatar');
    if (storedAvatar) {
      setProfileImage(storedAvatar); // Restore image from localStorage
    }
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result; // Get Base64 encoded image
        localStorage.setItem('avatar', base64Image);
        setProfileImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('address', formData.address);
    data.append('businessName', formData.businessName);
    data.append('businessDescr', formData.businessDescr);
    data.append('regNumber', formData.regNumber);

    if (imageFile) {
      data.append('profileImage', imageFile);
    }

    try {
      const response = await Axios({
        ...summaryAPI.uploadProfileImage,
        data: data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        const avatarURL = response.data.data.avatar;
        setProfileImage(avatarURL);
        localStorage.setItem('avatar', avatarURL);
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  // Toggle the dropdown menu
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close the dropdown when clicking outside
  const closeDropdown = () => setIsDropdownOpen(false);

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

      <AcctSettingsContainer>
        <AccountSetting>
          <header>Account Settings</header>
          <Settingform>
            <Left>
              <form onSubmit={handleSaveChanges}>
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleForm}
                    placeholder="First name"
                    readOnly
                  />
                </div>

                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleForm}
                    placeholder="Last name"
                    readOnly
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleForm}
                    placeholder="Email address"
                    readOnly
                  />
                </div>

                <div>
                  <label>Phone Number</label>
                  <input
                    type="Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleForm}
                    placeholder="Phone number"
                    readOnly
                  />
                </div>

                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleForm}
                    placeholder="Address"
                    readOnly
                  />
                </div>

                <div>
                  <label>Business/Store Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleForm}
                    placeholder="Business name"
                  />
                </div>

                <div>
                  <label>Business/Store Description</label>
                  <input
                    type="text"
                    name="businessDescr"
                    value={formData.businessDescr}
                    onChange={handleForm}
                    placeholder="Business description"
                  />
                </div>

                <div>
                  <label>Business/Store Registration Number</label>
                  <input
                    type="Number"
                    name="regNumber"
                    value={formData.regNumber}
                    onChange={handleForm}
                    placeholder="Business registration number"
                  />
                </div>

                <SettingsButton type="submit">Save changes</SettingsButton>
              </form>
            </Left>

            <Right>
              <img src={profileimage || image} alt="User Image" />
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <button
                onClick={() => document.getElementById("imageUpload").click()}
              >
                Choose Image
              </button>
            </Right>
          </Settingform>
        </AccountSetting>
      </AcctSettingsContainer>
    </Container>
  );
};

export default AccountSettings;

// Styled components for the layout and dropdown behavior

const Container = styled.div`
  justify-content: center;
  width: 50%;
  max-width: 1280px;
  margin: auto;
  margin-top: 100px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  animation: slideInFromTop 1s ease-out;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 200px;
  left: 500px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const AcctSettingsContainer = styled.div``;

const AccountSetting = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;

  header {
    font-weight: 600;
    padding: 15px;
    box-shadow: 0px 1px #e5e5e5;
  }
`;

const Settingform = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 24px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  form {
    font-size: 12px;
    color: grey;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    max-width: 350px;
  }

  input {
    width: 100%;
    max-width: 500px;
    margin: 10px 0;
    padding: 8px 2px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    outline: none;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    border: none;
    margin-top: 20px;
    padding: 8px 12px;
    border: 2px solid #e6e6e6;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3;
      color: #fff;
    }
  }
`;

const SettingsButton = styled(Button)`
  margin-top: 20px;
`;

