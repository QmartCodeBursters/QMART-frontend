import qlogo from '../../assets/png/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoReorderTwoOutline } from "react-icons/io5";
import Sidebar from '../Sidebar/SideBar';
import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);

        const handleToggle = () =>{
            setToggle(!toggle)
        }

  return (
    <>
    <Wrapper>

        <Navbar>
          <Logocont>
            <img src={qlogo} alt="logo" />
            <p>Qmart</p>
          </Logocont>

          <Navlist>
              <p><Link to= "./">Home</Link></p>
              <p>Dashboard <IoIosArrowDown/> </p>
              <p>Wallet</p>
              <p>About Us</p>
              <p>Contact us</p>
          </Navlist>

          <Signcont>
            <LoginButton><Link to="/login">Login</Link> </LoginButton>
            <SigninButton><Link to="/signup" >Sign up</Link>  </SigninButton>
          </Signcont>

          <Sidenav onClick={handleToggle} ><IoReorderTwoOutline/></Sidenav>

        </Navbar>

        </Wrapper>
        
        {toggle && <Sidebar setDisplay={setToggle} />}
    </>
    
  )
}

export default Header

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: #1B6392;
    display: flex;
    align-items: center;
    
`
const Navbar = styled.div`
    max-width: 1800px;
    width: 95%;
    /* border: 1px solid white; */
    margin: 0 auto;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;

    @media (max-width: 768px) {
      justify-content: space-between;
  }
`
const Signcont = styled.div`
    display: flex;
    gap: 20px;
`
const Navlist = styled.div`
    display: flex;
    gap: 20px;
    font-size: 12px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: white;
    }

    @media (max-width: 768px) {
    display: none; 
  }
`
const Logocont = styled.div`
    display: flex;
    color: white;
    font-size: 28px;
    gap: 10px;
    cursor: pointer;
    
    img{
        width: 40px;
    }
`
const LoginButton = styled.button`
    background-color: transparent;
    padding: 8px 24px;
    border-radius: 4px;
    border: 1px solid #FA8232;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #30506b;
    }

    a {
      text-decoration: none;
      color: white;
    }

    @media (max-width: 768px) {
    display: none; 
  }
`
const SigninButton = styled.button`
    padding: 8px 24px;
    border-radius: 4px;
    background-color:  #FA8232;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #c96d05;
    }

    a {
      text-decoration: none;
      color: white;
    }

    @media (max-width: 768px) {
    display: none; 
  }
`
const Sidenav = styled.div`
    font-size: 40px;
    display: none;
    cursor: pointer;
    
    @media (max-width: 768px){
        display: block;
    }
`