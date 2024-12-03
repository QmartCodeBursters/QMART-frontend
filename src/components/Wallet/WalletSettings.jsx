import styled from "styled-components";
import innerbg from "../../assets/png/innerbg.png";
import Card from "../../assets/svg/card.svg";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
function WalletSettings() {
  return (
    <>
      <BgColor>
        <Container>
          <Wrapper>
            <Flexed>
              <Flex>
                <Text>
                  <Styledlink to="/wallet">
                    <p>Back</p>
                  </Styledlink>
                </Text>
                <Image>
                  <img src={Card} alt="ATM card" />
                  <Bal>
                    <span id="balance">
                      #2,500,000.00 <MdVisibility size={18} />
                    </span>
                    <span>QMART Balance</span>
                  </Bal>
                </Image>
              </Flex>
              <FlexText>
                <p id="settings">Wallet Settings</p>
                <div>
                  <div>
                    <p>Wallet Name</p>
                    <input type="text" placeholder="Andrew Smith" />
                  </div>
                  <div>
                    <p>Account Number</p>
                    <input type="text" placeholder="012345678" />
                  </div>
                  <div>
                    <p>Change PIN</p>
                    <input type="text" placeholder="(603) 555-0123" />
                  </div>
                </div>
                <Save>Save Changes</Save>
              </FlexText>
            </Flexed>
            <Withdraw>
              <span>Withdraw</span>
              <span>
                <IoMdArrowDropright size={30} />
              </span>
            </Withdraw>
          </Wrapper>
        </Container>
      </BgColor>
    </>
  );
}
export default WalletSettings;
const BgColor = styled.div`
  width: 100%;
  background-image: url(${innerbg});
  background-color: #edeff2;
  background-size: contain;
  background-position: top;
  height: auto;
`;
const Container = styled.div`
  max-width: 1280px;
  width: 85%;
  margin: auto;
  padding: 0px 10px;
  min-height: calc(100vh - 70px);
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  /* border: 2px solid purple; */
  margin: auto;
  width: 90%;
  margin-top: 70px;
`;
const Text = styled.div`
  /* border: 2px solid hotpink; */
  padding: 20px 0 5px 5px;
  font-size: 12px;
`;
const Flexed = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 800px) {
    /* border: 2px solid blue; */
    display: block;
  }
`;
const Flex = styled.div`
  /* border: 2px solid green; */
  padding: 3px 0;
  width: 50%;
  img {
    width: 320px;
  }
  @media (max-width: 800px) {
    /* border: 2px solid purple; */
    margin: auto;
    display: block;
    width: 100%;
    img {
      /* border: 2px solid yellow; */
      margin-bottom: 5px;
      /* width: 260px; */
      width: 97%;
    }
  }
`;
const FlexText = styled.div`
  /* border: 2px solid purple; */
  padding: 40px;
  width: 50%;
  background-color: #e6e6e6;
  #settings {
    /* border: 2px solid red; */
    width: 100%;
    text-align: center;
    padding: 15px 0 10px 0;
    border-bottom: 1px solid black;
  }
  div {
    margin: 20px auto;
    input {
      /* border: 2px solid red; */
      width: 90%;
      padding: 10px 7px;
      font-size: 16px;
      border-radius: 5px;
      margin-top: 5px;
      border-color: transparent;
      outline: transparent;
    }
  }

  @media (max-width: 800px) {
    margin-top: 15px;
    /* border: 2px solid red; */
    width: 100%;
    padding: 20px;
    div {
      /* border: 2px solid hotpink; */
      text-align: center;
      padding: 0;
      input {
        width: 100%;
      }
    }
  }
`;
const Image = styled.div`
  /* border: 2px solid blue; */
  position: relative;
  p {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 12px;
    color: white;
  }
  @media (max-width: 800px) {
    /* border: 2px solid red; */
    text-align: center;
    p {
      right: 5px;
    }
  }
`;
const Bal = styled.div`
  color: red;
  position: absolute;
  bottom: 10px;
  left: 30px;
  display: flex;
  flex-direction: column;
  #balance {
    position: absolute;
    bottom: 20px;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
  }
  span {
    font-size: 12px;
    color: white;
    padding-bottom: 10px;
  }
  @media (max-width: 800px) {
    #balance {
      font-size: 22px;
      /* border: 2px solid red; */
      width: 190px;
    }
  }
`;
const Save = styled.p`
  text-align: center;
  margin: auto;
  border-color: transparent;
  background-color: #fa8232;
  color: white;
  border-radius: 4px;
  padding: 10px;
  width: 36%;
  font-size: 14px;

  @media (max-width: 800px) {
    width: 70%;
  }
`;
const Styledlink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Withdraw = styled.p`
  display: flex;
  justify-items: center;
  align-items: center;
  border-color: transparent;
  background-color: #fa8232;
  color: white;
  border-radius: 4px;
  padding: 10px;
  width: 122px;
  height: 50px;
  text-align: center;
  span {
    display: flex;
    text-align: center;
    justify-items: center;
    align-items: center;
    font-size: 17px;
  }
  @media (max-width: 800px) {
    margin: 15px auto 0;
  }
`;
