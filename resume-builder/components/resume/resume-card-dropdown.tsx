"use client";

import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModalDrawerProvider } from "@/providers/modal-drawer-provider";
import { useResumeStore } from "@/providers/resume-provider";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";

type ResumeCardDropdown = {
  data: any;
  section: string;
};

export function ResumeCardDropdown({ data, section }: ResumeCardDropdown) {
  const { toggleSheet } = useModalDrawerProvider();
  const { deleteItem } = useResumeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <HiDotsHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 " forceMount>
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="text-sm p-4 py-1 flex items-center gap-1 cursor-pointer"
            onClick={() => toggleSheet(section, data)}
          >
            <MdEdit className="text-orange-500" /> Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-sm p-4 py-1 flex items-center gap-1  cursor-pointer"
            onClick={() => deleteItem(section, data.id)}
          >
            <MdDelete className="text-orange-500" /> Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
