"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { motion } from 'framer-motion';

export default function ContactSection() {
  const Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={Variants}
    className="max-w-6xl mx-auto w-full">
      <div className="flex flex-col items-center gap-4 py-10">
        <h2 className="text-3xl font-bold text-start">Contact us</h2>
        <p className="text-center lg:w-3/4 mx-auto">
          Service description example To buy a plot to build your house, this
          requires documenting the sale and purchase process in the notarial
          offices or notary services to register the property in your name.
        </p>
      </div>
      <ContactForm />
    </motion.div>
  );
}
