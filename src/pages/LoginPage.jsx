// src/pages/LoginPage.jsx
import { useState, useEffect } from 'react';
import { signInWithGoogle } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 1. Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("Google User:", user);
      setUser(user);
      navigate('/game'); // Redirect to game after login
    } catch (error) {
      alert("Google Login Failed");
    }
  };

  // 2. Handle Truecaller Login
  // Truecaller works by listening for a specialized "event" when the user verifies on their phone.
  useEffect(() => {
    // Only run this if the Truecaller script is loaded
    if (window.truecaller) {
      window.truecaller.customCallback = function (profile) {
        console.log("Truecaller Profile:", profile);
        setUser(profile);
        navigate('/game');
      };

      // You need your specific App Key here from the Truecaller Dashboard
      // The 'requestNonce' is a random string you generate for security
      const requestNonce = "generate_a_random_unique_string_here"; 
      
      // Initialize the SDK
      // Note: Replace 'YOUR_APP_KEY' with the key from the Truecaller console
      // window.truecaller.init('YOUR_APP_KEY', requestNonce, 'login_button');
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome to Puzzle Game
        </h1>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full mb-4 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in with Google
        </button>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>

        {/* Truecaller Button Placeholder */}
        {/* The actual Truecaller button is often auto-generated or needs a custom triggering function */}
        <button
          onClick={() => alert("Truecaller Verification is complex to test on Localhost without HTTPS. Focus on Google Auth first!")}
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none"
        >
          Verify with Truecaller
        </button>

      </div>
    </div>
  );
};

export default LoginPage;