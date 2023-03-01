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
import LeaderBoard from "../../Pages/User/LeaderBoard";
import AllQuestions from "../../Pages/Admin/AllQuestions";
import AllUser from "../../Pages/Admin/AllUser";
import CreateAdmin from "../../Pages/Admin/CreateAdmin";
import QuestionEdit from "../../Pages/Admin/QuestionEdit";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<UserRoutes><Dashboard /></UserRoutes>} />
      <Route path="/profile" element={<UserRoutes><Profile /></UserRoutes>} />
      <Route path="/quiz" element={<UserRoutes><Quiz /></UserRoutes>} />
      <Route path="/result" element={<UserRoutes><Result /></UserRoutes>} />
      <Route path="/leaderboard" element={<UserRoutes><LeaderBoard /></UserRoutes>} />

      <Route path="/admin" element={<AdminRoutes><Admin /></AdminRoutes>} />
      <Route path="/all-questions" element={<AdminRoutes><AllQuestions /></AdminRoutes>} />
      <Route path="/question/:id" element={<AdminRoutes><QuestionEdit /></AdminRoutes>} />
      <Route path="/all-user" element={<AdminRoutes><AllUser /></AdminRoutes>} />
      <Route path="/create-admin" element={<AdminRoutes><CreateAdmin /></AdminRoutes>} />
    </Routes>
  );
};

export default AllRoutes;
