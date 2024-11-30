import React from "react";
import styled from "styled-components";
const AddresForm = () => {
  return (
    <Container>
      <AddrContainer>
        <Header>Current Address</Header>
        <FormSection>
          <NameSection>
            <label>
              First name <br />
              <input type="text" />
            </label>
            <br />

            <label>
              Last name <br />
              <input type="text" />
            </label>
            <br />

            <label>
              Company name <span>(optional)</span> <br />
              <input type="text" />
            </label>
            <br /> 
          </NameSection><br />
          <Street>
          <label>
            Street Address <br />
            <input type="text,Number" />
          </label>
          </Street>
          <br />
          <Country>
            <label>
              Country/Region
              <br />
              <select/>
            </label>
            <br />
            <label>
              States <br />
              <select/>
            </label>{" "}
            <br />
            <label>
              Zip Codes <br />
              <input type="number" />
            </label>{" "}
            <br />
          </Country> <br />
          <EmailNum>
            <label>
              Email
              <br />
              <input type="text,Number" />
            </label>
            <br />

            <label>
              {" "}
              Phone <br />
              <input type="number" />
            </label>
            <br />
          </EmailNum>{" "}
          <br />
          <Button>save changes</Button>
        </FormSection>
      </AddrContainer>
    </Container>
  );
};
export default AddresForm;

const Container = styled.div`
  background-color: #edeff2;
  max-width: 1280px;
  padding-top: 20px;
  font-size: 14px;
  color: #1A1A1A;
`;
const AddrContainer = styled.div`
  width: 70%;
  background-color: #ffffff;
  margin: auto;
  margin-right: 48px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 5px;

  /* margin-top: 10px; */
`;
const Header = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 10px;
  box-shadow: 1px 1px #e5e5e5;
`;
const FormSection = styled.div`
  padding-left: 15px;
  /* flex-wrap: wrap; */
`;

const NameSection = styled.div`
display:flex;
gap:10px;

input{
    width: 13.5rem;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #E6E6E6;
}
`
const Street = styled.div`
    input{
    width: 43.58rem;
    height:25px ;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
 
 }`

 const Country= styled.div`
    display: flex;
    gap: 10px;

    input{
    width: 13rem;
    height:25px ;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    }
    select{
        width: 14rem;
        height: 25px;
        border: 1px solid #E6E6E6;
        border-radius: 5px;
    }

 `
const EmailNum = styled.div`
display: flex;
gap: 10px;

input{
    width: 21rem;
    height:25px;
    border: 1px solid #E6E6E6;
    border-radius:5px;

    }
`
const Button = styled.div`
      padding: 12px 20px;
      width: 8rem;
      border: transparent;
      border-radius: 4px;
      color: #ffffff;
      background-color: #fa8232;
      margin-top: 5px;
      margin-bottom: 15px;
      font-size: 14px;
      text-align: center;

  `;
