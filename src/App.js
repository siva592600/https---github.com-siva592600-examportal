import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
         </Routes>
      </Router>
   );
}

export default App;
