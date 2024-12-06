import React from "react";
import styled from "styled-components";
import QRcode from "../../assets/png/QRcode.png";


const PrintQRcode =()=>{
    return(
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
    )
}

export default PrintQRcode


const Wrapper=styled.div`
    background-color: rgba(255, 255, 255, 1);
    border-radius: 30px;
    /* margin:50px ; */
    border: 40px solid blue;
    align-items: center;
    justify-self: center;
    justify-items: center;
    align-self: center;
    flex-wrap: wrap;
    margin-top: 150px;
    margin-bottom: 50px;
    max-width:1280px;
    /* width: 90%; */
`

const Header =styled.h1`
    margin-top: px;
    font-weight:600;
    font-size:80px;
    text-align: center;
    line-height:115.2px ;
    /* border: 4px solid blue; */
    /* width: 80%; */
    /* justify-content: center;
    justify-items: center;
    justify-self: center;
    text-align: center;
    align-items: center; */

    @media(max-width:650px) {
        font-size: 50px;

        
    }
`
const Subhead =styled.h2`
    //margin: 10px 0;
    font-weight: 600;
    font-size: 65px;
    line-height: 77px;
    text-align: center;
    color: rgba(26,26,26,1);
`
const Scan =styled.p`
    //margin: 20px 0;
    align-items: center;
    text-align: center;
    font-weight: 400;
    font-size: 65px;
    line-height:77px;
`
const Red =styled.p`
    color: red;
    font-weight: 400;
    align-self:center ;
    text-align: center;
    line-height: 77px;
    font-size: 65px;
    
`
const Image =styled.img`
    /* max-width: 1280px; */
    width: 400px;
    //margin: 20px 0;
`
const Footer = styled.p`
    /* margin-top: 50px;
    margin-bottom: 50px; */
    font-size: 40px;
    line-height: 48px;
    flex-wrap: wrap;
    font-style: italic;
    font-weight: 400;
    /* width: 100%; */
    text-align:center ;


    /* @media (max-width: 480px) {
        font-size: 11px;
    } */
`