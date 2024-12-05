import styled from 'styled-components';
import iconone  from '../../assets/png/Iconone.png';
import icontwo from '../../assets/png/Icontwo.png';
import truck from '../../assets/png/Truck.png';
import arrowright from '../../assets/png/ArrowRight.png';
import storefront from '../../assets/png/Storefront.png';
import faq from '../../assets/png/Faq.png';
import user from '../../assets/png/User.png';
import lockopen from '../../assets/png/LockOpen.png';
import plus from '../../assets/png/Plus.png';
import backgroundImage from '../../assets/png/BG.png';


function trackHandler(){
    alert('Tracking in Progress');
}

function resetHandler(){
    alert('Forgotten Password? Reset Now');
}

function sellHandler(){
    alert('Sell your products seamlessly at this click');
}

function userHandler(){
    alert('View Profile');
}

function contactHandler(){
    alert('Reach out to us');
}

function callHandler(){
    alert('+1-202-555-0126');
}

function emailHandler(){
  alert('For enquires, Email us today')
}


const ContactNow = () => {
    return(
        <ContactContainer>
             <h2>What can we assist you with today?</h2>
           
            <Up>
                <button onClick={trackHandler}> <img src={truck} alt=''/> Track Payment</button>
                <button onClick={resetHandler}> <img src={lockopen} alt=''/> Reset Password</button>
                <button onClick={sellHandler}> <img src={storefront} alt=''/> Sell on QMart</button>
                <button onClick={userHandler}> <img src={user} alt=''/> User & Account</button>
                

            </Up>

            <Down>
                <Main>
                <h1>FAQs About QMart!</h1>
                <div><p>How do merchants generate a QR code for payment? <img src={plus} alt=''/></p></div>
                <div><p>How do customers make payments?<img src={plus} alt=''/></p></div>
                <div><p>What happens after the payment is made?<img src={plus} alt=''/></p></div>
                <div><p>Can customers use the app without linking a wallet?<img src={plus} alt=''/></p></div>
                <div><p>Is the payment process secure?<img src={plus} alt=''/></p></div>
                <div><p>What if an OTP isn’t received?<img src={plus} alt=''/></p></div>

                </Main>


                <Aside>
                 <img src ={faq} alt=''/>

                </Aside>


            </Down>

            <First>
                <button onClick={contactHandler}> CONTACT US</button>
                <h2>Dont find your answer. <br/>Contact with us</h2>

            </First>

            <Second>
                <div className='boxone'>
                    <div>
                        <img src= {icontwo} alt = 'iconone' />
                    </div>
                    <div>
                        <h5>Call us now</h5>
                        <p><small>we are available online from 9:00 AM to 5:00 PM <br/> (GMT95:45) Talk with use now</small></p>
                        <h3>+1-202-555-0126</h3>
                        <button onClick={callHandler}> CALL NOW<img src={arrowright} alt=''/> </button>
                    </div>    
                    
                </div>

                <div className='boxtwo'>
                    <div>
                        <img src = {iconone} alt='icontwo'/>
                    </div> 

                    <div>
                        <h5>Chat with us</h5>
                        <p><small>we are available online from 9:00 AM to 5:00 PM <br/>(GMT95:45) Talk with use now</small></p>
                        <h3>Support@qmart.com</h3>
                        <button onClick={emailHandler}> CONTACT US<img src={arrowright} alt=''/> </button>
                    </div>    
                    
                </div>
            </Second>

        </ContactContainer>

    );
};



const ContactContainer = styled.div`
@media (max-width:768px) {

min-width: 100%;


}
   background: url(${backgroundImage}) no-repeat;
   background-color: #DAE5DA;
   
   h2{
   text-align: center;
   } 
    
`
const Up = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    /* gap: 40px; */
   

button{
    display: flex;
    align-items: center;
    width: 300px;
    height: 80px;
    background-color: #FFFFFF;
    border: 2px solid #FA8232;
    text-align: center;
    
    img{
        margin-left: 15px;
    }
    
}
`
const Down = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 150px;
    margin-bottom: 100px;
    

    

   
`
const Main = styled.div`
    div{
        display: flex;
        justify-content: space-between;
    }

div p{
    display: flex;
    align-items: center;
    text-align: center;
   } 

 div img{
   
}    
`
const Aside = styled.div`
    

`


const First = styled.div`
   button{
    width: 121px;
    height: 36px;
    background: #FF8A00;
    color: #FFFFFF;
    border-color: #FF8A00;
   }
   text-align :center ;
   gap: 40px;
`

const Second = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    
   
   
    .boxone{
        display: flex;
        justify-content: space-around;
        box-shadow: #191C1F14;
        background: #FFFFFF;
        width:450px;

        p{
            color: #5F6C72;

        }

        img{
            margin-top: 20px;
        }


        button{background: #EA4B48;
               width: 168px;
               height: 48px;
               color: #FFFFFF;
               display: flex;
               align-items: center;
               justify-content: center;

            img{
             margin-left:10px; 
             margin-bottom: 20px;
             }
        }
        
    }

    .boxtwo{
        display: flex;
        justify-content: space-around;
        background: #FFFFFF;
        width:450px;

        p{
            color: #5F6C72;
        }

        img{
            margin-top: 20px;
        }

    button{
           background: #1B6392;
           width: 168px;
           height: 48px;
           color: #FFFFFF;
           display: flex;
           align-items: center;
           justify-content: center;

         img{
            margin-left:15px;  
            align-items: center;
            margin-bottom: 20px;
            }
    }    
        
}



`
export default ContactNow;
