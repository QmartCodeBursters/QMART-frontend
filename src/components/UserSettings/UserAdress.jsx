import React, { useState } from "react";
import styled from "styled-components";
const UserAddress= () => {
  const [formData, setFormData] = useState({
    companyName: "",
    streetAddress: "",
    country: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
  });
  // const countries = {
  //   USA: ["California", "New York", "Texas"],
  //   Canada: ["Ontario", "Quebec", "Alberta"],
  // };
  const [states, setStates] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <Container>
      <AddrContainer>
        <Header>Current Address</Header>

        <FormSection onSubmit={handleSubmit}>

          <Street>
            <label>
              Street Address
              <br />
              <input
                type="text"
                placeholder="Enter street address"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
              />
            </label>
          </Street>


          <Country>
            <label>
              Country/Region
              <br />
              <select>
                <option value="">Select country</option>
                {/* {Object.keys(countries).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option> */}
                {/* ))} */}
              </select>
            </label>

            <label>
              States <br />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                disabled={!states.length}
              >
                <option value="Select state">Select state</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Zip Codes
              <br />
              <input
                type="number"
                placeholder="Enter zip code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </label>
          </Country>


          <EmailNum>
            <label>
              Email
              <br />
              <input
                type="text"
                placeholder="Enter Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone
              <br />
              <input
                type="number"
                placeholder="Enter phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
          </EmailNum>

          <Button type="submit" onClick={handleSubmit}>
            save changes
          </Button>
        </FormSection>
      </AddrContainer>
    </Container>
  );
};

export default UserAddress;

const Container = styled.div`
  background-color: #edeff2;
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
`;

const AddrContainer = styled.div`
  background-color: #ffffff;
  max-width: 1280px;
  width: 90%;
  margin: auto;
  padding: 12px ;
  border: 1px solid #e6e6e6;
  border-radius: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const Header = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
  padding-left: 15px;
  padding: 15px;
  box-shadow: 1px 1px #e5e5e5;
`;

const FormSection = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
`;


const Street = styled.div`
  width: 100%;

  input {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.8rem;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-top: 5px;
  }
`;

const Country = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  label {
    flex: 1;
    width: 100%;
  }

  input {
    width: 100%;
    gap: 30px;
    padding: 0.8rem;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-top: 5px;
  }

  select {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.8rem;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-top: 5px;
  }
`;

const EmailNum = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  label {
    width: 100%;
  }

  input {
    padding: 0.8rem;
    border: 1px solid #e6e6e6;
    width: 100%;
    border-radius: 5px;
    margin-top: 5px;
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #fa8232;
  max-width: 150px;
  width: 100%;
  margin-top: 10px;
  text-align: center;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 38%;
  }
`;
