import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Axios from "../../utilis/Axios";
import summaryAPI from "../../common/summaryAPI";
import toast from "react-hot-toast";
import AxiosToastError from "../../utilis/AxiosToastError";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useAppContext } from "../../common/AuthContext"; // Import useAppContext

const Signup = () => {
  const { setUserData } = useAppContext(); // Access setUserData from context
  const [isCheckedBoxChecked, setIsCheckedBoxChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const validValues =
    Object.values(data).every((el) => el.trim() !== "") &&
    Object.values(errors).length === 0 &&
    isCheckedBoxChecked &&
    role;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    const newErrors = { ...errors };

    if (name === "firstName" && (value.length < 3 || value.length > 8)) {
      newErrors.firstName = "First name should include 3-8 characters";
    } else {
      delete newErrors.firstName;
    }

    if (name === "lastName" && (value.length < 3 || value.length > 8)) {
      newErrors.lastName = "Last name should include 3-8 characters";
    } else {
      delete newErrors.lastName;
    }

    if (name === "email" && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      newErrors.email = "Enter a valid email";
    } else {
      delete newErrors.email;
    }

    if (name === "phoneNumber") {
      const newErrors = { ...errors };

      try {
        const phoneNumberParsed = parsePhoneNumberFromString(value, "NG");

        if (!phoneNumberParsed || !phoneNumberParsed.isValid()) {
          newErrors.phoneNumber = "Please enter a valid phone number";
        } else if (value.length < 10) {
          newErrors.phoneNumber = "Phone number must be at least 10 digits long";
        } else if (value.length > 15) {
          newErrors.phoneNumber = "Phone number must not exceed 15 digits";
        } else {
          delete newErrors.phoneNumber;
        }
      } catch (error) {
        newErrors.phoneNumber = "Please enter a valid phone number";
      }

      setErrors(newErrors);
    }

    if (name === "password") {
      const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,16}$/;
      if (!passwordPattern.test(value)) {
        newErrors.password =
          "Password must be 6-16 characters, including at least one digit and one special character (!@#$%^&*)";
      } else {
        delete newErrors.password;
      }
    }

    if (name === "confirmPassword" && value !== data.password) {
      newErrors.confirmPassword = "Passwords do not match";
    } else {
      delete newErrors.confirmPassword;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!role) {
      toast.error("Please select a role");
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await Axios({
        ...summaryAPI.signUp,
        data: { ...data, role },
      });

      if (response.data.error) {
        toast.error(response.data.message);
      } else {
        // Store user data in context
        setUserData({ ...data, role });

        toast.success(response.data.message);
        setData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          password: "",
          confirmPassword: "",
        });
        setRole("");
        navigate("/otp-verification", { state: { email: data.email } });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2>LET'S GET YOU STARTED</h2>

          <input
            type="text"
            placeholder="Enter your First Name"
            required
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          <span className="error">{errors.firstName}</span>

          <input
            type="text"
            placeholder="Enter your Last Name"
            required
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          <span className="error">{errors.lastName}</span>

          <input
            type="email"
            placeholder="Enter your Email"
            required
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <span className="error">{errors.email}</span>

          <PhoneInput
            country={"ng"}
            inputStyle={{
              width: "100%",
              padding: "12px",
              fontSize: "12px",
              border: "1px solid grey",
              borderRadius: "4px",
              paddingLeft: "45px",
            }}
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={(value) =>
              setData((prevState) => ({
                ...prevState,
                phoneNumber: value,
              }))
            }
            onBlur={() => {
              const newErrors = { ...errors };
              const phoneNumber = data.phoneNumber;

              try {
                const phoneNumberParsed = parsePhoneNumberFromString(phoneNumber, "NG");

                if (!phoneNumberParsed || !phoneNumberParsed.isValid()) {
                  newErrors.phoneNumber = "Please enter a valid phone number";
                } else if (phoneNumberParsed.number.length < 10) {
                  newErrors.phoneNumber = "Phone number must be at least 10 digits long";
                } else if (phoneNumberParsed.number.length > 15) {
                  newErrors.phoneNumber = "Phone number must not exceed 15 digits";
                } else {
                  delete newErrors.phoneNumber;
                }
              } catch (error) {
                newErrors.phoneNumber = "Please enter a valid phone number";
              }

              setErrors(newErrors);
            }}
          />
          <span className="error">{errors.phoneNumber}</span>

          <input
            type="text"
            placeholder="Enter your Address"
            required
            name="address"
            value={data.address}
            onChange={handleChange}
          />
          <span className="error">{errors.address}</span>

          {/* Role Selection */}
          <RoleWrapper>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="merchant">Merchant</option>
              <option value="customer">Customer</option>
            </select>
          </RoleWrapper>

         
          <PasswordWrapper>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <span
              className="visibility-toggle"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "Hide" : "Show"}
            </span>
          </PasswordWrapper>

        
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Confirm your password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.confirmPassword}</span>

          <CheckboxWrapper>
            <input
              type="checkbox"
              checked={isCheckedBoxChecked}
              onChange={() => setIsCheckedBoxChecked(!isCheckedBoxChecked)}
            />
            <label>I agree to the terms & conditions</label>
          </CheckboxWrapper>
          <button disabled={!validValues} type="submit">
            Create Account
          </button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`

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
    /* background-color: white; */
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin: 100px 0;
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
      background-color: #f8931d;
      color: white;
      cursor: pointer;
      /* margin: 10px 0; */

      &:hover {
        background-color: #d5700b;
        color: white;
      }
      &.active {
        background-color: #f8931d;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
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

    span {
      color: red;
      font-size: 12px;
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
    border: 2px solid #ccc;
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

const SubmitButton = styled.div``
const RoleWrapper = styled.div`
  margin: 10px 0;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid grey;
    color: black;
    outline: none;
    font-size: 12px;
  }
`;
const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid grey;
    margin: 5px 0;
    outline: none;
    font-size: 12px;
  }

  span {
    position: absolute;
    right: 10px;
    cursor: pointer;
    font-size: 16px;
  }
`;



