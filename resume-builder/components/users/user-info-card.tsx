"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";
import { getUserByIdType } from "@/types/models/user";
import { AvatarImage } from "@radix-ui/react-avatar";
import dayjs from "dayjs";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
type UserInfoCardProps = {
  user: getUserByIdType & {
    _count: {
      posts: number;
      accounts: number;
    };
  };
};

export default function UserInfoCard({ user }: UserInfoCardProps) {
  return (
    <Card className="divide-y mt-4">
      <CardContent className="flex py-0 gap-8 divide-x">
        <div className="flex gap-8 py-4 ">
          <div>
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.image || ""} alt="@shadcn" />
              <AvatarFallback>{getInitials(user.name || "")}</AvatarFallback>
            </Avatar>
            <div className="flex justify-center mt-4">
              <Link href={`/admin/users/${user.id}/edit`}>
                <Button variant={"link"} className="gap-1 text-blue-700">
                  <MdEdit /> Edit
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4 ">
            <div className="grid grid-cols-2 items-center">
              <p className="text-sm text-gray-600">Full Name :</p>
              <p className="text-sm">{user.name || ""}</p>
            </div>
            {/* <div className="grid grid-cols-2 items-center">
              <p className="text-sm text-gray-600">Last Name :</p>
              <p className="text-sm">ChisomcrLastma</p>
            </div> */}
            <div className="grid grid-cols-2 items-center">
              <p className="text-sm text-gray-600">Email :</p>
              <p className="text-sm">{user.email}</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p className="text-sm text-gray-600">Bio :</p>
              <p className="text-sm">{user.bio || "-"}</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p className="text-sm text-gray-600">Role :</p>
              <p className="text-sm">{user.role}</p>
            </div>
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className="space-y-4 px-8 py-4 ">
          <div className="grid grid-cols-2 items-center">
            <p className="text-sm text-gray-600">Date Created :</p>
            <p className="text-sm">
              {dayjs(user.createdAt).format("MMM, DD YYYY hh:mm:a")}
            </p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p className="text-sm text-gray-600">Last Updated :</p>
            <p className="text-sm">
              {dayjs(user.updatedAt).format("MMM, DD YYYY hh:mm:a")}
            </p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p className="text-sm text-gray-600">Email Verified :</p>
            <p className="text-sm">{user.emailVerified || "No"}</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p className="text-sm text-gray-600">Linked Account :</p>
            <p className="text-sm">{user._count.accounts}</p>
          </div>
        </div>
      </CardContent>
      <CardContent className="grid grid-cols-5 py-4">
        <div>
          <p className="text-sm">Total Resumes</p>
          <p className="text-lg">{user._count.posts}</p>
        </div>
        <div>
          <p className="text-sm">Total Payment</p>
          <p className="text-lg">-</p>
        </div>
        <div>
          <p className="text-sm">Available Tokens</p>
          <p className="text-lg">-</p>
        </div>
        <div>
          <p className="text-sm">Average Usage</p>
          <p className="text-lg">-</p>
        </div>
      </CardContent>
    </Card>
  );
}
