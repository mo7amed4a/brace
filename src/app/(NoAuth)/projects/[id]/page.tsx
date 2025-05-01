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
              <p className="text-center md:text-start text-gray-400 text-lg md:text-xl">The Rayan application is designed to empower sales representatives by streamlining their daily tasks, making their workflow not only easier but also significantly faster. This all-in-one platform acts as a robust tool that facilitates the management of customer data, simplifies the invoicing process, and provides real-time inventory tracking.</p>
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
                The Rayan application aims to enable sales representatives to
                perform their tasks easily and quickly. It serves as a comprehensive
                tool that assists in managing customer data, issuing invoices, and
                monitoring inventory. The Rayan application aims to enable sales
                representatives to perform their tasks easily and quickly. It serves
                as a comprehensive tool that assists in managing customer data,
                issuing invoices, and monitoring inventory. The Rayan application
                aims to enable sales representatives to perform their tasks easily
                and quickly. It serves as a comprehensive tool that assists in
                managing customer data, issuing invoices, and monitoring inventory.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                <span className="font-bold">HOW IT WORKS?</span> The Rayan
                application aims to enable sales representatives to perform their
                tasks easily and quickly. It serves as a comprehensive tool that
                assists in managing customer data, issuing invoices, and monitoring
                inventory.
              </p>
            </section>

            {/* Key Features Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                KEY FEATURES
              </h2>
              <ol className="space-y-6 text-gray-300 list-decimal pl-5">
                <li>
                  <span className="font-bold">
                    CLIENT & INVOICE MANAGEMENT:
                  </span>{" "}
                  Sales representatives can effortlessly add and manage client
                  profiles, track interactions, and generate detailed invoices in
                  real time. The system automates calculations, ensures accuracy,
                  and stores historical data for quick reference, simplifying
                  follow-ups and financial reporting.
                </li>
                <li>
                  <span className="font-bold">
                    REAL-TIME CART & INVENTORY TRACKING:
                  </span>{" "}
                  Gain instant visibility into product availability and cart
                  contents to avoid over-selling or stockouts. The platform syncs
                  with inventory databases, providing live updates on stock levels,
                  and allows representatives to reserve items directly during
                  negotiations.
                </li>
                <li>
                  <span className="font-bold">
                    PAYMENT & RECEIPT VOUCHERS:
                  </span>{" "}
                  Digitize financial workflows by creating, submitting, and tracking
                  payment and receipt vouchers within the platform. This feature
                  reduces errors, accelerates approval processes, and maintains a
                  transparent audit trail for all transactions.
                </li>
                <li>
                  <span className="font-bold">
                    CENTRALIZED COMMUNICATION HUB:
                  </span>{" "}
                  Replace fragmented communication channels with a unified hub for
                  internal team collaboration and client interactions. Share updates,
                  documents, and notifications instantly, minimizing delays and
                  ensuring everyone stays aligned.
                </li>
              </ol>
            </section>

            {/* Impact & Benefits Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                IMPACT & BENEFITS
              </h2>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>
                  <span className="font-bold">Reduced Paperwork:</span> Digitize
                  80% of manual tasks, from invoicing to voucher management.
                </li>
                <li>
                  <span className="font-bold">Enhanced Accuracy:</span> Automated
                  calculations and centralized data minimize human error.
                </li>
                <li>
                  <span className="font-bold">Real-Time Decision-Making:</span>{" "}
                  Access up-to-date inventory and client data anytime, anywhere.
                </li>
                <li>
                  <span className="font-bold">Improved Accountability:</span> Track
                  every action and transaction for full transparency.
                </li>
              </ul>
            </section>

            {/* Conclusion Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                CONCLUSION
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The Al Rayan Sales Representatives Platform by Brace redefines
                efficiency for sales teams, merging intuitive design with powerful
                functionality. By embracing digital transformation, Brace ensures
                businesses stay agile, competitive, and customer-centric in a
                fast-paced market.
              </p>
            </section>

            {/* Call to Action Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                READY TO TRANSFORM YOUR SALES WORKFLOW?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Experience the Rayan Platform firsthand and discover how it can
                revolutionize your team’s efficiency, accuracy, and client
                engagement. Whether streamlining invoicing, mastering inventory, or
                digitizing financial workflows, Brace’s solution is tailored to
                elevate your operations.
              </p>
              {/* ShadCN Button for CTA */}
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold py-3 px-6 rounded-full">
                <span className="mr-2">⚡</span> Request a Demo Today
              </Button>
            </section>

            {/* Footer Banner */}
            <div className="bg-gray-900 text-center py-4 rounded-lg">
              <p className="text-lg font-semibold">
                SEE HOW AL RAYAN CAN BOOST YOUR SALES PRODUCTIVITY IN JUST 30
                MINUTES!
              </p>
              <Button className="mt-4 bg-gray-800 text-white hover:bg-gray-700 py-2 px-6 rounded-full">
                Request a Demo
              </Button>
            </div>
          </main>
      </div>
    </div>
  );
};

export default HomePage;