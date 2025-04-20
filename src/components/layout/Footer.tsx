import React from "react";
import Logo from "./logo";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t container p-4 mx-auto border-gray-600 flex flex-col space-y-10 items-center justify-center mt-20 pt-20">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
        <Logo />
        <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-white">
          BRACE Development
        </h2>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-4">
        <Button variant={"ghost"}>How we are ?</Button>
        <Button variant={"ghost"}>Services</Button>
        <Button variant={"ghost"}>Projects</Button>
        <Button variant={"ghost"}>FAQs</Button>
      </div>
      <div className="flex justify-between text-sm w-full">
        <span>All Right Reserved For Brace Development © 2025</span>
        <div className="flex gap-2">
            <Link href="/">Terms and Conditions</Link>
            <Link href="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
