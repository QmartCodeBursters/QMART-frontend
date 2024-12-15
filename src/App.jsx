import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./static/Header/Headerr";
import Footer from "./static/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./components/Login-Signup/Signup";
import Verify from "./components/Login-Signup/Verify";
import Login from "./components/Login-Signup/Login";
import QrCode from "./pages/QRcodePage/QrCode";
import Settingspage from "./pages/SettingsPage/Settingpage";
import CustSettings from "./pages/UserSettingsPage/UserSettings"

import MainDashboard from "./components/dashboard/Maindashboard";
import Wallet from "./components/Wallet/Wallet";
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
        {/* <Route element={<Dashboard/>}> 
          <Route path="/settings" element={<Settings />} />
        </Route> */}
        <Route path="/settings" element={<Settingspage />} />
        <Route path="/QrCode" element={<QrCode />} />
        <Route path="/CustomerSettings" element={<CustSettings/>}/>
        <Route path="/wallet" element={<Wallet />} />

        
        <Route path="/Customerwallet" element={<UserWallet/>} />

        <Route path="/dashboard" element={<MainDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
