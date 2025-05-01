"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Profile() {

  return (
   <Card className="bg-[hsla(216,7%,14%,1)] p-4">
    <CardHeader>
      <div className="flex justify-between items-center">
        <Button className="flex gap-2 items-center" variant={"ghost"}>
          <ArrowLeft /> 
          <span className="md:text-lg">Profile</span>
        </Button>
       <Link href={"/dashboard/profile/edit"}>
            <Button className="flex gap-2 items-center" variant={"outline"}>
                <span className="md:text-lg">Edit</span>
            </Button>
       </Link>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center justify-center p-4 bg-[#26292C] space-y-10">
            <div className="h-[50vh] flex items-center justify-center">
                <div className="p-4 rounded flex flex-col space-y-4 justify-center items-center ">
                    <div className="rounded-full bg-gray-900 p-3">
                        <Avatar className="size-20 flex items-center justify-center">
                            <AvatarFallback className="opacity-70">
                            <svg width={60} height={61} viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.2133 9.75449C45.547 4.08848 38.0132 0.967773 30 0.967773C21.9868 0.967773 14.453 4.08836 8.78672 9.75449C3.1207 15.4207 0 22.9546 0 30.9678C0 38.9809 3.12059 46.5148 8.78672 52.1811C14.453 57.8471 21.9868 60.9678 30 60.9678C38.0132 60.9678 45.547 57.8472 51.2133 52.1811C56.8793 46.5148 60 38.9809 60 30.9678C60 22.9546 56.8794 15.4207 51.2133 9.75449ZM13.0201 51.276C14.0108 42.7524 21.3391 36.1717 30 36.1717C34.5656 36.1717 38.8591 37.9505 42.0886 41.1796C44.8168 43.9083 46.5376 47.4711 46.9802 51.2755C42.3798 55.1286 36.4563 57.4521 30 57.4521C23.5437 57.4521 17.6207 55.129 13.0201 51.276ZM30 32.5506C24.9761 32.5506 20.8882 28.4629 20.8882 23.4389C20.8882 18.4145 24.9762 14.3271 30 14.3271C35.0238 14.3271 39.1118 18.4145 39.1118 23.4389C39.1118 28.4629 35.0239 32.5507 30 32.5507V32.5506ZM50.0061 48.3038C49.1028 44.6663 47.2249 41.3438 44.5743 38.6939C42.4137 36.5332 39.8575 34.9123 37.0697 33.8965C40.421 31.6238 42.6274 27.784 42.6274 23.4389C42.6274 16.4764 36.9626 10.8115 30 10.8115C23.0374 10.8115 17.3726 16.4764 17.3726 23.4389C17.3726 27.7864 19.5809 31.6274 22.9349 33.8998C20.37 34.8345 17.9966 36.2797 15.9545 38.1821C12.9973 40.936 10.9438 44.4475 9.99164 48.301C5.95922 43.6524 3.51562 37.5903 3.51562 30.9678C3.51562 16.3642 15.3964 4.4834 30 4.4834C44.6036 4.4834 56.4844 16.3642 56.4844 30.9678C56.4844 37.5916 54.0398 43.6552 50.0061 48.3038Z" fill="white" />
                            </svg>
                            </AvatarFallback>
                            <AvatarImage src=""/>
                       </Avatar> 
                    </div>
                    <span className="flex gap-2 items-center">
                        <span className="text-lg md:text-xl font-bold">Ahmed alhmdany</span>
                        <small className="text-xs text-gray-400">(Adminstor)</small>
                    </span>
                    <div className="text-gray-400">Ahmed.Alhmdany2025@Bras.com</div>
                    <div className="text-gray-400">010123456789</div>
                </div>
            </div>
      </div>
    </CardContent>
   </Card>
  )
}
