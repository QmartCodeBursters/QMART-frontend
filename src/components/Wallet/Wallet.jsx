import styled from "styled-components";
import Card from "../../assets/svg/card.svg";
import { IoMdArrowDropright } from "react-icons/io";
import innerbg from '../../assets/png/innerbg.png'

function Wallet() {
  return (
    <>
      <Bgcolor>
        <Container>
          <Wrapper>
            <Flex>
              <img src={Card} alt="ATM card" />
              <Button>
                <Add>
                  <p>
                    Add Money
                    <IoMdArrowDropright size={25} />
                  </p>
                </Add>
                <Withdraw>
                  <p>Withdraw </p>
                  <IoMdArrowDropright size={30} />
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
  justify-content: space-between;
  align-items: center;
  img {
    width: 300px;
  }
`;
const Button = styled.div`
  /* border: 2px solid yellow; */
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
const Add = styled.button`
  background-color: #ff3b30;
  color: white;
  border-color: transparent;
  outline: none;
  border-radius: 4px;
  font-size: 15px;
  width: 120px;
  padding: 7px;
  margin-right: 5px;

  p {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Withdraw = styled.button`
  background-color: #fa8232;
  color: white;
  border-color: transparent;
  outline: none;
  font-size: 15px;
  padding: 7px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  p {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.div``;
const Transact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid hotpink; */
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
