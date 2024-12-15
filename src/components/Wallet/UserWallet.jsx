import styled from "styled-components";
import Card from "../../assets/svg/card.svg";
import { IoMdArrowDropright } from "react-icons/io";
import innerbg from "../../assets/png/innerbg.png";

function Wallet() {
  return (
    <>
      <Bgcolor>
        <Container>
          <Wrapper>
            <Flex>
              <img src={Card} alt="ATM card" />
              <ButtonsContainer>
                <Addmoney>
                  <span>Add Money</span>
                  <span>
                    <IoMdArrowDropright size={20} />
                  </span>
                </Addmoney>
                <Withdraw>
                  <span>Withdraw</span>
                  <span>
                    <IoMdArrowDropright size={20} />
                  </span>
                </Withdraw>
              </ButtonsContainer>
            </Flex>
            <Text>
              <Transact>
                <p>Transaction History</p>
                <View>View all</View>
              </Transact>
              <Transaction>
                <Transfer>
                  <div>
                    <h4>Transfer to SAIL04 Supermarket</h4>
                    <p>Nov 22nd, 18:40:26</p>
                  </div>
                  <div>
                    <p>#30,000</p>
                  </div>
                </Transfer>
                <hr />

                <Transfer>
                  <div>
                    <h4>Transfer to EMMANUEL FROM WALLET</h4>
                    <p>Nov 22nd, 18:40:26</p>
                  </div>
                  <div>
                    <p>#100,000</p>
                  </div>
                </Transfer>
                <hr />

                <Transfer>
                  <div>
                    <h4>Transfer to SAIL04 Supermarket</h4>
                    <p>Nov 22nd, 18:40:26</p>
                  </div>
                  <div>
                    <p>#30,000</p>
                  </div>
                </Transfer>
                <hr />

                <Transfer>
                  <div>
                    <h4>Transfer to SAIL04 Supermarket</h4>
                    <p>Nov 22nd, 18:40:26</p>
                  </div>
                  <div>
                    <p>#30,000</p>
                  </div>
                </Transfer>
                <hr />
              </Transaction>
            </Text>
          </Wrapper>
        </Container>
      </Bgcolor>
    </>
  );
}
export default Wallet;

const Bgcolor = styled.div`
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
  margin: auto;
  width: 90%;
`;
const Flex = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 300px;
  }

  @media (max-width: 800px) {
    display: block;
    width: 100%;

    img {
      text-align: center;
      margin-bottom: 5px;
      width: 300px;
    }
  }
`;

const ButtonsContainer = style.div`
display: flex;
gap: 10px;
`;

const Button = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 127px;

  @media (max-width: 800px) {
    margin-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;

const Withdraw = styled.button`
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  gap: 25px;
  border-color: transparent;
  background-color: #ff3b30;
  color: white;
  border-radius: 4px;
  padding: 10px;


  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff3b30; /* Red for Add Money */
    color: white;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  :nth-child(2) {
    background-color: #fa8232;
  }

  @media (max-width: 800px) {
    span {
      margin: auto;
    }
  }
`;

const Addmoney = styled(Withdraw)`
  background-color: #ff3;
`;

const Text = styled.div``;
const Transact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid hotpink; */
  font-size: 17px;

  @media (max-width: 800px) {
    margin-top: 15px;
  }
`;

const Transaction = styled.div`
  margin-top: 10px;
  /* border: 2px solid red; */
  padding: 5px;

  hr {
    background-color: black;
    height: 1px;
    outline: none;
    border: none;
    width: 100%;
  }
`;

const Transfer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 10px 5px;
  width: 80%;
  font-size: 13px;
  div {
    h4 {
      margin-bottom: 4px;
    }
  }
`;

const View = styled.p`
  color: #747070cc;
  font-size: 12px;
`;

const Image = styled.div``;
