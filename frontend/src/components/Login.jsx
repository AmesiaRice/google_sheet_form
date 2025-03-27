import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-200">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Welcome to Amasia Rice</h1>
        <p className="text-gray-600 mb-8">Please log in to continue</p>

        <button
          onClick={handleLogin}
          className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-orange-400 text-gray-700 px-6 py-3 rounded-full shadow hover:shadow-lg transition duration-300 w-full"
        >
          <FcGoogle size={24} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
