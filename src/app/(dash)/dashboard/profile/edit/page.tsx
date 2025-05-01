"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"

import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"


export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: "Ahmed Alhmdany",
    email: "Ahmed.Alhmdany@gmail.com",
    phone: "01012345678",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Handle form submission here
    console.log("Profile updated:", profileData)

    setIsSubmitting(false)
  }

  return (
    <Card className="bg-[hsla(216,7%,14%,1)] p-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Button className="flex gap-2 items-center" variant={"ghost"}>
            <ArrowLeft />
            <span className="md:text-lg">Edit Profile</span>
          </Button>
          <div className="flex gap-2 items-center">
            <Button className="flex gap-2 items-center px-2" variant={"outline"}>
              <span className="md:text-lg">Cancel</span>
            </Button>
            <Button className="flex gap-2 items-center px-10">
              <span className="md:text-lg">Save</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center p-4 w-full bg-[#26292C] space-y-10 py-10">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto w-md">
            <div className="flex justify-center my-6">
              <div className="size-32 relative">
                <Avatar className="size-full">
                  <AvatarFallback className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  </AvatarFallback>
                    <AvatarImage
                      src="/placeholder.svg?height=160&width=160"
                      alt="Profile"
                    />
                  <div className="absolute bottom-3 right-2 z-50 bg-gray-900 rounded-full p-2 cursor-pointer">
                    <Upload className="h-5 w-5 text-orange-500" />
                  </div>
                </Avatar>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  User Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 text-white border-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profileData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 text-white border-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  Phone number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={profileData.phone}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 text-white border-0"
                />
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}

