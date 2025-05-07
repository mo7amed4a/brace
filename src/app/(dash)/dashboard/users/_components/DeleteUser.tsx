"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import usePost from "@/hooks/use-post"
import { Loader, Trash2 } from "lucide-react"
import type React from "react"
import { useState } from "react"
import toast from "react-hot-toast"

export default function DeleteUser({
  id,
  setRefresh,
}: { id: string; setRefresh: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [open, setOpen] = useState(false)
  const { post, loading } = usePost("/users/delete")

  const handleDelete = async () => {
    try {
      const res = await post({
        user_id: id,
      })
      if (res.status === 200) {
        toast.success(`User deleted successfully`)
        setRefresh((prev) => !prev)
        setOpen(false)
      }
    } catch {
      toast.error(`Error deleting user`)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={loading}>
            {loading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
