import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const toggleForm = () => setIsSignIn((prev) => !prev);

  // Handle Sign In
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      alert("Registration successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-5 lg:px-0 relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="max-w-screen-xl w-full bg-white/30 backdrop-blur-lg border border-white/40 shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row relative">
        
       
        <div
          className={`hidden md:flex absolute top-0 h-full w-full md:w-1/2 bg-orange-500 text-center transition-all duration-500 ease-in-out ${
            isSignIn ? "left-0" : "left-full md:left-1/2"
          } flex items-center justify-center`}
        >
          <div
            className="w-3/4 h-3/4 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>

      
        <div
          className={`w-full md:w-1/2 p-6 sm:p-12 ${
            isSignIn ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-3xl xl:text-5xl font-extrabold text-orange-600">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Enter your credentials to access your account
            </p>

            <div className="w-full flex-1 mt-8">
              <form
                onSubmit={handleSignIn}
                className="mx-auto max-w-xs flex flex-col gap-4"
              >
                <input
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 border border-gray-300 text-sm text-gray-700 placeholder-gray-400"
                  type="email"
                  placeholder="Enter your email"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 border border-gray-300 text-sm text-gray-700 placeholder-gray-400"
                  type="password"
                  placeholder="Password"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                />

                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-orange-500 text-white w-full py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 ease-in-out"
                >
                  Sign In
                </button>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don’t have an account?{" "}
                  <span
                    className="text-orange-500 font-semibold cursor-pointer"
                    onClick={toggleForm}
                  >
                    Sign Up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>

     
        <div
          className={`w-full md:w-1/2 p-6 sm:p-12 ${
            isSignIn ? "hidden" : "block"
          } md:block`}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-3xl xl:text-5xl font-extrabold text-orange-600">
              Sign Up
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Enter your details to create an account
            </p>

            <div className="w-full flex-1 mt-8">
              <form
                onSubmit={handleSignUp}
                className="mx-auto max-w-xs flex flex-col gap-4"
              >
                <input
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 border border-gray-300 text-sm text-gray-700 placeholder-gray-400"
                  type="text"
                  placeholder="Enter your name"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 border border-gray-300 text-sm text-gray-700 placeholder-gray-400"
                  type="email"
                  placeholder="Enter your email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 border border-gray-300 text-sm text-gray-700 placeholder-gray-400"
                  type="password"
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />

                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-orange-500 text-white w-full py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 ease-in-out"
                >
                  Sign Up
                </button>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <span
                    className="text-orange-500 font-semibold cursor-pointer"
                    onClick={toggleForm}
                  >
                    Sign In
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
