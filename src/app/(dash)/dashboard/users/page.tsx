"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { UsersDataTable } from "@/components/tables/users-data-table"

export default function Users() {

  return (
   <Card className="bg-[hsla(216,7%,14%,1)]">
    <CardHeader>
      <div>
        <Button className="flex gap-2 items-center" variant={"ghost"}>
          <ArrowLeft /> 
          <span className="md:text-lg">Users Management</span>
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center justify-center space-y-10">
        <UsersDataTable />
      </div>
    </CardContent>
   </Card>
  )
}
