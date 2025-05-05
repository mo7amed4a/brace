import React from "react";
import Logo from "../layout/logo";

export default function SectionTwo() {
  return (
    <div className="h-[50vh] relative flex items-center justify-center p-4 pt-20" id="how-we-are">
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{backgroundImage: "url(/images/background.png)"}}></div>
      <div className="flex justify-center flex-col space-y-16">
        <div className="flex gap-2 items-center justify-center">
          <Logo />
          <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-white">
            BRACE Development
          </h2>
        </div>
        <div className="text-center lg:w-3/4 mx-auto">
          It is a software specializing in creating Applications and Systems related to the tourism sector, as a result of accumulated experience for more than 15 years. We work on providing technological solutions for all tourism specialties ( Flight reservations, Visa issuance, Hotels management, Transfer, Car Rentals, General and Private Tourist Groups), and other services according to the needs of the Target Audience.
        </div> 
      </div>
    </div>
  );
}
