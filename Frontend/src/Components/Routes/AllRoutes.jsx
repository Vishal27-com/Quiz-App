import React, { useContext } from "react";
import Auth from "../Auth/Auth";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/User/Dashboard";
import Admin from "../../Pages/Admin/Admin";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import Profile from "../../Pages/User/Profile";
import Quiz from "../../Pages/User/Quiz";
import Result from "../../Pages/User/Result";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<UserRoutes><Dashboard /></UserRoutes>} />
      <Route path="/admin" element={<AdminRoutes><Admin /></AdminRoutes>} />
      <Route path="/profile" element={<UserRoutes><Profile /></UserRoutes>} />
      <Route path="/quiz" element={<UserRoutes><Quiz /></UserRoutes>} />
      <Route path="/result" element={<UserRoutes><Result /></UserRoutes>} />
    </Routes>
  );
};

export default AllRoutes;
