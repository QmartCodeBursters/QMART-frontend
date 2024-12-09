import React, { useState } from "react";
import styled from "styled-components";
const AddresForm = () => {
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
          <NameSection>
            <label>
              Company name <span>(optional)</span>
              <br />
              <input
                type="text"
                placeholder="Enter company name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </label>
            <br />
          </NameSection>

          <br />

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

          <br />

          <Country>
            <label>
              Country/Region
              <br />
              <select>
                {/* <option value="">Select country</option>
                {Object.keys(countries).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))} */}
              </select>
            </label>

            <br />

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

            <br />

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

            <br />
          </Country>

          <br />

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
            <br />

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

            <br />
          </EmailNum>

          <br />

          <Button type="submit" onClick={handleSubmit}>
            save changes
          </Button>
        </FormSection>
      </AddrContainer>
    </Container>
  );
};
export default AddresForm;

const Container = styled.div`
  background-color: #edeff2;
  max-width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 1rem;
`;

const AddrContainer = styled.div`
  background-color: #ffffff;
  width: 90%;
  max-width: 1280px;
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
`;

const NameSection = styled.div`
  flex: 1;
  flex-wrap: wrap;

  input {
    width: 75rem;
    margin: 0.5rem 0;
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    margin-top: 5px;

    @media (max-width: 768px) {
      width: 20rem;
    }
  }
`;
const Street = styled.div`
  input {
    width: 75rem;
    margin: 0.5rem 0;
    padding: 0.8rem;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-top: 5px;

    @media (max-width: 768px) {
      width: 20rem;
    }
  }
`;

const Country = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.1px;
  }

  label {
    flex: 1;
  min-width: 200px;
  }

  input {
    width: 24rem;
    gap: 20px;
    padding: 0.8rem;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-top: 5px;
  }

  select {
    width: 23.5rem;
    margin: 0.5rem 0;
    padding: 0.8rem;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-top: 5px;
    }
`;

const EmailNum = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 768px){
    gap: 5px;
  }

  input {
    width: 36.5rem;
    /* max-width: 500px; */
    padding: 0.8rem;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-top: 5px;
  }
`;

const Button = styled.div`
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #fa8232;
  width: 14%;
  /* max-width: 150px; */
  margin-top: 10px;
  text-align: center;
  color: white;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 28%;
  }
`;
