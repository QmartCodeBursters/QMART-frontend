import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./static/Header/Headerr";
import Footer from "./static/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./components/Login-Signup/Signup";

import Verify from "./components/Login-Signup/Verify";
import Login from "./components/Login-Signup/Login";

import MainDashboard from "./components/dashboard/Maindashboard";
import Wallet from "./components/Wallet/Wallet";
import WalletSettings from "./components/Wallet/WalletSettings";
import About from "./components/About/About";
import PrintQRcode from "./components/About/PrintQRcode";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/wallet" element={<Wallet />} />
        <Route path="/walletsettings" element={<WalletSettings />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/aboutUs" element={ <About/>}/>
        <Route path="/QRcode" element={<PrintQRcode/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
