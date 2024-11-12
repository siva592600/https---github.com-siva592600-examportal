import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const AdminDashboard = () => {
    const [selectedBatch, setSelectedBatch] = useState("");
    const [studentDetails, setStudentDetails] = useState([]); 
    const [emailData, setEmailData] = useState({
        email: "",
        resultLink: ""
    });

    const handleBatchSelect = (batch) => {
        setSelectedBatch(batch);
        // Fetch student details for the selected batch (Mocked data for now)
        setStudentDetails([
            { name: "Student A", email: "studentA@example.com" },
            { name: "Student B", email: "studentB@example.com" },
        ]);
    };

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setEmailData({ ...emailData, [name]: value });
    };

    const handleEmailSend = (e) => {
        e.preventDefault();
        // Implement email sending logic here (e.g., API call)
        alert("Email sent successfully with the result link!");
    };
     
    const handleLogout = (logout) => {
        // Remove any authentication tokens or session data
        localStorage.removeItem('authToken'); // Assuming you're storing tokens in localStorage
        Navigate('/'); // Redirect to home page or login page after logout
    };



    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
             <header>
                <h1>Admin Dashboard</h1>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </header>
            {/* Other dashboard content */}
            <h2>Admin Dashboard</h2>
            <p>Select a batch to view registered students:</p>
            <button onClick={() => handleBatchSelect("KKEM March CSA")}>KKEM March CSA</button>
            <button onClick={() => handleBatchSelect("KKEM March DSA")}>KKEM March DSA</button>
            
            {selectedBatch && (
                <div>
                    <h3>Students in {selectedBatch}</h3>
                    <ul>
                        {studentDetails.map((student, index) => (
                            <li key={index}>{student.name} - {student.email}</li>
                        ))}
                    </ul>
                </div>
            )}

            <h3>Send Test Results</h3>
            <form onSubmit={handleEmailSend}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={emailData.email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label>Result Link:</label>
                    <input type="text" name="resultLink" value={emailData.resultLink} onChange={handleEmailChange} required />
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
};

export default AdminDashboard;