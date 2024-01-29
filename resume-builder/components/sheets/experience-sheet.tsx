import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  WorkExperienceSchema,
  WorkExperienceType,
  resumeType,
} from "@/lib/validations/resume-schema";
import { useModalDrawerProvider } from "@/providers/modal-drawer-provider";
import { useResumeStore } from "@/providers/resume-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import TiptapEditor from "../tiptap-editor/tiptap-editor";

const defaultValues = {
  title: "",
  company: "",
  id: "",
  date: {
    startDate: "",
    endDate: "",
  },
  city: "",
  summary: "",
};
export function ExperienceSheet() {
  const { sections, handleAddSection, updateItem, addItem } = useResumeStore();
  const { sheet, toggleSheet, closeDrawer, service } = useModalDrawerProvider();
  const form = useForm<WorkExperienceType>({
    resolver: zodResolver(WorkExperienceSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: WorkExperienceType) => {
    const id = nanoid();
    if ("experience" in sections) {
      if (service) {
        updateItem("experience", data);
      } else {
        addItem("experience", { ...data, id });
      }
    } else {
      const payload = {
        name: "Experience",
        items: [{ ...data, id }],
        type: "experience",
      } as resumeType["sections"]["experience"];
      handleAddSection("experience", payload);
    }

    form.reset(defaultValues);
    closeDrawer();
  };

  useEffect(() => {
    if (service) {
      form.reset(service as WorkExperienceType);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  const handleSheetClose = () => {
    form.reset(defaultValues);
    closeDrawer();
  };

  return (
    <Sheet open={sheet.experience.open} onOpenChange={handleSheetClose}>
      <SheetContent className="w-full  lg:min-w-[580px] overflow-scroll">
        <SheetHeader>
          <SheetTitle>Experience profile {service && "edit mode"}</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name" className="text-right text-gray-400">
              Title/Position
            </Label>
            <Input id="name" {...form.register("title")} className="bg-muted" />
          </div>
          <div className="">
            <Label htmlFor="ciity" className="text-right text-gray-400">
              City/Town
            </Label>
            <Input id="ciity" {...form.register("city")} className="bg-muted" />
          </div>
          <div className="">
            <Label htmlFor="company" className="text-right text-gray-400">
              Company
            </Label>
            <Input
              id="company"
              {...form.register("company")}
              className="bg-muted"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <Label htmlFor="startDate" className="text-right text-gray-400">
                Start date
              </Label>
              <Input
                id="startDate"
                {...form.register("date.startDate")}
                type="month"
                className="bg-muted"
                max={dayjs().format("YYYY-MM")}
              />
            </div>
            <div className="">
              <Label htmlFor="endDate" className="text-right text-gray-400">
                End date
              </Label>
              <Input
                id="endDate"
                {...form.register("date.endDate")}
                type="month"
                className="bg-muted"
                max={dayjs().format("YYYY-MM")}
              />
            </div>
          </div>

          <div className="">
            <Label htmlFor="username" className="text-right text-gray-400">
              Description
            </Label>
            <Controller
              control={form.control}
              render={({ field }) => (
                <TiptapEditor value={field.value} onChange={field.onChange} />
              )}
              name="summary"
              defaultValue=""
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
