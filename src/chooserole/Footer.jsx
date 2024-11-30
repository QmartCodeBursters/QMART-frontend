import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #111111;
  color: #ffffff;
  padding: 2rem 1.5rem;

  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSection = styled.div`
  flex: 1;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      color: #cccccc;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        color: #ffffff;
      }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333333;
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;

  p {
    font-size: 0.85rem;
    color: #cccccc;

    a {
      color: #ffffff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const FooterContact = styled.div`
  p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
    color: #cccccc;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Brand and Contact Section */}
        <FooterSection>
          <h3>QMart</h3>
          <FooterContact>
            <p>Browse products from trusted merchants near you—shop made simple!</p>
            <p>(219) 555-0114</p>
            <p>
              <a href="mailto:Proxy@gmail.com">Proxy@gmail.com</a>
            </p>
          </FooterContact>
        </FooterSection>

        {/* My Account Section */}
        <FooterSection>
          <h3>My Account</h3>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
          </ul>
        </FooterSection>

        {/* Helps Section */}
        <FooterSection>
          <h3>Helps</h3>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </FooterSection>

        {/* Proxy Section */}
        <FooterSection>
          <h3>Proxy</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
          </ul>
        </FooterSection>
      </FooterContainer>

      {/* Bottom Section */}
      <FooterBottom>
        <p>
          QMart eCommerce © 2024. All Rights Reserved.
        </p>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
