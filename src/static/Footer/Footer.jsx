import styled from 'styled-components'
import qlogo from '../../assets/png/logo.png'
// import './Footer.css'

const Footer = () =>{
    return(
     <Wrapper>
        <FooterCont>
          <FooterSection>
            <ul>
              <Logocont>
                <img src={qlogo} alt="" />
                <p>Qmart</p>
              </Logocont>
                  
              </ul>
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
                <li>Faqs</li>
                <li>Terms & conditions</li>
                <li>Privacy policy</li>
              </ul>
          </FooterSection>
    
          <FooterSection>
            <strong>Proxy</strong>
              <ul>
                <li>Wallet</li>
                <li>Shop</li>
                <li>Terms of service</li>
                <li>Product</li>
                <li>Cookie policy</li>
                <li>Track order</li>
              </ul>
          </FooterSection>
      </FooterCont>
     <Hrline>
     <hr />
     <p>QMart © 2024. All Rights Reserved</p>
     </Hrline>
    </Wrapper>

    )
  }
  
  export default Footer

  const Wrapper = styled.div`
    width: 100%;
    background-color:#1A1A1A;
    color: grey;
    /* text-align: center; */
    font-size: 12px;
    
  `
  const FooterCont = styled.div`
    max-width: 1280px;
    /* width: 50%; */
    margin: 0px auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: rgb(255, 255, 255);
    padding: 30px 60px;
    /* margin-top: 80px; */

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `
  const FooterSection = styled.div`
    /* flex: 1; */
    /* min-width: 100px; */
    margin: 10px;

    @media (max-width: 768px) {
      text-align: center;
    }

    h3{
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
  `
 const Logocont = styled.div`
    display: flex;
    color: white;
    font-size: 28px;
    gap: 10px;
    img{
        width: 40px;
    }
 `

 const Hrline = styled.div`
    text-align: center;

    p {
      padding: 10px 0;
    }
 `