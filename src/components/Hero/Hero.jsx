import heroimage from "../../assets/png/heroimagone.png"
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
        <HeroInnerwrapper>

            <HeroContents>
                <img src={heroimage} alt="heroimage" />

                <HeroDetails>
                    <p>Welcome to QMART</p>
                    <h3>Empowering merchants with seamless payments — scan, pay, and confirm in <span>seconds!</span> </h3>
                    <p>Seamless shopping, anytime, anywhere!</p>

                    <Link to= "/signup"><button>Get started <MdArrowRightAlt/> </button></Link>
                </HeroDetails>
            </HeroContents>

            
        </HeroInnerwrapper>

    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
    width: 100%;
`

const HeroInnerwrapper = styled.div`
    max-width: 1280px;
    width: 85%;
    margin: 0 auto;
    display: flex;  
`

const HeroContents = styled.div`
    display: flex;
    flex-wrap: wrap; 
    align-items: center;
    justify-content: space-evenly;
    width: 100%; 
    margin: 40px 0;

    img {
        max-width: 45%; 
        border-radius: 20px;
        flex-grow: 1;
        animation: slideInFromTop 1s ease-out;
    }

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center;
        
        img {
            max-width: 100%; 
            margin-bottom: 20px; 
        }
    }

    @keyframes slideInFromTop {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`
const HeroDetails = styled.div`
    /* border: 1px solid; */
    max-width: 35%; 
    flex-grow: 1; 

    p {
        font-size: 14px;
        color: grey;
    }

    h3 {
        font-size: 28px;
        max-width: 420px;
        line-height: 36px;
        padding: 10px 0;
    }

    button {
        padding: 12px 20px;
        border-radius: 4px;
        background-color: #FA8232;
        color: white;
        border: none;
        margin: 10px 0;

        display: flex;
        align-items: center;
        cursor: pointer;
        animation: fadeInFromTop 1.5s ease-out;

        &:hover {
        background-color: #c96d05;
    }
    }

    a {
        text-decoration: none;
    }
    span {
        color: red;
    }

    animation: fadeInFromTop 1.5s ease-out;

    @media (max-width: 1024px) {
        h3 {
            font-size: 24px;
            line-height: 30px;
            min-width: 260px;
        }
        p {
            font-size: 10px;
        }
    }


    @media (max-width: 768px) {
        max-width: 80%; 
        text-align: center; 

       
        button {
            justify-content: center;
        }
    }

    @keyframes fadeInFromTop {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
