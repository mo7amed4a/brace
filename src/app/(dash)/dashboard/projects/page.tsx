"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { ProjectsTable } from "@/components/tables/ProjectsTable"
import Link from "next/link"

export default function Users() {
  return (
   <Card className="bg-[hsla(216,7%,14%,1)]">
    <CardHeader>
      <div className="w-full flex items-center justify-between">
        <Button className="flex gap-2 items-center" variant={"ghost"}>
          <ArrowLeft /> 
          <span className="md:text-lg">Projects</span>
        </Button>
        <Link href="/dashboard/projects/add">
        New
        </Link>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center justify-center space-y-10 ">
        <ProjectsTable />
      </div>
    </CardContent>
   </Card>
  )
}
