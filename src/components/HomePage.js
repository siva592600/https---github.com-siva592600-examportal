// src/pages/HomePage.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();

    const handleAdminLogin = () => {
        navigate("/admin/login");
    };

    const handleStudentLogin = () => {
        navigate("/student-dashboard");
    };

    return (
        <div className="home-page-container">
            <h1 className="home-page-header">ICTAK Exam Registration Portal</h1>
            <p className="home-page-description">
                Welcome to the ICTAK Exam Registration Portal. Please choose an option below to log in.
            </p>
            <div className="login-buttons-container">
                <button onClick={handleAdminLogin} className="login-button">Admin Login</button>
                <button onClick={handleStudentLogin} className="login-button">Student Login</button>
            </div>
        </div>
    );
};

export default HomePage;
