import styled from "styled-components";
import backgroundImage from "../chooserole/images/bg.png";
import MerchantImage from "../chooserole/images/merchant-icon.png";
import CustomerImage from "../chooserole/images/customer-icon.png";

const MainSection = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: url(${backgroundImage}) no-repeat;
  background-color: #f0f8ff;
  height: 30vh;
  padding-bottom: 15rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MainHeading = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const RoleButtons = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const RoleButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &.merchant-btn {
    display: flex;
    align-items: center;
    background-color: #004a79;
    color: white;
    gap: 10px;
    img {
      width: 25px;
    }
  }

  &.customer-btn {
    display: flex;
    align-items: center;
    background-color: #e0e0e0;
    color: #333;
    gap: 10px;
    img {
      width: 25px;
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const Main = () => (
  <MainSection>
    <MainHeading>Choose Your Role</MainHeading>
    <RoleButtons>
      <RoleButton className="merchant-btn">
        <img src={MerchantImage} alt="" />
        Merchant
      </RoleButton>
      <RoleButton className="customer-btn">
        <img src={CustomerImage} alt="" />
        Customer
      </RoleButton>
    </RoleButtons>
  </MainSection>
);

export default Main;
