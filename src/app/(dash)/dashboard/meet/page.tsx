"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MeetingRoomContent() {
  const [meetingCode, setMeetingCode] = useState("")

  return (
   <Card className="bg-[hsla(216,7%,14%,1)] p-4">
    <CardHeader>
      <div>
        <Button className="flex gap-2 items-center" variant={"ghost"}>
          <ArrowLeft /> 
          <span className="md:text-lg">Meeting Room</span>
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center justify-center p-4 space-y-10 max-w-3xl mx-auto">
        <div className="relative h-40 w-40 md:h-52 md:w-52">
          <Image src="/dashboard/meet-1.png" alt="Meeting illustration" fill className="object-contain" />
        </div>

        <h2 className="text-center text-3xl font-bold md:text-4xl">Meeting Room</h2>

        <p className="text-center text-gray-400 md:text-lg">
          You can communicate in groups now. Enter the meeting code or link or start an instant meeting.
        </p>
        <Link  href="/dashboard/meet/mnKNJm394" className="w-full">
          <Button className="w-full rounded-lg bg-[#333333] py-6 text-white hover:bg-[#444444]" variant="ghost">
            Create New Room
          </Button>
        </Link>

        <div className="w-full space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-red-500">*</span>
            <span className="font-medium">Join meeting</span>
          </div>

          <Input
            type="text"
            placeholder="Meeting link or code"
            className="rounded-lg border-none bg-[#333333] py-6 text-white"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
          />

         <Link  href="/dashboard/meet/mnKNJm394" className="w-full">
         <Button className="w-full rounded-lg bg-[#333333] py-6 text-white hover:bg-[#444444]" variant="ghost">
            Join Meeting
          </Button>
         </Link>
        </div>
      </div>
    </CardContent>
   </Card>
  )
}
