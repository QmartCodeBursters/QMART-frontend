import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

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
import ScanHere from "./pages/QRcodePage/UserScan";
import UserWallet from "./components/Wallet/UserWallet"
import Otpgen from "./components/Login-Signup/otpVerification";
import ReceivePayment from "./pages/QRcodePage/RecvPay"




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<Otpgen />} />

        


        <Route path="/contact" element={<Contactpage />} />
        
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="Wallet" element={<Wallet/>} />
        <Route path="WalletSettings" element={<WalletSettings />} />
        <Route path="WithdrawalHistory" element={<WithdrawalHistory/>} />
        <Route path="/withdrawaldetails" element={<TransactionDetails />} />
        <Route path ="/Settings" element= {<Settingspage/>}/>
        <Route path ="UserSettings" element={<UserSettingspage/>}/>
        <Route path="UserScan" element={<ScanHere/>}/>
        <Route path="/qr-code"  element={<QrCode/>}/>
        <Route path= "UserWallet" element={<UserWallet/>}/>
        <Route path= "/ReceivePay" element={<ReceivePayment/>}/>


        
        
        
        
        
        
        
        
      </Routes>
      <Footer />
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
