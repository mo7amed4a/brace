"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Generic props for the DataTable component
interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  searchKey?: keyof TData | string; // Column to filter on (optional)
  defaultPageSize?: number; // Default rows per page
}

export function DataTable<TData>({
  data,
  columns,
  searchKey,
  defaultPageSize = 10,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: defaultPageSize,
  });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  return (
    <div className="w-full rounded-lg overflow-x-scroll md:overflow-hidden">
      {searchKey && (
        <div className="flex items-center py-4">
          <div className="relative w-full">
            <Input
              placeholder={`Search by ${String(searchKey)}...`}
              value={
                (table.getColumn(String(searchKey))?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn(String(searchKey))?.setFilterValue(event.target.value)
              }
              className="max-w-sm bg-black/40 border-gray-700 text-white"
            />
          </div>
        </div>
      )}
      <div className="rounded-md border border-gray-700">
        <Table>
          <TableHeader className="bg-black/40">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-gray-700 hover:bg-gray-900"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-gray-200">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-gray-700 hover:bg-gray-900"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-gray-200">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-400"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4 text-gray-200">
        <div className="text-sm">Total Records: {data.length}</div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: Math.min(5, table.getPageCount()) }).map((_, i) => (
            <Button
              key={i}
              variant={pagination.pageIndex === i ? "default" : "outline"}
              className={
                pagination.pageIndex === i
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "border-gray-700 text-gray-200 hover:bg-gray-800"
              }
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </Button>
          ))}
          {table.getPageCount() > 5 && (
            <>
              <span className="text-gray-400">...</span>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-200 hover:bg-gray-800"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              >
                {table.getPageCount()}
              </Button>
            </>
          )}
          <Button
            variant="outline"
            className="border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px] border-gray-700 bg-black text-gray-200">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent className="bg-black border-gray-700 text-gray-200">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-400">Rows</p>
        </div>
      </div>
    </div>
  );
}