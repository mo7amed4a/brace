"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { useParams } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import Link from "next/link";

export default function ProfilePage() {
  const id = useParams().id;
  const { data } = useFetch(`/users/${id}`);
  const user = data?.user as any;

  return (
    user && (
      <Card className="bg-[hsla(216,7%,14%,1)] p-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button className="flex gap-2 items-center" variant={"ghost"}>
              <ArrowLeft />
              <span className="md:text-lg">User profile</span>
            </Button>
            <div className="flex space-x-2">
              <Link href={`/dashboard/users/${id}/edit`}>
                <Button variant="ghost" size="icon">
                  <Edit className="h-5 w-5" />
                </Button>
              </Link>
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
                <AvatarImage src={`${user?.image_url}`} alt="Profile Picture" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="text-sm ">
                  {user.first_name} {user.last_name}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-sm ">{user.email}</p>
              </div>
            </div>

            {/* User Info */}
            <div>
              <p className="text-sm text-muted-foreground">Username</p>
              <p className="text-sm ">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-sm ">{user.phone}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">User category</p>
              <p className="text-sm ">{user.user_category}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">country</p>
              <p className="text-sm ">{user.country}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Is accepted</p>
              <p className="text-sm ">{user.is_accepted? "Accepted" : "Rejected"}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  );
}
