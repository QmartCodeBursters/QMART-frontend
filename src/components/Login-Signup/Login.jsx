import { Link } from "react-router-dom";
import styled from "styled-components";
import googleicon from "../../assets/png/googleicon.png";
import appleicon from "../../assets/png/appleicon.png";

const Login = () => {
  return (
    <Wrapper>
      <FormContainer>
        <form>
          <h2>Login</h2>

          <input type="email" placeholder="Email" required name="email" />
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="password"
          />

<p>
  <Link to="/forgetpassword">Forgot Password?</Link>
</p>

          <Link to="/">
            <button type="submit">Login</button>
          </Link>

          <ButtonWrapper>
            <span>or</span>

            <GoogleButton>
              <img src={googleicon} alt="googleicon" />
              <span>Sign in with Google</span>
            </GoogleButton>

            <AppleButton>
              <img src={appleicon} alt="appleicon" />
              <span>Sign in with Apple</span>
            </AppleButton>

            <p>
              Dont have an account<Link to="/signup"> Register</Link>{" "}
            </p>
          </ButtonWrapper>
        </form>
      </FormContainer>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  margin: 70px auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    max-width: 450px;
    background-color: white;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin: 40px 0;
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

    h2 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      padding: 12px;
      border-radius: 5px;
      border: 1px solid grey;
      margin: 5px 0;
      outline: none;
    }

    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: none;
      background-color: #fa8232;
      color: white;
      cursor: pointer;
      /* margin: 10px 0; */

      &:hover {
        background-color: #803e00;
      }
    }

    p {
      text-align: left;
      color: grey;
      font-size: 12px;
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  span {
  }

  p {
    margin: 20px 0;
  }
`;

const GoogleButton = styled.div`
  background-color: white;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  justify-content: center;
  cursor: pointer;

  img {
    width: 20px;
    margin-right: 20px;
  }
  &:hover {
    background-color: #e8e8e8;
  }
`;

const AppleButton = styled.div`
  background-color: white;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  justify-content: center;
  cursor: pointer;

  img {
    width: 20px;
    margin-right: 20px;
  }

  &:hover {
    background-color: #e8e8e8;
  }
`;
