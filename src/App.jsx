import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./static/Header/Headerr";
import Footer from "./static/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./components/Login-Signup/Signup";

import Verify from "./components/Login-Signup/Verify";
import Login from "./components/Login-Signup/Login";


import Wallet from "./components/Wallet/Wallet";
import WalletSettings from "./components/Wallet/WalletSettings";
import Dashboard from "./components/dashboard/Dashboard";
import MainUserProfile from "./components/userprofile/Mainuserprofile";
import NotificationSettings from "./components/notification/Notification";
import ResetPassword from "./components/Login-Signup/Reset";
// import Contactpage from "./pages/Contactpage/Contactpage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />


        {/* <Route path="/contact" element={<Contactpage />} /> */}
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/walletsettings" element={<WalletSettings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<MainUserProfile />} />
        <Route path="/NotificationSettings" element={<NotificationSettings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
