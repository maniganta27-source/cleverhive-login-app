import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // using same css file for styling

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page!</h1>
      <p>You have successfully logged in 🎉</p>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Home;
