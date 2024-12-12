import { MdArrowRightAlt } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <Wrapper>
      <LoginContainer>
        <form>
          <h2>Verify Your Email Address</h2>
          <p>Input the verification code sent to your registered email</p>
          
          <label> <br/>
            <article>
              <p>Verification code</p>
              <Link to= "/verify"><span>Resend code</span> <br/></Link>
              
            </article>
            
          <input type="text"  placeholder="Enter verification code"/>
          </label>

          <Link to= "/login"><button type="submit">Verify Me <MdArrowRightAlt/></button></Link>
          
          
        </form>

      </LoginContainer>
    </Wrapper>
  );
};

export default Verify;

const Wrapper = styled.div`
 
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    max-width: 450px;
    /* height: 300px; */
    background-color: white;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin: 60px 0;
    text-align: center;
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
    
    article {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */

      span {
        margin-left: 120px;
        color: #1B6392;
        font-size: 14px;
      }
      a {
        color: black;
        text-decoration: none;
      }

    }
    h2 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 8px;
    }

    p {
      margin: 10px 0;
    }

    input {
      width: 100%;
      padding: 12px;
      border-radius: 5px;
      border: 1px solid grey;
      margin: 5px 0;
      outline: none;
      margin-bottom: 20px;
    }

    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: none;
      background-color: #fa8232;
      color: white;
      cursor: pointer;
      margin: 10px 0;

      &:hover {
        background-color: #803e00;
      }

      a {
        text-decoration: none; 
        color: white;
        font-weight: bold;
    }
    }
  }
`
