"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Save } from "lucide-react";
import usePost from "@/hooks/use-post";
import useFetch from "@/hooks/use-fetch";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditUserPage() {
  const { id } = useParams();
  const router = useRouter();

  // Fetch user data
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch(`/users/${id}`);
  const user = data?.user;

  // State for form Input className="mt-3" s
  const [formData, setFormData] = useState({
    user_id: Number(id), // Required field
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    email: "",
    user_category: "",
    new_password: "",
  });

  // Initialize form data with fetched user data
  useEffect(() => {
    if (user) {
      setFormData({
        user_id: Number(id),
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        phone: user.phone || "",
        country: user.country || "",
        email: user.email || "",
        user_category: user.user_category || "",
        new_password: "",
      });
    }
  }, [user, id]);

  // Use the usePost hook to handle the update request
  const {
    post,
    loading: postLoading,
    error: postError,
    data: postData,
  } = usePost("/users/update");

  // Handle form Input className="mt-3"  changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Filter out empty fields and unchanged fields to only send updated values
    const payload = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => {
        if (key === "user_id") return true; // Always include user_id
        if (key === "new_password") return value !== ""; // Include new_password only if provided
        return value !== "" && value !== user?.[key]; // Include changed fields
      })
    );

    try {
      await post(payload);
      if (!postError) {
        toast.success("User updated successfully!");
        router.push(`/dashboard/users/${id}`); // Redirect to profile page
      }
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // Show loading state while fetching user data
  if (fetchLoading) {
    return <div>Loading user data...</div>;
  }

  // Show error state if fetching fails
  if (fetchError) {
    return <div>Error loading user data: {fetchError.message}</div>;
  }

  return (
    <Card className="bg-[hsla(216,7%,14%,1)] p-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button className="flex gap-2 items-center" variant={"ghost"} asChild>
            <Link href={`/dashboard/users/${id}`}>
              <ArrowLeft />
              <span className="md:text-lg">Back to Profile</span>
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="first_name">First Name</Label>
            <Input
              className="mt-3"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter first name"
            />
          </div>
          <div>
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              className="mt-3"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Enter last name"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              className="mt-3"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input
              className="mt-3"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter country"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              className="mt-3"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div>
            <Label htmlFor="user_category">User Category</Label>
            <Select
              name="user_category"
              value={formData?.user_category}
              onValueChange={(value) =>
                handleSelectChange(value, "user_category")
              }
            >
              <SelectTrigger className="mt-3">
                <SelectValue placeholder="Select user category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">developer</SelectItem>
                <SelectItem value="admin">admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* <div>
            <Label htmlFor="user_category">User Category</Label>
            <Input className="mt-3" 
              id="user_category"
              name="user_category"
              value={formData.user_category}
              onChange={handleChange}
              placeholder="Enter user category (admin/developer)"
            />
          </div> */}
          <div>
            <Label htmlFor="new_password">New Password</Label>
            <Input
              className="mt-3"
              id="new_password"
              name="new_password"
              type="password"
              value={formData.new_password}
              onChange={handleChange}
              placeholder="Enter new password"
            />
          </div>

          {postError && (
            <p className="text-red-500 text-sm">
              Error: {postError.message || "Failed to update user"}
            </p>
          )}
          {postData && (
            <p className="text-green-500 text-sm">User updated successfully!</p>
          )}

          <Button
            type="submit"
            disabled={postLoading || fetchLoading}
            className="flex gap-2"
          >
            <Save />
            {postLoading ? "Updating..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
