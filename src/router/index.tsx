import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgotPassword, Home, Login, Register, Verify } from "../pages";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
