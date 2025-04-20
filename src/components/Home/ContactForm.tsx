"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {/* First Name */}
        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-1 text-sm">
            <span className="text-red-500 mr-1">*</span>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Type your first name"
            required
            className="bg-[#1a1a1a] text-gray-300 p-4 rounded-md w-full"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-1 text-sm">
            <span className="text-red-500 mr-1">*</span>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Type your last name"
            required
            className="bg-[#1a1a1a] text-gray-300 p-4 rounded-md w-full"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm">
            <span className="text-red-500 mr-1">*</span>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Type your first name"
            required
            className="bg-[#1a1a1a] text-gray-300 p-4 rounded-md w-full"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-sm">
            <span className="text-red-500 mr-1">*</span>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="00 000 0000"
            required
            className="bg-[#1a1a1a] text-gray-300 p-4 rounded-md w-full"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col mt-4">
        <label htmlFor="subject" className="mb-1 text-sm">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Type your subject"
          className="bg-[#1a1a1a] text-gray-300 p-4 rounded-md w-full"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col mt-4">
        <label htmlFor="message" className="mb-1 text-sm">
          How Can We Help?
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Placeholder text"
          rows={6}
          className="bg-[#1a1a1a] text-gray-300 p-4 rounded-md w-full resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-[#1a1a1a] text-white py-3 px-12 rounded-md hover:bg-[#2a2a2a] transition-colors shadow-md"
        >
          Send
        </button>
      </div>
    </form>
  )
}
