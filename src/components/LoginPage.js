import { useState } from "react";
import API from "../services/api";

const LoginPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = async (e) => {
      e.preventDefault();
      const { data } = await API.post("/auth/login", { email, password });
      if (data.role === "student") window.location.href = "/student-dashboard";
      else window.location.href = "/admin-dashboard";
   };

   return (
      <form onSubmit={handleLogin}>
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
         <button type="submit">Login</button>
      </form>
   );
};

export default LoginPage;
