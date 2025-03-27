import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, Calendar, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <Link to="/form" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gray-200 transition">
          <Users className="text-blue-500" size={32} />
          <span className="text-lg font-semibold">Demo Google form</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
