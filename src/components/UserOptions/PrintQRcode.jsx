import React from "react";
import styled from "styled-components";
import QRcode from "../../assets/png/QRcode.png";


const PrintQRcode =()=>{
    return(
        <Container>
        <Wrapper>           
            <Header>
                SAIL04 SUPERMARKET
            </Header>
            <Subhead>
                Invites you to QMART
            </Subhead>
            <Scan>
                Scan my QR code,sign up and
           
            
            <Red>Shop NOW!</Red>
            </Scan>
            
            <Image src={QRcode} alt="QRcode" />
            
            <Footer>
                QMART,seamless shopping anytime,anywhere!
            </Footer>
        </Wrapper>
        </Container>
    )
}

export default PrintQRcode


const Container=styled.div`
background-color:rgba(27, 99, 146, 1);
 /* border: 40px rgba(27, 99, 146, 1); */
    /* max-width: 1280px; */
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 80px;


`
const Wrapper=styled.div`
    background-color: rgba(255, 255, 255, 1);
    border-radius:30px;
    max-width: 1280px;
    align-items: center;
    justify-self: center;
    justify-items: center;
    align-self: center;
    flex-wrap: wrap;
    padding-top:70px;
    margin-top: 50px;
    width: 90%;
`

const Header =styled.h1`
    margin-top: 30px;
    font-weight:700px;
    font-size:90px;
    text-align: center;
    margin-bottom: 10px;
    line-height:px ;

    @media(max-width:725px) {
        font-size: 85px;
    }

    @media(max-width:685px) {
        font-size: 60px;  
    }
    @media(max-width:480px) {
        font-size: 40px;   
    }
`
const Subhead =styled.h2`
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 60px;
    line-height: px;
    text-align: center;
    color: rgba(26,26,26,1);

    @media(max-width:685px) {
        font-size: 30px;

        
    }
`
const Scan =styled.p`
    //margin: 20px 0;
    align-items: center;
    text-align: center;
    font-weight: 400;
    font-size: 60px;
    line-height:px;

    @media(max-width:685px) {
        font-size: 30px;

        
    }
`
const Red =styled.p`
    color: red;
    font-weight: 400;
    align-self:center ;
    text-align: center;
    line-height: px;
    font-size: 60px;
    margin-bottom: 35px;

    @media(max-width:685px) {
        font-size: 30px;

        
    }
    
`
const Image =styled.img`
    /* max-width: 1280px; */
    width: 600px;
    //margin: 20px 0;

    @media(max-width:685px) {
        width:400px;
        
    }
`
const Footer = styled.p`
    padding-top: 80px;
    padding-bottom: 150px;
    font-size: 40px;
    line-height:px;
    flex-wrap: wrap;
    font-style: italic;
    font-weight: 400;
    text-align:center ;

    @media(max-width:685px) {
        font-size: 15px;

        
    }


    /* @media (max-width: 480px) {
        font-size: 11px;
    } */
`