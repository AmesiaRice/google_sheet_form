import React, { useEffect, useState } from 'react';
import './app.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import GoogleForm from './components/GoogleForm';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import toast from 'react-hot-toast';

import api from './api/axios';
import EnrollmentForm from './components/EnrollForm';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/profile")
      .then(res => {
        setUser(res.data);
        setLoading(false);
        toast.success("Logged in successfully! 👋");
      })
      .catch(err => {
        setUser(null);
        setLoading(false);
        toast.error("Logged in error! 👋");
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  // 🔒 Not logged in? Show only login route
  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  const handleLogout = () => {
    api.get("/logout")
      .then(() => {
        setUser(null); // 💥 Update user state
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        toast.success("Logged out successfully! 👋");
      })
      .catch((err) => console.log("Logout error:", err));
  };

  // ✅ Logged in? Show full app
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar user={user} onLogout={handleLogout}/>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/form" element={<GoogleForm />} /> */}
            <Route path="/form" element={<EnrollmentForm/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
