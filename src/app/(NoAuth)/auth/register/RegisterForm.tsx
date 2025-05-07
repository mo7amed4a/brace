"use client";

import type React from "react";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AxiosApp from "@/lib/axios";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file size (2MB = 2 * 1024 * 1024 bytes)
      if (selectedFile.size > 2 * 1024 * 1024) {
        setError("File size exceeds 2MB limit.");
        return;
      }
      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!validTypes.includes(selectedFile.type)) {
        setError("Invalid file format. Only .jpg, .png, and .pdf are allowed.");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!country) {
      setError("Please select a country.");
      return;
    }


    try {
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("confirm_password", confirmPassword);
      formData.append("country", country);
      formData.append("user_category", "developer");
      if (file) {
        formData.append("photo", file);
      }

      const res = await AxiosApp.post("/sign_up", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.status === "success") {
        // Redirect to login page after successful registration
        router.push("/auth/login");
      } else {
        setError(res.data.message || "Registration failed.");
      }
    } catch (err: any) {
      const errorMessage =
        err?.response?.data?.message || err?.message || "Something went wrong!";
      setError(errorMessage);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-300">Join Brace Development</p>
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="firstName" className="block text-sm text-white">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            className="w-full bg-white text-gray-800 px-4 py-2 rounded-md"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="lastName" className="block text-sm text-white">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            className="w-full bg-white text-gray-800 px-4 py-2 rounded-md"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm text-white">
            Email:
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white text-gray-800 px-10 py-2 rounded-md"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="block text-sm text-white">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full bg-white text-gray-800 px-4 py-2 rounded-md"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm text-white">
            Password:
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-white text-gray-800 px-10 py-2 rounded-md"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="confirmPassword" className="block text-sm text-white">
            Confirm Password:
          </label>
          <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full bg-white text-gray-800 px-10 py-2 rounded-md"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="country" className="block text-sm text-white">
            Country :
          </label>
          <input
            type="text"
            id="country"
            value={lastName}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter your country"
            className="w-full bg-white text-gray-800 px-4 py-2 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col gap-2 col-span-full">
          <label className="text-sm text-white">Upload Photo (Optional)</label>
          <span className="text-xs text-gray-400">
            Maximum file size allowed is 2MB, supported file formats include .jpg,
            .png, and .pdf.
          </span>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".jpg,.png,.pdf"
            className="w-40 text-white cursor-pointer bg-gray-800 p-2 text-xs rounded"
          />
        </div>
        <div className="col-span-full flex items-center justify-center flex-col">
          <button
            type="submit"
            className="px-20 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md transition duration-300 border border-gray-700"
          >
            Register
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-white">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-orange-500 hover:text-orange-400"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}