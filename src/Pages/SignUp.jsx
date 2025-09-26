import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserIcon, EnvelopeIcon, PhoneIcon, TagIcon, LockClosedIcon, }
  from "@heroicons/react/24/solid";
import { useAlert } from "../Components/Alert";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider, facebookProvider, signInWithPopup } from "../lib/Firebase";

const SignUp = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { handleSubmit, register, watch, setValue, formState: { errors, isSubmitted }, clearErrors, setError } = useForm();

  const signUpValidation = (fieldName) => {
    switch (fieldName) {
      case "FirstName":
        return {
          required: "First Name is required"
        }
      case "LastName":
        return {
          required: "Last Name is required"
        }
      case "Email":
        return {
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Invalid email format"
          }
        }
      case "Phone":
        return {
          required: "Phone is required",
          pattern: {
            value: /^\d{10}$/,
            message: "Phone must be exactly 10 digits"
          }
        }
      case "DisplayName":
        return {
          required: "Display Name is required"
        }
      case "Password":
        return {
          required: "Password is required"
        }
      case "ConfirmPassword":
        return {
          required: "Confirm Password is required"
        }
      case "AgreeTerms":
        return {
          required: "You must accept the terms and condition"
        }
      default:
        return {
          required: "All fields are required required"
        }
    }
  }

  const firstName = watch("FirstName");
  const lastName = watch("LastName");

  useEffect(() => {

    if (firstName || lastName) {
      setValue("DisplayName", `${firstName || ""}${firstName && lastName ? "." : ""}${lastName || ""}`);
      clearErrors("DisplayName")
    }
    else {
      if (isSubmitted) {
        setValue("DisplayName", "")
        setError("DisplayName", {
          type: "required",
          message: "Display Name is required",
        });
      }
    }
  }, [firstName, lastName]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      data.IsEmailVerified = false;
      var apiUrl = import.meta.env.VITE_API_URL;
      var signup = import.meta.env.VITE_SIGNUP_API;
      const res = await fetch(`${apiUrl}${signup}`, {
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

      showAlert({ type: "success", message: jsonResponse.message || "Registration successful!" });

      navigate("/SignIn");

    } catch (err) {
      console.error("Network or unexpected error:", err);
      showAlert({ type: "error", message: "Something went wrong. Please try again later." });
    }
    finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Google user:", user);
      const username = user.displayName;
      const firstName = username.split(' ')[0];
      const lastName = username.split(' ')[1];

      const data = {
        FirstName: firstName,
        LastName: lastName,
        DisplayName: firstName + "." + lastName,
        Email: user.email,
        IsEmailVerified: true,
        Password: "Welcome*123"
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const signup = import.meta.env.VITE_SIGNUP_API;
      const res = await fetch(`${apiUrl}${signup}`, {
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

      showAlert({ type: "success", message: jsonResponse.message || "Registration successful!" });

      navigate("/SignIn");
    } catch (error) {
      console.error("Google Login Error:", error);
      showAlert({ type: "error", message: error.message });
    }
  };

  const inputClassNames =
    "pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 text-gray-900";

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Side */}
        <div className="lg:w-1/2 bg-gradient-to-br from-teal-600 to-blue-700 p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                {/* Logo SVG or icon */}
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white">TouchYatra</h1>
            </div>

            <div className="space-y-6 max-w-md">
              <h2 className="text-4xl font-bold text-white">Join Our Community</h2>
              <p className="text-teal-100 text-lg">
                Create your TouchYatra account today and start connecting instantly with people around the world.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-teal-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-cyan-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-teal-300 border-2 border-white"></div>
              </div>
              <p className="text-teal-100">
                <span className="font-semibold">Join 10,000+ users</span> connecting with TouchYatra
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 bg-white p-12 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
              <p className="text-gray-500">Fill in the details to get started</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("FirstName", signUpValidation("FirstName"))}
                    name="FirstName"
                    placeholder="John"
                    className={inputClassNames}
                  />
                </div>
                {errors.FirstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.FirstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("LastName", signUpValidation("LastName"))}
                    name="LastName"
                    placeholder="Doe"
                    className={inputClassNames}
                  />
                </div>
                {errors.LastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.LastName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("Email", signUpValidation("Email"))}
                    name="Email"
                    placeholder="you@example.com"
                    className={inputClassNames}
                  />
                </div>
                {errors.Email && (
                  <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="Phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("Phone", signUpValidation("Phone"))}
                    name="Phone"
                    maxLength={10}
                    placeholder="9545454565"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                    className={inputClassNames}
                  />
                </div>
                {errors.Phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.Phone.message}</p>
                )}
              </div>

              {/* Display Name */}
              <div>
                <label
                  htmlFor="DisplayName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Display Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <TagIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("DisplayName", signUpValidation("DisplayName"))}
                    name="DisplayName"
                    placeholder="John.Doe"
                    className={inputClassNames}
                  />
                </div>
                {errors.DisplayName && (
                  <p className="text-red-500 text-sm mt-1">{errors.DisplayName.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("Password", signUpValidation("Password"))}
                    name="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={inputClassNames}
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
                {errors.Password && (
                  <p className="text-red-500 text-sm mt-1">{errors.Password.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="ConfirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("ConfirmPassword", signUpValidation("ConfirmPassword"))}
                    name="ConfirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={inputClassNames}
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
                {errors.ConfirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.ConfirmPassword.message}</p>
                )}
              </div>

              {/* Agree Terms */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    {...register("AgreeTerms", signUpValidation("AgreeTerms"))}
                    name="AgreeTerms"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="AgreeTerms"
                    className="text-gray-600 select-none"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-medium text-teal-600 hover:text-teal-500"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium text-teal-600 hover:text-teal-500"
                    >
                      Privacy Policy
                    </a>
                  </label>
                  {errors.AgreeTerms && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.AgreeTerms.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 transform hover:-translate-y-0.5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Creating...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

              </div>
            </form>

            {/* Social Buttons */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Or continue with
                  </span>
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
                Already have an account?{' '}
                <Link to="/SignIn" className="font-medium text-teal-600 hover:text-teal-500 transition duration-200">
                  Sign In
                </Link>
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
