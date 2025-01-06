import styled from "styled-components";
import Banner from "../../assets/png/Banner.png";
import innerbg from "../../assets/png/innerbg.png";

const About=()=>{
    return(
        <Wrapper>
            <Main>
              <Header>
                About Us
              </Header>
              <Text>
                At QMart, we’re transforming the way merchants manage their transactions and interact with customers.
                Our platform is designed to simplify payment processing for businesses of all sizes, enabling seamless and secure
                transactions with minimal effort. With QMart, merchants can focus on delivering exceptional products and services,
                while we handle the complexities of payment integration. <br /><br />

                QMart empowers merchants through features like unique QR code generation for quick payment setups and direct 
                linkage to secure payment gateways. Customers simply scan the merchant’s QR code to initiate payments, ensuring 
                a hassle-free checkout process without the need for additional apps or tools. From tracking sales to receiving 
                instant confirmations, QMart equips merchants with the tools they need to grow their business while delivering a 
                smooth customer experience. <br /><br />

                Together, let’s redefine convenience for merchants—streamlined, efficient, and built for success.
              </Text>
            </Main>
            <Down>
              <Image src={Banner} alt="Banner" />
            </Down>
        
        </Wrapper>
        
    )
  }
  
  export default About



  const Wrapper = styled.div`
    width: 100%;
    flex-wrap: wrap;
    background-color: rgba(242, 242, 242, 1);
    align-items: center;
    background-image: url(${innerbg});
    background-position: top;
    background-size: contain;
    justify-content: center;
    display: flex;
    /* margin-top: 150px; */
    padding: 0%;
    /* margin-bottom: 170px; */
    /* border: 3px solid yellow; */ 
  `
  const Main=styled.div`
    align-self:center;
    justify-items: center;
    /* border: 3px solid green; */
    width: 85%;
     margin-top: 200px;
     margin-bottom: 50px;
  `
  const Header = styled.h1`
    color: rgba(26,26,26,1);
    font-weight:570px ;
    line-height: 57.6px;
    font-size: 45px;
    /* text-align: center; */
    margin-bottom: 60px;
  `
  const Text =styled.p`
    color: rgba(0,0,0,1);
    font-size:18px ;
    font-weight: 400px;
    line-height: 24px;
    justify-items: center;
    justify-content: center;
    justify-self: center;
    /* border: 3px solid blue; */
    width:85% ;
    align-items:center;
    padding-bottom:30px ;
  `
  const Down =styled.div`
    
    /* border: 3px solid blue; */
    margin-top: 80px;
    margin-bottom: 100px;
    width: 100%;
    `
  const Image=styled.img`
    /* max-width: 1280px; */
    width: 100%;
    /* border: 3px solid red; */
    
 `