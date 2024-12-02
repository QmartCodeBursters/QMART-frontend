import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./static/Header/Headerr";
import Footer from "./static/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./components/Login-Signup/Signup";

import Verify from "./components/Login-Signup/Verify";
import Login from "./components/Login-Signup/Login";

import MainDashboard from "./components/dashboard/Maindashboard";
import Wallet from "./components/Wallet/Wallet";

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
        <Route path="/dashboard" element={<MainDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
