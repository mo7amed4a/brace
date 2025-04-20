import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex flex-col items-center gap-4 py-10">
        <h2 className="text-3xl font-bold text-start">Contact us</h2>
        <p className="text-center lg:w-3/4 mx-auto">
          Service description example To buy a plot to build your house, this
          requires documenting the sale and purchase process in the notarial
          offices or notary services to register the property in your name.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
