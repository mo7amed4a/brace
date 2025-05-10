"use client";
import { DataTable } from "./DataTable"; // Adjust path
import { Eye, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import useFetch from "@/hooks/use-fetch";
import AcceptUser from "@/app/(dash)/dashboard/users/_components/AcceptUser";
import { useState } from "react";
import DeleteUser from "@/app/(dash)/dashboard/users/_components/DeleteUser";

// Define the User type
export type Project = {
  id: string;
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  country: string;
  user_category: string;
  is_accepted: boolean;
};



export function ProjectsTable() {
  const [refresh, setRefresh] = useState(false)
  const { data, loading } = useFetch("/users/list", refresh);  

  const userColumns: ColumnDef<Project>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "first_name",
      header: "First Name",
    },
    {
      accessorKey: "last_name",
      header: "Last Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      accessorKey: "user_category",
      header: "User Category",
    },
    {
      accessorKey: "is_accepted",
      header: "Accepted",
      cell: (info) => info.getValue() ? "Yes" : "No",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center justify-end space-x-2">
          <AcceptUser id={row.getValue("id")} setRefresh={setRefresh} accept={row.getValue("is_accepted")}/>
          <Link href={`/dashboard/users/${row.getValue("id")}`}>
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={`/dashboard/users/${row.getValue("id")}/edit`}>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </Link>
          <DeleteUser id={row.getValue("id")} setRefresh={setRefresh} />
        </div>
      ),
    },
  ];

  return (
    <DataTable
      data={data?.users || []}
      columns={userColumns}
      searchKey="name"
      defaultPageSize={10}
      loading={loading}
    />
  );
}
