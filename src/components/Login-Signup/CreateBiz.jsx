import { useState } from "react";
import styled from "styled-components";

import Axios from "../../utilis/Axios";
import summaryAPI from "../../common/summaryAPI";
import AxiosToastError from "../../utilis/AxiosToastError";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateBiz = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    businessName: "",
    businessRegNumber: "",
    businessDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    const newErrors = { ...errors };

    if (name === "businessName" && (value.length < 3 || value.length > 16)) {
      newErrors.businessName = "Business name should include 3-16 characters";
    } else {
      delete newErrors.businessName;
    }

    if (
      name === "businessRegNumber" &&
      value.length > 0 &&
      value.length !== 9
    ) {
      newErrors.businessRegNumber =
        "Business Registration Number should be exactly 9 characters";
    } else {
      delete newErrors.businessRegNumber;
    }

    if (
      name === "businessDescription" &&
      value.length > 0 &&
      (value.length < 10 || value.length > 160)
    ) {
      newErrors.businessDescription =
        "Business description should be between 10-160 characters";
    } else {
      delete newErrors.businessDescription;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const response = await Axios({
        method: "POST",
        url: summaryAPI.createBiz.url,
        data: data,
      });

      if (response.data.success) {
        toast.success(
          response.data.message || "Business created successfully!"
        );
        navigate("/dashboard");
      } else {
        toast.error(response.data.message || "An error occurred.");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  const validValues = data.businessName.trim() !== "";

  return (
    <Wrapper>
      <Innerwrapper>
        <span>
          {" "}
          <strong>Welcome to QMART😊</strong> <br />
          Create Your Business!
        </span>
        <Bizcont>
          

          <Bizdetails>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your Business Name"
                name="businessName"
                required
                value={data.businessName}
                onChange={handleChange}
              />
              <span className="error">{errors.businessName}</span>

              <input
                type="text"
                placeholder="Enter your Business Registration Number"
                name="businessRegNumber"
                value={data.businessRegNumber}
                onChange={handleChange}
              />
              <span className="error">{errors.businessRegNumber}</span>

              <input
                type="text"
                placeholder=" Business Description"
                name="businessDescription"
                value={data.businessDescription}
                onChange={handleChange}
              />
              <span className="error">{errors.businessDescription}</span>

              <button type="submit" disabled={!validValues}>
                Create Business
              </button>
            </form>
          </Bizdetails>
        </Bizcont>
      </Innerwrapper>
    </Wrapper>
  );
};

export default CreateBiz;

const Wrapper = styled.div`
  width: 100%;
`;

const Innerwrapper = styled.div`
  max-width: 1280px;
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 100px;

  span {
    font-size: 26px;
  }
`;

const Bizcont = styled.div`
  width: 100%;
  max-width: 450px;
  animation: slideInFromTop 1s ease-out;
  margin: 50px auto;

  img {
    max-width: 50%;
    border-radius: 10px;
    animation: upDown 2s infinite ease-in-out;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;

    img {
      max-width: 100%;
      margin-bottom: 20px;
    }
  }

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

  @keyframes upDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Bizdetails = styled.div`
  /* max-width: 50%;
    max-width: 800px;
    background-color: white; */

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    /* margin: 100px 0; */

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
      padding: 12px;
      margin-top: 15px;
      background-color: #f8931d;
      color: white;
      font-size: 14px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #d5700b;
      }

      &:disabled {
        background-color: #f8931d;
        cursor: not-allowed;
        opacity: 0.6;
      }
    }

    span {
      color: red;
      font-size: 12px;
    }
  }
`;
