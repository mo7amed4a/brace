import { DataTable } from "./DataTable"; // Adjust path
import { Send, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

// Define the User type
type User = {
  id: string;
  name: string;
  email: string;
  mobileNumber: string;
};

// Sample data
const userData: User[] = [
  {
    id: "1",
    name: "Kamal Mohamed",
    email: "Kamal.Mo6@Gmail.Com",
    mobileNumber: "+201023544423",
  },
  // ... other users
];

// Define columns
const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobileNumber",
    header: "Mobile Number",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex items-center justify-end space-x-2">
        <Button variant="ghost" size="icon">
          <Send className="h-4 w-4" />
        </Button>
        <Link href={`/dashboard/users/${row.getValue("name")}`}>
          <Button variant="ghost" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
        </Link>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

export function UsersTable() {
  return (
    <DataTable
      data={userData}
      columns={userColumns}
      searchKey="name"
      defaultPageSize={10}
    />
  );
}