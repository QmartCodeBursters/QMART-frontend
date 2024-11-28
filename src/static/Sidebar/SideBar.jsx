import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";
import {Link} from "react-router-dom"



const Sidebar = ({setDisplay}) =>{
    const handleClick =()=>{
        setDisplay(false);
    }
    return (
        <Container>

           
            <Naviga>
                <Styledlink to="/" onClick={handleClick}>
                    <nav>Home </nav>
                </Styledlink>

                <Styledlink to= "/dashboard" onClick={handleClick}>
                    <nav>Dashboard <IoMdArrowDropright /></nav>
                </Styledlink>
                
                <Styledlink to= "/wallet" onClick={handleClick}>
                    <nav>Wallet </nav>
                </Styledlink>

                <Styledlink to= "/about" onClick={handleClick}>
                    <nav>About Us </nav>
                </Styledlink>

                <Styledlink to= "/contact" onClick={handleClick}>
                    <nav>Contact Us</nav>
                </Styledlink>

            </Naviga>

            <Loginbutton>
                <Button>
                    <button><Link to="/login" onClick={handleClick}>Login</Link></button>
                </Button>

                <Sighin>
                    <button><Link to="/signup" onClick={handleClick}>Sign Up</Link></button>
                </Sighin>
            </Loginbutton>
            
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding-left: 20px;
    background-color: #edeff2;
`
const Loginbutton = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
`
const Button = styled.div`
    button{
    background-color: transparent;
    padding: 8px 24px;
    border-radius: 4px;
    border: 1px solid #FA8232;
    color:black;
    cursor: pointer;

    &:hover {
      background-color: #30506b;
      color: white;
      border: none;
    }

    a {
      text-decoration: none;
      color: black;
    }
}`

const Sighin = styled.div`
      button{
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
}`

const Naviga = styled.div`
    
`
const Styledlink = styled(Link)`
    text-decoration: none;
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border-bottom: 1px solid lightgrey;
        /* margin-bottom: 10px; */
        font-size: 14px;
        font-weight: 500;
        padding: 20px 0;
        color: #30506b;
    }
    
    
`