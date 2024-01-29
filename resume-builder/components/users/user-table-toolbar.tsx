"use client";

import { Input } from "@/components/ui/input";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { priorities, statuses } from "@/data/user-table-data";
import Link from "next/link";
import { Button } from "../ui/button";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

export function DataTableToolbar() {
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          className="h-8 w-[150px] lg:w-[250px]"
        />

        <DataTableFacetedFilter
          //   column={table.getColumn("status")}
          title="Status"
          options={statuses}
        />

        <DataTableFacetedFilter
          //   column={table.getColumn("priority")}
          title="Priority"
          options={priorities}
        />

        {/* {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )} */}
      </div>

      <Link href={"/admin/users/create"}>
        <Button className="gap-2">
          <PlusCircledIcon />
          Add new user
        </Button>
      </Link>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
}
