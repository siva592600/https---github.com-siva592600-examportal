import React, { useState } from "react";

const StudentDashboard = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        dob: "",
        batchName: "KKEM March CSA",
        gender: "Male",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement the form submission logic here (e.g., API call)
        setFormSubmitted(true); // Disable the form after submission
        alert("Registration form submitted successfully!");
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>Student Dashboard</h2>
            <p>Exit Test Registration</p>
            {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>DOB:</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Batch Name:</label>
                        <select name="batchName" value={formData.batchName} onChange={handleChange}>
                            <option value="KKEM March CSA">KKEM March CSA</option>
                            <option value="KKEM March DSA">KKEM March DSA</option>
                            <option value="KKEM March MLAI">KKEM March MLAI</option>
                            <option value="KKEM March FSD">KKEM March FSD</option>
                            <option value="KKEM March ST">KKEM March ST</option>
                        </select>
                    </div>
                    <div>
                        <label>Gender:</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>Thank you! Your registration has been submitted.</p>
            )}
        </div>
    );
};

export default StudentDashboard;