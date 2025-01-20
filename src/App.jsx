import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Header from "./static/Header/Headerr";
import Footer from "./static/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Verify from "./components/Login-Signup/Verify";
import Signup from "./components/Login-Signup/Signup";
import Login from "./components/Login-Signup/Login";
import Contactpage from "./pages/Contactpage/Contactpage";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import OTPPage from "./components/forgotpassword/OTPPage";
import passwordUpdate from "./components/Login-Signup/passwordUpdate";

// import PaymentPage from "./components/paymentpage/PaymentPage";
import PaymentPage from "./components/paymentpage/SecPayment";
import PaymentSuccess from "./components/paymentpage/PaymentSuccess";
import Wallet from "./components/Wallet/Wallet";
import WalletSettings from "./components/Wallet/WalletSettings";
import WithdrawalHistory from "./components/Withdrawalhistory/WithdrawalHistory";
import TransactionDetails from "./components/Withdrawalhistory/TransactionDetails";
import QrCode from "./pages/QRcodePage/QrCode";
import Settingspage from "./pages/SettingsPage/SettingsPage";
import UserSettingspage from "./pages/SettingsPage/UserSettings";
import ScanHere from "./pages/QRcodePage/UserScan";
import UserWallet from "./components/Wallet/UserWallet";
import Otpgen from "./components/Login-Signup/otpVerification";
import About from "./pages/About/About";
import PrintQRcode from "./components/UserOptions/PrintQRcode";
import UserPaymentLoading from "./components/UserOptions/UserPaymentLoading";
import UserPaymentConfir from "./components/UserOptions/UserPaymentConfir";
import UserPaymentSuccessPage from "./components/paymentpage/success";
// import ReceivePayment from "./pages/QRcodePage/RecvPay"
import ReceivePayment from "./pages/QRcodePage/ReceivePayment";
import Order from "./components/Payment/Order";
import Extend from "./components/Payment/Extend";
import Dashboard from "./components/dashboard/Dashboard";
import { AppProvider } from "./common/AuthContext";
import CreateBiz from "./components/Login-Signup/CreateBiz";
import VerifyEmailOTP from "./components/Login-Signup/Reset";
import OtpResetPassword from "./components/Login-Signup/OtpResetPassword";

import NotificationSettings from "./components/notification/Notification";
import MainUserProfile from "./components/userprofile/Mainuserprofile";
import { useEffect } from "react";
import PaymentPagetwo from "./components/paymentpage/unrealPaymentPage";
import PasswordUpdate from "./components/Login-Signup/passwordUpdate";


function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [location]); 

  return null;
}

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-verification" element={<Otpgen />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
          <Route path="/otppage" element={<OTPPage />} />
          <Route path="/reset-password" element={<VerifyEmailOTP />} />
          <Route path="/otp-password-verification" element={<OtpResetPassword />} />
          

          <Route path="/contact" element={<Contactpage />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/merchant-create-business" element={<CreateBiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/makepayment" element={<PaymentPage />} />
          <Route path="/makepayment-two" element={<PaymentPagetwo />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/WalletSettings" element={<WalletSettings />} />
          <Route path="/WithdrawalHistory" element={<WithdrawalHistory />} />
          <Route path="/withdrawaldetails" element={<TransactionDetails />} />
          <Route path="/paymenthistory" element={<Order />} />
          <Route path="/Settings" element={<Settingspage />} />
          <Route path="/UserSettings" element={<UserSettingspage />} />
          <Route path="/UserScan" element={<ScanHere />} />
          <Route path="/qr-code" element={<QrCode />} />
          <Route path="/UserWallet" element={<UserWallet />} />
          {/* <Route path="/ReceivePay" element={<ReceivePayment />} /> */}
          <Route path="/ReceivePayment" element={<ReceivePayment />} />
          
          <Route path="/notification-settings" element={<NotificationSettings />}/>
          <Route path="/QRcode" element={<PrintQRcode />} />
          <Route path="/loading" element={<UserPaymentLoading />} />
          <Route
            path="/transaction-status"
            element={<UserPaymentSuccessPage />}
          />
          <Route path="/Confam" element={<UserPaymentConfir />} />
          <Route path="/profile" element={<MainUserProfile />} />
          <Route path="/order/:orderId" element={<Extend />} />
          <Route path="/password-update" element={<PasswordUpdate />}/>

          <Route path="/payment/failure" element={<PaymentFailure/>} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
