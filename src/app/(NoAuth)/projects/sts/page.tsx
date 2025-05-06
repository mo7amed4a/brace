"use client"; // Mark this as a client-side component

import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button component
import Image from "next/image"; // For the logo image
import { Inter } from "next/font/google"; // Optional: For font styling

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div className={`bg-black text-white ${inter.className}`}>
      <div className="min-h-[70vh] pt-20 flex items-center  bg-gradient-to-b from-[#241F29] to-[#642B0E]/60 rounded-b-xl">
          <div className="max-w-4xl p-4 mx-auto grid md:grid-cols-2 gap-4 items-center">
            <div className="space-y-6 text-center md:text-start">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide">
              Sama Tourism System (STS)
              </h1>
              <p className="text-center md:text-start text-gray-400 text-lg md:text-xl">
              STS is a comprehensive system for hotel bookings and issuing international drive licenses. 
              </p>
              <Button variant={"outline"}>Request a demo</Button>
            </div>
            <div className="flex items-end justify-center">
              <Image
                  src="/projects/project-3.png" // Replace with the actual path to your logo
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
            <div className="flex items-center space-x-4 px-4">
              {/* Replace with your logo */}
              <Image
                src="/projects/sts.png" // Replace with the actual path to your logo
                alt="Al Rayan Logo"
                width={80}
                height={80}
              />
              <h2 className="text-lg md:text-3xl font-bold tracking-wide">
              Sama Tourism System (STS)
              </h2>
            </div>
          </header>

          {/* Subtitle */}
          {/* <p className="text-start text-gray-400 text-lg md:text-xl px-4">
          BMS is the ultimate all-in-one platform for seamless clinic bookings, multi-branch administration, and smart user-role control. Designed for clinics, hospitals, and medical centers, BMS empowers admins, staff, and patients with a centralized digital hub to streamline appointments, finances, and operations—no more chaos, just clarity.
          </p> */}

          {/* Main Content */}
          <main className="max-w- mx-auto px-4 py-12 space-y-12">
            {/* Introduction Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                INTRODUCTION
              </h2>
<p className="text-gray-300 leading-relaxed">
STS is a comprehensive system for hotel bookings and issuing international drive licenses. 
</p>
<p className="text-gray-300 leading-relaxed pt-4">
The system includes over 1.4 million hotels worldwide, providing a wide range of options for travelers.

</p>
              
            </section>

            {/* Key Features Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Features of the System:

              </h2>
              <ol className="space-y-6 text-gray-300 list-decimal pl-5">
                <li>
                Issuance of International drive Licenses: Includes two types of licenses (10-year validity / 1-year validity).

                </li>
                <li>
                B2B Policy: Targets tourism and travel companies, facilitating efficient management of their bookings.
                </li>
                <li>
                Diverse Destinations: The system offers a wide variety of tourist destinations and hotels, catering to the needs of the Iraqi market.
                </li>
                <li>
                Competitive Prices: Due to direct contracts with many hotels in the most desired destinations, as well as integration with global systems like ETG and E-Booking.
                </li>
                
              </ol>
            </section>

  {/* Impact & Benefits Section */}
  <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Integration with WhatsApp:
              </h2>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>
                Vouchers are sent automatically via WhatsApp.
                </li>
                <li>
                Requests for financial balance enhancement are sent.
                </li>
                <li>
                Financial statements are sent to system users.
                </li>
              </ul>
            </section>

            {/* Conclusion Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Reports and Statistics:
              </h2>
              <p className="text-gray-300 leading-relaxed">
              The system provides periodic reports and important statistics, such as:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>
                The most requested destination.
                </li>
                <li>
                The most requested hotel.
                </li>
                <li>
                The number of nights booked by destination or hotel.
                </li>
                <li>
                Revenue.
                </li>
              </ul>
            </section>

            <p className="pt-4">
            These reports help in developing work effectively and positively by monitoring developments and comparing results, which enhances the ability to make strategic decisions.
            </p>
          </main>
      </div>
    </div>
  );
};

export default HomePage;