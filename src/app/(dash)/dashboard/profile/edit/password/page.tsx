"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import usePost from "@/hooks/use-post"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"
import { z } from "zod"

// Zod schema for validation
const passwordSchema = z.object({
  old_password: z.string().min(1, "Old password is required"),
  new_password: z
    .string()
    .min(8, "New password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirm_password: z.string().min(1, "Please confirm your new password"),
}).refine((data) => data.new_password === data.confirm_password, {
  message: "New password and confirmation do not match",
  path: ["confirm_password"],
})

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  })
  const [errors, setErrors] = useState<z.ZodError | null>(null)
  const [showPasswords, setShowPasswords] = useState({
    old_password: false,
    new_password: false,
    confirm_password: false,
  })
  const { post: changePassword, loading: isSubmitting, error: apiError } = usePost("/user/change_password")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setErrors(null)
  }

  const toggleShowPassword = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors(null)

    // Validate with Zod
    const validation = passwordSchema.safeParse(formData)
    if (!validation.success) {
      setErrors(validation.error)
      return
    }

    try {
      const res = await changePassword({
        old_password: formData.old_password,
        new_password: formData.new_password,
        confirm_password: formData.confirm_password,
      })
      if (res.status === 200) {
        toast.success("Password changed successfully")
        setFormData({
          old_password: "",
          new_password: "",
          confirm_password: "",
        })
      }
    } catch {
      setErrors(new z.ZodError([{
        code: "custom",
        message: "Failed to change password. Please check your old password.",
        path: ["old_password"],
      }]))
    }
  }

  return (
    <Card className="bg-[hsla(216,7%,14%,1)] p-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Link href="/dashboard/profile/edit">
            <Button className="flex gap-2 items-center" variant={"ghost"}>
              <ArrowLeft />
              <span className="md:text-lg">Change Password</span>
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl py-10 mx-auto">
          <div className="space-y-2">
            <Label htmlFor="old_password" className="flex items-center">
              <span className="text-red-500 mr-1">*</span>
              Old Password
            </Label>
            <div className="relative">
              <Input
                id="old_password"
                name="old_password"
                type={showPasswords.old_password ? "text" : "password"}
                value={formData.old_password}
                onChange={handleChange}
                required
                className="bg-gray-900 text-white border-0 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => toggleShowPassword("old_password")}
              >
                {showPasswords.old_password ? <EyeOff size={20} /> : <Eye size={20} />}
              </Button>
            </div>
            {errors?.issues.find((e) => e.path[0] === "old_password") && (
              <p className="text-red-500 text-sm">
                {errors.issues.find((e) => e.path[0] === "old_password")?.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="new_password" className="flex items-center">
              <span className="text-red-500 mr-1">*</span>
              New Password
            </Label>
            <div className="relative">
              <Input
                id="new_password"
                name="new_password"
                type={showPasswords.new_password ? "text" : "password"}
                value={formData.new_password}
                onChange={handleChange}
                required
                className="bg-gray-900 text-white border-0 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => toggleShowPassword("new_password")}
              >
                {showPasswords.new_password ? <EyeOff size={20} /> : <Eye size={20} />}
              </Button>
            </div>
            {errors?.issues.find((e) => e.path[0] === "new_password") && (
              <p className="text-red-500 text-sm">
                {errors.issues.find((e) => e.path[0] === "new_password")?.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm_password" className="flex items-center">
              <span className="text-red-500 mr-1">*</span>
              Confirm New Password
            </Label>
            <div className="relative">
              <Input
                id="confirm_password"
                name="confirm_password"
                type={showPasswords.confirm_password ? "text" : "password"}
                value={formData.confirm_password}
                onChange={handleChange}
                required
                className="bg-gray-900 text-white border-0 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => toggleShowPassword("confirm_password")}
              >
                {showPasswords.confirm_password ? <EyeOff size={20} /> : <Eye size={20} />}
              </Button>
            </div>
            {errors?.issues.find((e) => e.path[0] === "confirm_password") && (
              <p className="text-red-500 text-sm">
                {errors.issues.find((e) => e.path[0] === "confirm_password")?.message}
              </p>
            )}
          </div>

          {apiError && (
            <div className="text-red-500">
              {apiError.message}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Changing..." : "Change Password"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}