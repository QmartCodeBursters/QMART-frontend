import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header/Headerr";
import Footer from "./static/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Verify from "./components/Login-Signup/Verify";
import Signup from "./components/Login-Signup/Signup";
import Login from "./components/Login-Signup/Login";
import Contactpage from "./pages/Contactpage/Contactpage";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import OTPPage from "./components/forgotpassword/OTPPage";
import ResetPassword from "./components/forgotpassword/ResetPassword";
import Dashboard from "./components/dashboard/Dashboard";
import PaymentPage from "./components/paymentpage/PaymentPage"
import PaymentSuccess from "./components/paymentpage/PaymentSuccess"

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
        <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/otppage" element={<OTPPage />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/makepayment" element={<PaymentPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
