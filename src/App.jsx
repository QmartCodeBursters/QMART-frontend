import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import Header from "./static/Header/Headerr";
import Footer from "./static/Footer/Footer";

import Homepage from "./pages/Homepage/Homepage";
import Verify from "./components/Login-Signup/Verify";
import Signup from "./components/Login-Signup/Signup";
import Login from "./components/Login-Signup/Login";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import OTPPage from "./components/forgotpassword/OTPPage";
import Otpgen from "./components/Login-Signup/otpVerification";
import VerifyEmailOTP from "./components/Login-Signup/Reset";
import OtpResetPassword from "./components/Login-Signup/OtpResetPassword";
import PasswordUpdate from "./components/Login-Signup/passwordUpdate";
import CreateBiz from "./components/Login-Signup/CreateBiz";

import Contactpage from "./pages/Contactpage/Contactpage";
import About from "./pages/About/About";
import Dashboard from "./components/dashboard/Dashboard";
import Settingspage from "./pages/SettingsPage/SettingsPage";
import UserSettingspage from "./pages/SettingsPage/UserSettings";

import PaymentPage from "./components/paymentpage/SecPayment";
import PaymentSuccess from "./components/paymentpage/PaymentSuccess";
import PaymentPagetwo from "./components/paymentpage/unrealPaymentPage";
import PaymentCallback from "./components/Paystack/paymentCall";
import PaymentFailure from "./components/Paystack/paymentfailed";
import PaystackLoad from "./components/Paystack/PaystackLoad";

import Wallet from "./components/Wallet/Wallet";
import WalletSettings from "./components/Wallet/WalletSettings";
import WithdrawalHistory from "./components/Withdrawalhistory/WithdrawalHistory";
import TransactionDetails from "./components/Withdrawalhistory/TransactionDetails";
import UserWallet from "./components/Wallet/UserWallet";

import QrCode from "./pages/QRcodePage/QrCode";
import ScanHere from "./pages/QRcodePage/UserScan";
import ReceivePayment from "./pages/QRcodePage/ReceivePayment";
import PrintQRcode from "./components/UserOptions/PrintQRcode";

import UserPaymentLoading from "./components/UserOptions/UserPaymentLoading";
import UserPaymentConfir from "./components/UserOptions/UserPaymentConfir";
import UserPaymentSuccessPage from "./components/paymentpage/success";

import Order from "./components/Payment/Order";
import Extend from "./components/Payment/Extend";

import NotificationSettings from "./components/notification/Notification";
import MainUserProfile from "./components/userprofile/Mainuserprofile";

import { AppProvider } from "./common/AuthContext";

// Scroll to top logic
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
          <Route path="/password-update" element={<PasswordUpdate />} />

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
          <Route path="/ReceivePayment" element={<ReceivePayment />} />
          <Route path="/payment/callback" element={<PaymentCallback />} />
          <Route path="/notification-settings" element={<NotificationSettings />} />
          <Route path="/QRcode" element={<PrintQRcode />} />
          <Route path="/loading" element={<UserPaymentLoading />} />
          <Route path="/transaction/success" element={<UserPaymentSuccessPage />} />
          <Route path="/Confam" element={<UserPaymentConfir />} />
          <Route path="/profile" element={<MainUserProfile />} />
          <Route path="/order/:orderId" element={<Extend />} />
          <Route path="/payment/failure" element={<PaymentFailure />} />
          <Route path="/paystack-payment" element={<PaystackLoad />} />
          </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
