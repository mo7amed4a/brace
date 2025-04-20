import React from "react";
import Logo from "../layout/logo";
// import ShapeSide from "../layout/ShapeSide";

export default function Hero() {
  return (
    <div className="relative overflow-x-hidden flex justify-center py-32 flex-col space-y-16 bg-gradient-to-t from-[#241F29] to-[#3E271E]">
      <div className="flex gap-2 items-center justify-center">
        <Logo />
        <h2 className="font-bold text-3xl lg:text-4xl text-white">
          BRACE Development
        </h2>
      </div>
      <div className="text-4xl font-bold lg:text-5xl text-center lg:w-3/4 mx-auto">
        full service development team for non-techincal founders
      </div>
      <div className="text-lg lg:text-xl text-center lg:w-3/4 mx-auto">
        get a technical team with extensive experience in product design and
        development
      </div>

      <div className="scroll-parent md:max-w-2/4 mx-auto overflow-hidden gap-x-10">
        <div className="scroll-element primary flex justify-around">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
        </div>
        <div className="scroll-element secondary flex justify-around">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">dlm </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <div className="w-72 p-2 mx-auto border rounded-md">
          Lets talk about your New Project 👋
        </div>
      </div>
      {/* <ShapeSide className="absolute -top-10 z-[55454554545] end-0 -me-20 h-28 w-52 rotate-90"/> */}
    </div>
  );
}
