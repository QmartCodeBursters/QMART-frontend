
import styled from "styled-components";
import Banner from "../../assets/png/Banner.png";

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
                {/* <Section>
                Your trusted and reliable retail shop
                </Section>
                <Desk>
                Discover simplicity and efficiency in every transaction. Empowering merchants to deliver excellence and grow with ease.
                </Desk> */}
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
    justify-content: center;
    display: flex;
    margin: 0 auto;
    padding: 0%;
    /* border: 3px solid yellow; */ 
  `
  const Main=styled.div`
    align-self:center;
    justify-items: center;
    /* border: 3px solid green; */
    width: 85%;
     margin-top: 85px;
  `
  const Header = styled.h1`
    color: rgba(26,26,26,1);
    font-weight:600px ;
    line-height: 57.6px;
    font-size: 48px;
    /* text-align: center; */
    margin-bottom: 60px;
  `
  const Text =styled.p`
    color: rgba(0,0,0,1);
    font-size:20px ;
    font-weight: 400;
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
    margin-bottom: 78px;
    width: 100%;
    
    /* justify-items: center;
    justify-self: center;
    align-content: center;
    align-self: center;
    align-items: center; */
    /*justify-content: center;
    justify-items: center;
    justify-self: center;
    align-items: center; */
    /* align-items: center;
    justify-content: space-between;
    padding: 40px; */
    /* max-width: 1280px; */
    /* justify-content: center;
    align-items: center; */
    /* border-radius: 8px;
    background-image: url(${Banner}); */
    /* width: 100%;
    height: 440px; */
     `
  const Image=styled.img`
    /* max-width: 1280px; */
    width: 100%;
    /* border: 3px solid red; */
    
  `
//   const Section=styled.h2`
    
//   `
//   const Desk=styled.p`
//   `