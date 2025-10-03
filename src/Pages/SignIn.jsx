import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { EnvelopeIcon, LockClosedIcon, EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useAlert } from "../Components/Alert";
import { Link, useNavigate } from "react-router-dom"
import { auth, googleProvider, facebookProvider, signInWithPopup } from "../lib/Firebase";

const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const SignInValidation = (fieldName) => {
    switch (fieldName) {
      case "Email":
        return {
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Invalid email format"
          }
        };
      case "Password":
        return {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          maxLength: {
            value: 16,
            message: "Password must be no more than 16 characters",
          },
          matches: {
            value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            message: "Password must include at least 1 uppercase letter, 1 number, and 1 special character"
          }
        };

      default:
        return {
          required: "All fields are required"
        }
    }
  }

  const handleGoogleLogin = async () => {
    try {
      debugger
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Google user:", user);
      const email = user.email;

      const data = {
        Email: email
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const signInUrl = import.meta.env.VITE_GOOGLE_SIGNIN_API;
      const res = await fetch(`${apiUrl}${signInUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let jsonResponse = {};

      try {
        jsonResponse = await res.json();
      } catch (jsonErr) {
        jsonResponse.message = "Invalid server response.";
      }

      if (!res.ok) {
        showAlert({ type: "error", message: jsonResponse.message || "Something went wrong" });
        return;
      }

      showAlert({ type: "success", message: jsonResponse.message || "Login successful!" });

      navigate("/Edit");
    } catch (error) {
      console.error("Google Login Error:", error);
      showAlert({ type: "error", message: error.message });
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {

      const apiUrl = import.meta.env.VITE_API_URL;
      const signinUrl = import.meta.env.VITE_SIGNIN_API;
      const res = await fetch(`${apiUrl}${signinUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let jsonResponse = {};

      try {
        jsonResponse = await res.json();
      } catch (jsonErr) {
        jsonResponse.message = "Invalid server response.";
      }

      if (!res.ok) {
        showAlert({ type: "error", message: jsonResponse.Message || "Something went wrong" });
        return;
      }
      debugger

      showAlert({ type: "success", message: jsonResponse.Message || "Login successful!" });

      navigate("/Edit");
    } catch (err) {
      console.error("Network or unexpected error:", err);
      showAlert({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className={`max-w-6xl w-full flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 'opacity-100 translate-y-0'`}>
        {/* Left Side - Visual Section */}
        <div className="lg:w-1/2 bg-gradient-to-br from-teal-600 to-blue-700 p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

          {/* Wave pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-800/20 to-transparent"></div>

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white">TouchYatra</h1>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Welcome Back</h2>
              <p className="text-teal-100 text-lg max-w-md">
                Sign in to continue your journey with TouchYatra and connect instantly with anyone, anywhere.
              </p>

              {/* Feature highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-5 w-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-teal-100">Secure end-to-end encrypted messaging</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-5 w-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-teal-100">Connect with people worldwide</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-5 w-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-teal-100">Share experiences and stories</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-teal-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-cyan-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white"></div>
              </div>
              <p className="text-teal-100">
                <span className="font-semibold">Join 10,000+ users</span> connecting with TouchYatra
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="lg:w-1/2 bg-white p-12 flex flex-col justify-center relative">

          <div className="max-w-md w-full mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign In to Your Account</h2>
              <p className="text-gray-500">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-1`}>
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>

                    <input
                      {...register("Email", SignInValidation("Email"))}
                      className={`pl-10 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.Email && (
                    <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium">
                      Password
                    </label>
                    <a
                      href="/forgot-password"
                      className="text-sm font-medium text-teal-600 hover:text-teal-500 transition duration-200"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <div className="relative">
                    {/* Lock icon on the left */}
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-gray-400" />
                    </div>

                    {/* Password input */}
                    <input
                      {...register("Password", SignInValidation("Password"))}
                      type={showPassword ? "text" : "password"}
                      className={`pl-10 pr-10 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200`}
                      placeholder="••••••••"
                    />

                    {/* Eye toggle button on the right */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>

                  {errors.Password && (
                    <p className="text-red-500 text-sm mt-1">{errors.Password.message}</p>
                  )}
                </div>


                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link to="/SignUp" className="font-medium text-teal-600 hover:text-teal-500 transition duration-200">
                      Create account
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 transform hover:-translate-y-0.5 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : 'Sign In'}
                </button>
              </div>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3">

                {/* Google */}
                <button
                  onClick={handleGoogleLogin}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 533.5 544.3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M533.5 278.4c0-18.6-1.5-37-4.3-54.6H272v103.3h146.9c-6.3 34-25.6 62.9-54.6 82.1v68h88.3c51.5-47.5 81-117.2 81-198.8z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272 544.3c73.8 0 135.8-24.5 181-66.4l-88.3-68c-24.5 16.4-56 26-92.7 26-71.3 0-131.7-48.1-153.3-112.9H31.1v70.8C75.8 488.4 167.1 544.3 272 544.3z"
                      fill="#34a853"
                    />
                    <path
                      d="M118.7 324.8c-7.3-21.9-7.3-45.6 0-67.5v-70.8H31.1c-30.8 59.7-30.8 130.8 0 190.5l87.6-52.2z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272 107.7c39.9 0 75.7 13.7 104 40.6l78-78C408 24.1 344.3 0 272 0 167.1 0 75.8 55.9 31.1 139.8l87.6 70.8C140.3 156 200.7 107.7 272 107.7z"
                      fill="#ea4335"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/SignUp" className="font-medium text-teal-600 hover:text-teal-500 transition duration-200">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-8 text-center text-xs text-gray-500">
              <p>By signing in, you agree to our <a href="/terms" className="text-teal-600 hover:text-teal-500">Terms of Service</a> and <a href="/privacy" className="text-teal-600 hover:text-teal-500">Privacy Policy</a>.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default SignIn;