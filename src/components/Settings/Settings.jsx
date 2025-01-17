import React, { useState, useContext } from "react";
import styled from "styled-components";
import image from "../../assets/png/Profileimage.png";
import { Button } from "./AddressForm";
import { useAppContext } from "../../common/AuthContext";	

const AccountSettings = () => {
  const { userDetails } = useAppContext();
  const [formData, setFormData] = useState({
    firstName: userDetails.firstName || "",
    lastName:userDetails.lastName || "",
    email:userDetails.email || "",
    phoneNumber:userDetails.phoneNumber || "",
    businessName: "",
    businessDescr: "",
    regNumber: "",
  });

  
  const [profileimage, setProfileImage] = useState(image);

  const handleForm = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <Container>
      <AcctSettingsContainer>
        <AccountSetting>
          <header>Account Settings</header>
          <Settingform>
            <Left>
              <form>
                <div>
                  <label>First Name</label> <br />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleForm}
                    placeholder="First name"
                    readOnly
                  />
                </div>
                <br />
                <div>
                  <label>Last Name</label> <br />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleForm}
                    placeholder="Last name"
                    readOnly
                  />
                </div>
                <br />
                <div>
                  <label>Email</label> <br />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleForm}
                    placeholder="Email address"
                    readOnly
                  />
                </div>
                <br />
                <div>
                  <label>Phone Number</label> <br />
                  <input
                    type="Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleForm}
                    placeholder="Phone number"
                    readOnly
                  />
                </div>
                <br />
                <div>
                  <label>Business/Store Name</label> <br />
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleForm}
                    placeholder="Business name"
                  />
                </div>
                <br />
                <div>
                  <label>Business/Store Description</label> <br />
                  <input
                    type="text"
                    name="businessDescr"
                    value={formData.businessDescr}
                    onChange={handleForm}
                    placeholder="Business description"
                  />
                </div>
                <br />
                <div>
                  <label>Business/Store Registration Number</label> <br />
                  <input
                    type="Number"
                    name="regNumber"
                    value={formData.regNumber}
                    onChange={handleForm}
                    placeholder="Business registration number"
                  />
                </div>
                <br />
                <SettingsButton type="submit">Save changes</SettingsButton>
              </form>
            </Left>
            <Right>
              <img src={profileimage} alt="User Image" />
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



const Container = styled.div`
  justify-content: center;
  width: 90%;
  max-width: 1280px;
  margin: auto;
  margin-top: 190px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-top: 95px;
  }
`;

const AccountSetting = styled.div`
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  header {
    font-weight: 600;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0px 1px #e5e5e5;
  }
`;

const AcctSettingsContainer = styled.div``;

const Settingform = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 12px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  form {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    max-width: 500px;
    margin: 0.5rem 0;
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
  }
`;

const SettingsButton = styled(Button)`
  margin-top: 0px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-right: 150px;

  @media (max-width: 768px) {
    margin: auto;
    justify-content: center;
  }

  img {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    border: none;
    margin-top: 20px;
    padding: 12px 20px;
    border: 2px solid #e6e6e6;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
