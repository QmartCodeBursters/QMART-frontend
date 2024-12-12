import PersonalDetails from "../../components/UserSettings/UserDetails"
import CustAddresForm from "../../components/UserSettings/UserAddres"
import CustPasswrd from "../../components/UserSettings/UserPasswrd"


const CustSettings = () => {
  return (
    <div>
        <PersonalDetails/>
        <CustAddresForm/>
        <CustPasswrd/>
        
    </div>
  )
}

export default CustSettings