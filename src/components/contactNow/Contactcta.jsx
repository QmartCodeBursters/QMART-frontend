import styled from "styled-components";
import callicon from "../../assets/png/callIcon.png"
import chatIcon from "../../assets/png/chatIcon.png"
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";


const Contactcta = () => {
  return (
    <Wrapper>
        <Wrappercont>
            <Herodetails>
                <button>CONTACT US</button>
                <p>"Didn't find your answer? 
                Contact us."</p>
            </Herodetails>

            <Herocard>
                <Cardone>

                    <img src={callicon} alt="callicon" />

                    <Cardonedetails>
                        <h4>Call us now</h4>
                        <p>We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk to us now!</p>
                        <span>+234 123 456 789</span>

                        {/* <Link to= "/signup"><button>CALL NOW <MdArrowRightAlt/> </button></Link> */}
                    </Cardonedetails>
                </Cardone>

                <Cardone>

                    <img src={chatIcon} alt="callicon" />

                    <Cardonedetails>
                        <h4>Chat with us</h4>
                        <p>We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Chat with us now!</p>
                        <span>Codebursters@gmail.com</span>

                        {/* <Link to= "/signup"><button className="butTwo">CONTACT US<MdArrowRightAlt/> </button></Link> */}
                    </Cardonedetails>

                </Cardone>
            </Herocard>
        </Wrappercont>
    </Wrapper>
  )
}

export default Contactcta

const Wrapper = styled.div`
    margin: 70px;

`;

const Wrappercont = styled.div`
max-width: 1280;
width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;



`;


const Herodetails = styled.div`

animation: slideInFromTop 1s ease-out;


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

text-align: center;
    p {
        font-size: 28px;
        font-weight: 500;
        margin: 30px;
    }

    button {
    padding: 12px 20px;
    border-radius: 4px;
    background-color: #FA8232;
    color: white;
    border: none;
    margin: 10px 0;

    /* display: flex;
    align-items: center; */
    cursor: pointer;
    

    &:hover {
    background-color: #c96d05;
    }

    
}
`;
const Herocard = styled.div`
    margin: 20px 0;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`;
const Cardone = styled.div`

    img {
        width: 100px;
        height: 100px;
    }

    padding: 20px;
    display: flex;
    gap: 20px;
    height: auto;
    max-width: 450px;

    background-color: white;
    border-radius:5px;
`;

const Cardonedetails = styled.div`
        h4 {
            font-size: 20px;
        }

        p {
            font-size: 12px;
            color: grey;
            margin: 10px 0;
        }

        span {
            font-size: 20px;
            
        }
        button {
        padding: 12px 20px;
        border-radius: 4px;
        background-color: #EA4B48;
        color: white;
        border: none;
        margin: 20px 0;

        display: flex;
        align-items: center;
        cursor: pointer;
        animation: fadeInFromTop 1.5s ease-out;

        &:hover {
        background-color: #c96d05;
        }
}

    .butTwo {
            background-color: #1B6392
        }
    a {
            text-decoration: none;
        }

`;



