import React, { useState } from "react";
import styled from "styled-components";
import image from "../../assets/png/Profileimage.png"
import { Button } from "./AddressForm";

const AccountSettings = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
      const [profileimage, setProfileImage] = useState(image);
      const handleForm = (e) => {
        e.preventDefault()
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
        <>
      <Container>
        <AcctSettingsContainer>
          <AccountSetting>
            <header> Account Settings</header>
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
                    />
                  </div>
                  <br />
                  <div>
                    <label>
                      Last Name <br />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleForm}
                      />
                    </label>
                  </div>
                  <br />
                  <div>
                    <label>Email </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleForm}
                    />
                  </div>
                  
                  <br />
                  <div>
                    <label>Phone Number </label>
                    <br />
                    <input
                      type="Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleForm}
                    />
                  </div>
                  <br /> 
                  <div>
                  <label>Business/Store Name </label> <br />
                  <input type="text" name="businessName" />
                  <br /><br />
                  </div>
                  
                  <div>
                  <label>Business/Store Description (Max : 100 words)  </label> <br />
                  <input type="text" name="businessDescr"
                  rows= "3" />
                  <br /><br />
                  </div>
                  
                  <div>
                  <label>Business/Store Registration Number </label> <br />
                  <input type="Number" name="regNumber"/>
                  <br /><br />
                  </div>
                  <SettingsButton type="submit">save changes</SettingsButton>
                </form>
              </Left>
              <Right>
                <img src={profileimage} alt="User Image" />
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  style={{ display: "none" }} // Hide the file input
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
    </>
     );
    };
    
    export default AccountSettings;
    const Container = styled.div`
        max-width: 100%;
        justify-content: center;
        /* padding: 1rem; */
        width: 90%;
  max-width: 1280px;
  margin: auto;
  margin-top:190px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const AccountSetting = styled.div`
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  ;
  header {
    font-weight: 600;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0px 1px #e5e5e5;
  }
`;

const AcctSettingsContainer= styled.div``
const Settingform = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    /* align-items: center; */
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
    width: 20rem;
    height: 25px;
    width: 100%;
    max-width: 500px;
    margin: 0.5rem 0;
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid #ccc;
}`;

const SettingsButton= styled(Button)`
width: 100%;
`
 
;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-right: 150px;
  
  img {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    object-fit: cover;
    flex-direction: column;
    @media (max-width: 768px) {
      height: 200px;
      width: 200px;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
    }
  }
  button {
    border: none;
    margin-top: 20px;
    padding: 12px 20px;
    border: 2px solid #e6e6e6;
    border-radius: 4px;
  }
`;