import { Link } from "react-router-dom";
import styled from "styled-components";
import innerbg from "../../assets/png/innerbg.png";
import googleicon from "../../assets/png/googleicon.png"
import appleicon from "../../assets/png/appleicon.png"


const Signup = () => {
  return (
    <Wrapper>
      <FormContainer>
        <form>
          <h2>Create Account - Merchant</h2>
          
          <input type="text" placeholder="First Name" required name="name" />
          <input type="text" placeholder="Last Name" required name="name" />
          <input type="email" placeholder="Email" required name="email" />
          <input type="text" placeholder="Phone Number" required name="email" />
          <input type="text" placeholder="Current Address" required name="email" />
          <input type="password" placeholder="Enter your password" required name="password"/>
          <input type="password" placeholder="Confirm Password" required name="confirmpassword" />

          <p>
            <CheckboxWrapper>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                Are you agree to QMART Terms of Condition and Privacy Policy.
              </label>
            </CheckboxWrapper>
          </p>

          <button type="submit"><Link to="/verify">Create Account</Link></button>

        
        

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


            <p>Already have an account<Link to="/login"> Login</Link> </p>
          </ButtonWrapper>



          
          
        </form>

      </FormContainer>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  width: 100%;
  background-image: url(${innerbg});
  background-color: #edeff2;
  background-size: contain;
  background-position: top;
  height: auto;
`;

const FormContainer = styled.div`
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
    background-color: white;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
      font-size: 12px;
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
        color: white;
      }
    }

    p {
      text-align: left;
    }

    a {
        text-decoration: none; 
        color: black;
        font-weight: bold;
    }
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    /* appearance: none; */
    width: 22px;
    height: 22px;
    border: 2px solid grey;
    border-radius: 3px;
    margin-right: 8px;
    cursor: pointer;
    position: relative;
  }

  label {
    font-size: 12px;
    cursor: pointer;
    margin: 10px 0;
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
    font-size: 12px;
    color: grey;
  }
  a {
        text-decoration: none; 
        color: lightgray;
        font-weight: bold;
    }
`;

const GoogleButton = styled.div`
  background-color:white; 
  border: 1px solid grey;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  font-size: 12px;
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
background-color:white; 
  border: 1px solid grey;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  font-size: 12px;
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



