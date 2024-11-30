import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./static/Header/Headerr";
import Footer from "./static/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./components/Login-Signup/Signup";

import Verify from "./components/Login-Signup/Verify";
import Login from "./components/Login-Signup/Login";
import Settings from "./components/Settings/Settings";
import AddressForm from "./components/Settings/AddressForm";
import QrCode from "./pages/QRcodePage/QrCode";
import Password from "./components/PasswordChange/Password";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={}> 
          <Route path="/settings" element={<Settings />} />
        </Route> */}
        <Route path="/addressform"element={<AddressForm/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/QrCode" element={<QrCode/>}/>
        <Route path="/Password" element={<Password/>}/>

      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
