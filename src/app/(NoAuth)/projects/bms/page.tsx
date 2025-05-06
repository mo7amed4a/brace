"use client"; // Mark this as a client-side component

import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button component
import Image from "next/image"; // For the logo image
import { Inter } from "next/font/google"; // Optional: For font styling

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div className={`bg-black text-white ${inter.className}`}>
      <div className="min-h-[70vh] pt-20 flex items-center  bg-gradient-to-b from-[#241F29] to-[#489255]/40 rounded-b-xl">
          <div className="max-w-4xl p-4 mx-auto grid md:grid-cols-2 gap-4 items-center">
            <div className="space-y-6 text-center md:text-start">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide">
              BMS - 
              Medical dashboard
              </h1>
              <p className="text-center md:text-start text-gray-400 text-lg md:text-xl">
              BMS is the ultimate all-in-one platform for seamless clinic bookings, multi-branch administration, and smart user-role control. Designed for clinics, hospitals, and medical centers, BMS empowers admins, staff, and patients with a centralized digital hub to streamline appointments, finances, and operations—no more chaos, just clarity.
              </p>
              <Button variant={"outline"}>Request a demo</Button>
            </div>
            <div className="flex items-end justify-center">
              <Image
                  src="/projects/project-2.png" // Replace with the actual path to your logo
                  alt="Al Rayan Logo"
                  className="w-40 md:w-64"
                  width={880}
                  height={880}
                />
            </div>
          </div>
    </div>
      <div className=" max-w-4xl mx-auto">
          <header className="flex items-center justify-start py-8">
            <div className="flex items-center space-x-4">
              {/* Replace with your logo */}
              <Image
                src="/projects/bms.png" // Replace with the actual path to your logo
                alt="Al Rayan Logo"
                width={80}
                height={80}
              />
              <h2 className="text-lg md:text-3xl font-bold tracking-wide">
              BMS - 
              Medical dashboard
              </h2>
            </div>
          </header>

          {/* Subtitle */}
          <p className="text-start text-gray-400 text-lg md:text-xl px-4">
          BMS is the ultimate all-in-one platform for seamless clinic bookings, multi-branch administration, and smart user-role control. Designed for clinics, hospitals, and medical centers, BMS empowers admins, staff, and patients with a centralized digital hub to streamline appointments, finances, and operations—no more chaos, just clarity.
          </p>

          {/* Main Content */}
          <main className="max-w- mx-auto px-4 py-12 space-y-12">
            {/* Introduction Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                INTRODUCTION
              </h2>
              <p className="text-gray-300 leading-relaxed">
              Introduction
              The Rayan application aims to enable sales representatives to perform their tasks easily and quickly. It serves as a comprehensive tool that assists in managing customer data, issuing invoices, and monitoring inventory.The Rayan application aims to enable sales representatives to perform their tasks easily and quickly. It serves as a comprehensive tool that assists in managing customer data, issuing invoices, and monitoring inventory.The Rayan application aims to enable sales representatives to perform their tasks easily and quickly. It serves as a comprehensive tool that assists in managing customer data, issuing invoices, and monitoring inventory.
              </p>
            </section>

            {/* Key Features Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Why BMS?
              </h2>
              <ol className="space-y-6 text-gray-300 list-decimal pl-5">
                <li>
                Multi-Branch Management: Control all clinic branches from a single dashboard—update schedules, track bookings, and sync data in real time.
                </li>
                <li>
                Smart User Roles: Assign tailored access (Admin, Staff, Accountant) to protect sensitive data and streamline workflows.
                </li>
                <li>
                Automated Bookings: Let patients book 24/7 via the portal, with instant confirmations and AI-powered slot optimization.
                </li>
                <li>
                Financial Tracking: Generate invoices, manage payments, and monitor clinic revenue with automated reports.
                </li>
                <li>
                Centralized Records: Securely store patient histories, staff notes, and financial documents in one searchable platform.
                </li>
                <li>
                Customizable Schedules: Set clinic hours, doctor availability, and emergency slots effortlessly.
                </li>
              </ol>
            </section>

            {/* Impact & Benefits Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Key Benefits
              </h2>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>
                Reduce no-shows with SMS/email reminders.
                </li>
                <li>
                Eliminate double bookings with real-time sync.
                </li>
                <li>
                Scale effortlessly as your clinic network grows.
                </li>
                <li>
                Save 50%+ time on administrative tasks.
                </li>
              </ul>
            </section>

          </main>
      </div>
    </div>
  );
};

export default HomePage;