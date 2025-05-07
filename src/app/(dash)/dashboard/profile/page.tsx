"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import useFetch from "@/hooks/use-fetch"
import { UserType } from "@/lib/authOptions"
import { ArrowLeft, Edit, MapPin, Phone, Mail, User, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function Profile() {
  const { data, loading, error } = useFetch("/user")
  const user: UserType = data?.user

  if (loading) {
    return (
      <Card className="bg-[hsla(216,7%,14%,1)] p-4 max-w-7xl mx-auto mt-8">
        <CardHeader>
          <Skeleton className="h-10 w-40" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-20 w-20 rounded-full" />
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-4 w-64" />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !user) {
    return (
      <Card className="bg-[hsla(216,7%,14%,1)] p-4 max-w-7xl mx-auto mt-8">
        <CardContent>
          <div className="text-red-400 text-center">Error loading profile</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-[hsla(216,7%,14%,1)] p-4 px-0 max-w-7xl mx-auto mt-8 rounded-xl shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Link href="/dashboard">
            <Button className="flex gap-2 items-center text-white hover:bg-gray-700" variant="ghost">
              <ArrowLeft className="h-5 w-5" />
              <span className="md:text-lg font-semibold">Back</span>
            </Button>
          </Link>
          <Link href="/dashboard/profile/edit">
            <Button className="flex gap-2 items-center " variant="outline">
              <Edit className="h-5 w-5" />
              <span className="md:text-lg">Edit Profile</span>
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="">
        <div className="flex flex-col items-center justify-center bg-[#26292C] p-6 rounded-lg space-y-6">
          <Avatar className="size-24 flex items-center justify-center border-4 border-blue-500/20">
            <AvatarFallback className="bg-gray-600 text-white text-xl uppercase">
              {user?.first_name?.charAt(0)}
              {user?.last_name?.charAt(0)}
            </AvatarFallback>
            <AvatarImage src={`data:image/svg+xml;base64,${user?.profile_image}`} alt={`${user.name}'s profile`} />
          </Avatar>
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-2xl font-bold text-white">
                {user.first_name} {user.last_name}
              </h2>
              <small className="text-sm text-gray-400">({user.user_category})</small>
            </div>
            <p className="text-gray-400 text-sm">ID: {user.id}</p>
          </div>
          <div className="w-full space-y-4 max-w-xs mx-auto">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>{user.country}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <User className="h-5 w-5 text-blue-400" />
              <span>Full Name: {user.name}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              {user.is_accepted ? (
                <CheckCircle className="h-5 w-5 text-green-400" />
              ) : (
                <XCircle className="h-5 w-5 text-red-400" />
              )}
              <span>Status: {user.is_accepted ? "Accepted" : "Pending"}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}