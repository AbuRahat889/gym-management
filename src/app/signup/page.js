"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
  return (
    <div className=" py-20 bg-gray-100 flex items-center justify-center">
      <div className="container m-auto w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Sign Up
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Create your account to get started
        </p>
        <form className="mt-6 space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              required
            />
          </div>
          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              required
            />
          </div>
          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+880**********"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="divider divider-info">Or</div>

        {/* Social Login */}
        <div className="text-center mb-4 w-full">
          <button className="btn w-full border">
            <FcGoogle className="text-4xl" /> Continue with Google
          </button>
        </div>

        {/* Redirect to Login */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link className="text-red-500 font-semibold" href="/signin">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
