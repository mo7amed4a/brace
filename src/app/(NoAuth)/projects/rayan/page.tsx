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
                Al Rayan - <br />Sales Rep App
              </h1>
              <p className="text-center md:text-start text-gray-400 text-lg md:text-xl">For Sales, Accounting, and Inventory Management
              </p>
              <Button variant={"outline"}>Request a demo</Button>
            </div>
            <div className="flex items-end justify-center">
              <Image
                  src="/projects/project-1.png" // Replace with the actual path to your logo
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
                src="/projects/rayan.png" // Replace with the actual path to your logo
                alt="Al Rayan Logo"
                width={80}
                height={80}
              />
              <h2 className="text-lg md:text-3xl font-bold tracking-wide">
                AL RAYAN -<br /> SALES REPRESENTATIVE APPLICATION
              </h2>
            </div>
          </header>

          {/* Subtitle */}
          <p className="text-start text-gray-400 text-lg md:text-xl px-4">
            The Rayan application aims to enable sales representatives to perform
            their tasks easily and quickly. It serves as a comprehensive tool that
            assists in managing customer data, issuing invoices, and monitoring
            inventory.
          </p>

          {/* Main Content */}
          <main className="max-w- mx-auto px-4 py-12 space-y-12">
            {/* Introduction Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                INTRODUCTION
              </h2>
<p className="text-gray-300 leading-relaxed">

              The system has been designed with easy and flexible mechanisms to manage and monitor the activities of distributors and sales representatives, allowing for detailed reports that help in setting goals to increase sales. 
</p>
<p className="text-gray-300 leading-relaxed pt-4">

What distinguishes this system is the integration of WhatsApp with the platform, enabling daily summaries of reports and financial transactions to be sent to management, as well as automatic sending of invoices and account statements to customers.
</p>
<p className="text-gray-300 leading-relaxed pt-4">

The system includes many features that have been developed based on the requirements of the labor market and the distribution of food products. It is designed to address issues related to managing sales representatives and monitoring their work in real-time, enabling quick decision-making and instructions to correct errors, thereby increasing team efficiency while reducing management and monitoring costs on one hand, and enhancing customer satisfaction on the other.
</p>
              
            </section>

            {/* Key Features Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Features of the System:

              </h2>
              <ol className="space-y-6 text-gray-300 list-decimal pl-5">
                <li>
                  <span className="font-bold">
                  Issuance of International drive Licenses: Includes two types of licenses (10-year validity / 1-year validity).
                  </span>{" "}
                  {/* Sales representatives can effortlessly add and manage client
                  profiles, track interactions, and generate detailed invoices in
                  real time. The system automates calculations, ensures accuracy,
                  and stores historical data for quick reference, simplifying
                  follow-ups and financial reporting. */}
                </li>
                <li>
                  <span className="font-bold">
                  B2B Policy: Targets tourism and travel companies, facilitating efficient management of their bookings.
                  </span>{" "}
                  {/* Sales representatives can effortlessly add and manage client
                  profiles, track interactions, and generate detailed invoices in
                  real time. The system automates calculations, ensures accuracy,
                  and stores historical data for quick reference, simplifying
                  follow-ups and financial reporting. */}
                </li>
                <li>
                  <span className="font-bold">
                  Diverse Destinations: The system offers a wide variety of tourist destinations and hotels, catering to the needs of the Iraqi market.
                  </span>{" "}
                  {/* Sales representatives can effortlessly add and manage client
                  profiles, track interactions, and generate detailed invoices in
                  real time. The system automates calculations, ensures accuracy,
                  and stores historical data for quick reference, simplifying
                  follow-ups and financial reporting. */}
                </li>
                <li>
                  <span className="font-bold">
                  Competitive Prices: Due to direct contracts with many hotels in the most desired destinations, as well as integration with global systems like ETG and E-Booking.
                  </span>{" "}
                  {/* Sales representatives can effortlessly add and manage client
                  profiles, track interactions, and generate detailed invoices in
                  real time. The system automates calculations, ensures accuracy,
                  and stores historical data for quick reference, simplifying
                  follow-ups and financial reporting. */}
                </li>
              </ol>
            </section>

          
          </main>
      </div>
    </div>
  );
};

export default HomePage;