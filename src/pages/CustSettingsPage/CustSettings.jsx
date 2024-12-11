import PersonalDetails from "../../components/CustSettings/PersonalDet"
import CustAddresForm from "../../components/CustSettings/CustAddres"
import CustPasswrd from "../../components/CustSettings/CustPasswrd"


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