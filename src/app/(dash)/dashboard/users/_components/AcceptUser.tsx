"use client";
import { Button } from "@/components/ui/button";
import usePost from "@/hooks/use-post";
import { Loader, Send } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

export default function AcceptUser({ id , accept, setRefresh}: { id: string, accept: boolean, setRefresh: React.Dispatch<React.SetStateAction<boolean>>}) {
  const {
    post,
    loading,
  } = usePost("/users/accept");

  const handleAccept = async () => {
    try {
      const res = await post({
        user_id: id,
        accept: !accept,
      });
      if (res.status === 200) {
        toast.success(`User ${!accept ? "accepted" : "rejected"} successfully`);
        setRefresh(prev => !prev)
      }
    } catch {
      toast.error(`Error ${!accept ? "accepted" : "rejected"} user`);
    }
  };
  return (
    <Button onClick={handleAccept} variant="ghost" size="icon">
      {!loading ? <Send className="h-4 w-4" />
      : <Loader className="animate-spin"/>}
    </Button>
  );
}
