"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Upload } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Label } from "@/components/ui/label";
import useFetch from "@/hooks/use-fetch";
import usePost from "@/hooks/use-post";
import { toast } from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface UserType {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  user_category: string;
  is_accepted: boolean;
  profile_image: string;
}

export default function Profile() {
  const { data: session, update } = useSession();
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch("/user");
  const user: UserType = data?.user;
  const { post: updateProfile } = usePost("/user/update");
  const [submittingFields, setSubmittingFields] = useState<{ [key: string]: boolean }>({});
  const [submittingImage, setSubmittingImage] = useState(false);

  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    email: "",
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);

  useEffect(() => {
    if (session?.user) {
      const userLocal = session?.user as UserType;
      setProfileData({
        first_name: userLocal?.first_name || "",
        last_name: userLocal?.last_name || "",
        phone: userLocal?.phone || "",
        country: userLocal?.country || "",
        email: userLocal?.email || "",
      });
    }
  }, [session]);

  useEffect(() => {
    if (user) {
        update({
          ...session,
          user: { ...user },
        });
    }
  }, [refresh]);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleFieldUpdate = async (field: keyof typeof profileData) => {
    setSubmittingFields((prev) => ({ ...prev, [field]: true }));
    const formData = new FormData();
    formData.append(field, profileData[field]);

    try {
      const res = await updateProfile(formData);
      if (res.status === 200) {
        setRefresh((prev) => !prev);
        toast.success(`${field.replace("_", " ")} updated successfully`);
      }
    } catch (err) {
      console.error(`Error updating ${field}:`, err);
    } finally {
      setSubmittingFields((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleImageUpdate = async () => {
    if (!profileImage) return;

    setSubmittingImage(true);
    const formData = new FormData();
    formData.append("profile_image", profileImage);

    try {
      const res = await updateProfile(formData);
      if (res.status === 200) {
        setRefresh((prev) => !prev);
        toast.success("Profile image updated successfully");
        setProfileImage(null);
      }
    } catch (err) {
      console.error("Error updating profile image:", err);
    } finally {
      setSubmittingImage(false);
    }
  };

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
    );
  }

  if (error || !user) {
    return (
      <Card className="bg-[hsla(216,7%,14%,1)] p-4 max-w-7xl mx-auto mt-8">
        <CardContent>
          <div className="text-red-400 text-center">Error loading profile</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-[hsla(216,7%,14%,1)] p-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Link href="/dashboard/profile">
            <Button className="flex gap-2 items-center" variant={"ghost"}>
              <ArrowLeft />
              <span className="md:text-lg">Edit Profile</span>
            </Button>
          </Link>
          <Link href="/dashboard/profile" className="flex gap-2 items-center">
            <Button className="flex gap-2 items-center px-2" variant={"outline"}>
              <span className="md:text-lg">Cancel</span>
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center p-4 w-full bg-[#26292C] space-y-10 py-10">
          <div className="max-w-3xl mx-auto w-md">
            <div className="flex justify-center my-6">
              <div className="size-32 flex items-end gap-2 relative">
                <Avatar className="size-full">
                  <AvatarFallback className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    {user?.first_name?.[0]}
                    {user?.last_name?.[0]}
                  </AvatarFallback>
                  <AvatarImage src={profileImage ? URL.createObjectURL(profileImage) : `data:image/svg+xml;base64,${user?.profile_image}` || ""} alt="Profile" />
                  <label htmlFor="profile-image" className="absolute bottom-3 right-2 z-50 bg-gray-900 rounded-full p-2 cursor-pointer">
                    <Upload className="h-5 w-5 text-primary" />
                    <input id="profile-image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                  </label>
                </Avatar>
                {profileImage && (
                  <Button
                    onClick={handleImageUpdate}
                    className="mt-4 bg-primary hover:bg-orange-600 text-white"
                    disabled={submittingImage}
                  >
                    {submittingImage ? "Saving..." : "Update Image"}
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {Object.keys(profileData).map((field) => (
                <div key={field} className="space-y-2">
                  <Label htmlFor={field} className="flex items-center">
                    <span className="text-red-500 mr-1">*</span>
                    {field.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      value={profileData[field as keyof typeof profileData]}
                      onChange={handleChange}
                      required
                      className="bg-gray-900 text-white border-0"
                    />
                    <Button
                      onClick={() => handleFieldUpdate(field as keyof typeof profileData)}
                      className="bg-primary hover:bg-orange-600 text-white"
                      disabled={submittingFields[field]}
                    >
                      {submittingFields[field] ? "Saving..." : "Update"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4" />
            <Link href="/dashboard/profile/edit/password" className="text-primary hover:underline">
              Change password ?
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}