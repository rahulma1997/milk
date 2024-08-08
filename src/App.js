import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Design/dashboard.css";
import "./Design/login.css"
import "./Design/forget.css";
import "./Design/user.css";
import "./Design/outward.css";
import "./Design/inward.css";
import "./Design/payment.css";
import Dashboard from "./Components/A_Dashboard";
import Log from "./Components/A_Login";
import Forget_Password from "./Components/Forget_password";
import User from "./Components/User";
import Outward from "./Components/Outward";
import Inward from "./Components/Inward";
import Payment from "./Components/payments";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/" element={<Log/>} />
          <Route path="/forget_password" element={<Forget_Password/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/outward" element={<Outward/>} />
          <Route path="/inward" element={<Inward/>} />
          <Route path="/payment" element={<Payment/>} />
       </Routes>
    </Router>
  );
}

export default App;
