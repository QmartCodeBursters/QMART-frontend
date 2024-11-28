import { CiDeliveryTruck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import styled from "styled-components";

const Cta = () => {
    const card = [
        {
            icon: <CiDeliveryTruck />,
            text: "Shop Confidently",
            paragraph: "Confidence in Every Click",
        },
        {
            icon: <BiSupport />,
            text: "Great Support 24/7",
            paragraph: "Instant access to contact",
        },
        {
            icon: <FiShoppingBag />,
            text: "100% Secure Payment",
            paragraph: "We ensure your money is safe",
        },
        {
            icon: <LuBox />,
            text: "Money-Back Guarantee",
            paragraph: "24 Hours money-back guarantee",
        },
    ];

    return (
        <Wrapper>
            <InsideWrapper>
                {card.map((disp, index) => (
                    <div key={index} style={{ display: "flex",  alignItems: "center", flexGrow: 1}}>
                        <Contentdiv>
                            <Iconstyled>{disp.icon}</Iconstyled>
                            <Detailscont>
                                <Text>{disp.text}</Text>
                                <Paragraph>{disp.paragraph}</Paragraph>
                            </Detailscont>
                        </Contentdiv>
                        {/* Show the VerticalLine only if it's not the last item */}
                        {index !== card.length - 1 && <VerticalLine />}
                    </div>
                ))}
            </InsideWrapper>
        </Wrapper>
    );
};

export default Cta;

const Wrapper = styled.div`
    width: 100%;
    margin: 20px 0;

`;

const InsideWrapper = styled.div`
    max-width: 1280px;
    width: 75%;
    margin: 60px auto;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
`;

const Contentdiv = styled.div`
    min-width: 200px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    flex-grow: 1; 
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    animation: fadeInFromTop 1.5s ease-out;

    &:hover {
        background-color: #09456B;  
        color: white;
        border-radius: 10px;
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

const Detailscont = styled.div`
    /* margin-left: 15px; */
`;

const Text = styled.div`
    font-weight: bold;
    
`;

const Paragraph = styled.div`
    font-size: 12px;
    color: gray;
    margin: 4px 0; 
`;

const Iconstyled = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px; 
    color: gray;
    transition: color 0.3s, background-color 0.3s;

    svg {
        font-size: 22px; 
    }
`;

const VerticalLine = styled.div`
    width: 2px;
    height: 100px;
    background-color: lightgray;
    margin: 0 15px;

    @media (max-width: 480px) {
        display: none;
    }
`;
