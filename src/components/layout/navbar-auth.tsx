"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Bell } from "lucide-react"
import Logo from "./logo"
import useFetch from "@/hooks/use-fetch"
import { UserDropdown } from "./user-dropdown"
import { UserType } from "@/lib/authOptions"

export default function NavbarAuth() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {data} = useFetch("/user")
  const user: UserType = data?.user
    
  return (
    <header className=" text-white w-full sticky top-0 z-50">
      <div className="container mx-auto bg-[#1a1a1a] rounded-full max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center">
          <div className="text-[#f16722] mr-2">
            <Logo className="!size-6" />
          </div>
          <h1 className="text-lg font-bold">BRACE Development</h1>
        </Link>


        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-6">
          <button className="p-2 rounded-full hover:bg-[#f16722]/10 transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <UserDropdown user={user}/>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#333333] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="#how-we-are"
              className="text-[#cccccc] hover:text-white py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How we are ?
            </Link>
            <Link
              href="#services"
              className="text-[#cccccc] hover:text-white py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-[#cccccc] hover:text-white py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#faqs"
              className="text-[#cccccc] hover:text-white py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <div className="flex flex-col space-y-4 pt-4 border-t border-[#333333]">
              <Link
                href="#start-project"
                className="bg-transparent hover:bg-[#f16722]/10 text-white border border-[#cccccc] rounded-full px-6 py-2 text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
