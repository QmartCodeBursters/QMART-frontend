import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../common/AuthContext";
import qlogo from "../../assets/png/logo.png";

const Footer = () => {
  const { email } = useAppContext(); // Access email state from context

  // Render footer only if no user is logged in
  if (email !== "") return null;

  return (
    <Wrapper>
      <Newscont>
        <ContentWrapper>
          <Subscribe>
            <h4>Subscribe to our Newsletter</h4>
            <p>Join Our Community: Fresh Deals and New Arrivals Straight to Your Inbox</p>
          </Subscribe>
          <Inputfield>
            <input type="text" placeholder="Your email address" />{" "}
            <button>Subscribe</button>
          </Inputfield>
        </ContentWrapper>
      </Newscont>
      <FooterCont>
        <FooterSection>
          <Logocont>
            <img src={qlogo} alt="logo" />
            <p>Qmart</p>
          </Logocont>
        </FooterSection>
        <FooterSection>
          <strong>My Account</strong>
          <ul>
            <li>Dashboard</li>
            <li>Order History</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <strong>Help</strong>
          <ul>
            <li>Contact us</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <strong>Proxy</strong>
          <ul>
            <li>Wallet</li>
            <li>Shop</li>
            <li>Terms of Service</li>
            <li>Product</li>
            <li>Cookie Policy</li>
            <li>Track Order</li>
          </ul>
        </FooterSection>
      </FooterCont>
      <Hrline>
        <hr />
        <p>QMart © 2024. All Rights Reserved</p>
      </Hrline>
    </Wrapper>
  );
};

export default Footer;

// Styled-components
const Wrapper = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  color: grey;
  font-size: 12px;
`;

const FooterCont = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: rgb(255, 255, 255);
  padding: 30px 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Newscont = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Subscribe = styled.div`
  flex: 1;
  text-align: left;

  h4 {
    font-size: 18px;
    color: #1a1a1a;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: grey;
    margin: 0;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Inputfield = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  input {
    flex: 1;
    max-width: 400px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    outline: none;
    position: relative;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #09456b;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-left: -30px;
    z-index: 1;
    cursor: pointer;

    &:hover {
      background-color: #333;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;

    input {
      max-width: none;
      width: 70%;
    }

    button {
      flex: 0;
    }
  }
`;

const FooterSection = styled.div`
  margin: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }

  h3 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 5px 0;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      color: grey;
    }
  }
`;

const Logocont = styled.div`
  display: flex;
  color: white;
  font-size: 20px;
  gap: 10px;
  img {
    width: 40px;
  }
`;

const Hrline = styled.div`
  text-align: center;

  p {
    padding: 10px 0;
  }
`;
