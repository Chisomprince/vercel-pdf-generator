"use client";

import { Post, User } from "@prisma/client";
import dayjs from "dayjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DataTableRowActions } from "./user-table-actions";

type DataTableProps = {
  users: (Pick<
    User,
    "id" | "email" | "name" | "emailVerified" | "bio" | "createdAt"
  > & { posts: Post[] })[];
};

export function DataTable({ users }: DataTableProps) {
  return (
    <div className="space-y-4 mt-4">
      {/* <DataTableToolbar table={table} /> */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email Address</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Email Verified</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Resumes</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="py-2">{user.email}</TableCell>
                <TableCell className="py-2">{user.name}</TableCell>
                <TableCell className="py-2">
                  {user.emailVerified || "NO"}
                </TableCell>
                <TableCell className="py-2">
                  {dayjs(user.createdAt).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell className="py-2">{user.posts.length}</TableCell>
                <TableCell className="py-2">
                  <DataTableRowActions id={user.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <DataTablePagination table={table} /> */}
    </div>
  );
}
