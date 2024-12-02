import styled from "styled-components";
import Card from "../../assets/svg/card.svg";
import { IoMdArrowDropright } from "react-icons/io";
import innerbg from "../../assets/png/innerbg.png";

function Wallet() {
  return (
    <>
      <Container>
        <Wrapper>
          <Flex>
            <img src={Card} alt="ATM card" />
            <Button>
              <Withdraw>
                <span>Withdraw</span>
                <span>
                  <IoMdArrowDropright size={20} />
                </span>
              </Withdraw>
            </Button>
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
    </>
  );
}
export default Wallet;

const Container = styled.div`
  background-color: skyblue;
  max-width: 1280px;
  width: 85%;
  margin: auto;
  padding: 0px 10px;
  min-height: 100vh;
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  /* border: 2px solid purple; */
  margin: auto;
  width: 90%;
`;
const Flex = styled.div`
  /* border: 2px solid green; */
  padding: 20px 0;
  display: flex;
  align-items: center;
  img {
    width: 300px;
  }

  @media (max-width: 800px) {
    /* background-color: red; */
    display: block;
    text-align: center;

    img {
      width: 250px;
    }
  }
`;
const Button = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  margin-left: 40px;
  margin-top: 127px;
  /* align-items: center; */

  @media (max-width: 800px) {
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid blue; */
  }
`;
const Withdraw = styled.p`
  display: flex;
  justify-items: center;
  align-items: center;

  border-color: transparent;
  /* width: 105px; */
  /* height: 45px; */
  margin-right: 5px;
  background-color: #fa8232;
  color: white;
  border-radius: 4px;
  padding: 10px;

  span {
    display: flex;
    justify-items: center;
    align-items: center;
    font-size: 17px;
  }

  @media (max-width: 800px) {
    span {
      margin: auto;
    }
  }
`;

const Text = styled.div``;
const Transact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid hotpink; */
  font-size: 17px;

  @media (max-width: 800px) {
    /* background-color: yellow; */
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
  /* border: 2px solid hotpink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 10px 5px;
  width: 80%;
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
