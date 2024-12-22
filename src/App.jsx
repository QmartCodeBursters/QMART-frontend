import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./static/Header/Headerr";
import Footer from "./static/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./components/Login-Signup/Signup";

import Verify from "./components/Login-Signup/Verify";
import Login from "./components/Login-Signup/Login";



import Dashboard from "./components/dashboard/Dashboard";



import Contactpage from "./pages/Contactpage/Contactpage";
import Wallet from "./components/Wallet/Wallet"
import WalletSettings from "./components/Wallet/WalletSettings";
import WithdrawalHistory from "./components/Withdrawalhistory/WithdrawalHistory";
import TransactionDetails from "./components/Withdrawalhistory/TransactionDetails";
import QrCode from "./pages/QRcodePage/QrCode";
// import Settings from "./pages/SettingsPage/SettingsPage"
import Settingspage from "./pages/SettingsPage/SettingsPage";
import UserSettingspage from "./pages/SettingsPage/UserSettings";
import UserQRbutton from "./pages/QRcodePage/UserScan";
import UserWallet from "./components/Wallet/UserWallet"





function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        


        <Route path="/contact" element={<Contactpage />} />
        
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="Wallet" element={<Wallet/>} />
        <Route path="WalletSettings" element={<WalletSettings />} />
        <Route path="WithdrawalHistory" element={<WithdrawalHistory/>} />
        <Route path="/withdrawaldetails" element={<TransactionDetails />} />

        <Route path="/qrcode"  element={<QrCode/>}/>
        <Route path ="/Settings" element= {<Settingspage/>}/>
        <Route path ="UserSettings" element={<UserSettingspage/>}/>
        <Route path="UserQRButton" element={<UserQRbutton/>}/>
        <Route path= "UserWallet" element={<UserWallet/>}/>


        
        
        
        
        
        
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
