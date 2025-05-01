"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, Trash2 } from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: "Ahmed Khaled",
    username: "ahmad_ahmad",
    phone: "+201023544423",
    email: "mohamed25@gmail.com",
    avatar: "https://example.com/avatar.jpg", // Replace with your image URL
  };

  return (
    <Card className="bg-[hsla(216,7%,14%,1)] p-4">
    <CardHeader>
      <div className="flex items-center justify-between">
        <Button className="flex gap-2 items-center" variant={"ghost"}>
          <ArrowLeft /> 
          <span className="md:text-lg">User profile</span>
        </Button>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Send className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="grid lg:grid-cols-3 gap-3 items-center">
       <div className="space-y-3 py-4">

          <Avatar className="h-24 w-24 md:h-32 md:w-32 mx-auto md:mx-0">
            <AvatarImage src={user.avatar} alt="Profile Picture" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="text-sm ">{user.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-sm ">{user.email}</p>
            </div>
       </div>

          {/* User Info */}
            <div>
              <p className="text-sm text-muted-foreground">Username</p>
              <p className="text-sm ">{user.username}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-sm ">{user.phone}</p>
            </div>
      </div>
    </CardContent>
   </Card>
  );
}


