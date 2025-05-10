"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { UserType } from "@/lib/authOptions";

export function UserDropdown({ user }: { user?: UserType }) {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
    router.refresh();
  };

  return user ? (
    <DropdownMenu dir="ltr">
      <DropdownMenuTrigger asChild className="bg-transparent hover:bg-transparent">
        <Button variant="ghost" className="relative h-10 w-10 md:w-auto">
          <div className="flex items-center gap-2">
            <Avatar className="size-10 lg:size-8">
              <AvatarImage
                src={`data:image/svg+xml;base64,${user?.profile_image}`}
                alt={user.name || "User"}
              />
              <AvatarFallback>
                {user?.first_name?.charAt(0)}
                {user?.last_name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:block">
              {user?.first_name + " "}
              {user?.last_name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.first_name && <p className="font-medium">
                {user?.first_name + " "}
                {user?.last_name}
            </p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/dashboard/profile"
            className="cursor-pointer flex w-full items-center"
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/settings"
            className="cursor-pointer flex w-full items-center"
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer "
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ): (
    <Link href="/auth/login" className="p-2 rounded-full hover:bg-[#f16722]/10 transition-colors">
            <User className="h-5 w-5" />
          </Link>
  );
}
