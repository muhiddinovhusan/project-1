import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Verify from "../pages/verify";
import ForgotPassword from "../pages/forgot-password";
import Home from "../pages/home";
import Layout from "../layout/layout";
import CreateServices from "../pages/create/CreateServices";
import Tasks from "../pages/tasks/Tasks";
// import { ForgotPassword, Home, Login, Register, Verify } from "../pages";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        /> 
        <Route
          path="/create"
          element={
            <Layout>
              <CreateServices />
            </Layout>
          }
        /> 
        <Route
          path="/tasks"
          element={
            <Layout>
              <Tasks />
            </Layout>
          }
        /> 
        
             </Routes>
    </Router>

  );
};

export default PageRoutes;
