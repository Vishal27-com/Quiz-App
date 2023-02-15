import React from "react";
import Auth from "./Auth/Auth";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
