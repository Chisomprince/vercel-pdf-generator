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
  CoursesSchema,
  CoursesSchemaType,
  CustomSectionSchemaType,
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
  institution: "",
  course: "",
  id: "",
  area: "",
  score: "",
  date: {
    startDate: "",
    endDate: "",
  },
  summary: "",
};

export function CoursesSheet() {
  const { sections, handleAddSection, updateItem, addItem } = useResumeStore();
  const { sheet, closeDrawer, service } = useModalDrawerProvider();
  const form = useForm<CoursesSchemaType>({
    resolver: zodResolver(CoursesSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: CoursesSchemaType) => {
    const id = nanoid();
    const section = "courses";
    if (section in sections) {
      if (service) {
        updateItem(section, data);
      } else {
        addItem(section, { ...data, id });
      }
    } else {
      const payload = {
        name: "Courses",
        items: [{ ...data, id }],
        type: section,
      } as resumeType["sections"]["courses"];
      handleAddSection(section, payload);
    }

    form.reset(defaultValues);
    closeDrawer();
  };

  useEffect(() => {
    if (service) {
      form.reset(service as CustomSectionSchemaType);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  const handleSheetClose = () => {
    form.reset(defaultValues);
    closeDrawer();
  };

  return (
    <Sheet open={sheet.courses.open} onOpenChange={handleSheetClose}>
      <SheetContent className="w-full  lg:min-w-[580px] overflow-scroll">
        <SheetHeader>
          <SheetTitle>Courses </SheetTitle>
          <SheetDescription>
            Provide some information about this section
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="institution" className="text-right text-gray-400">
              Institution
            </Label>
            <Input
              id="institution"
              {...form.register("institution")}
              className="bg-muted"
            />
          </div>
          <div className="">
            <Label htmlFor="course" className="text-right text-gray-400">
              Course
            </Label>
            <Input
              id="course"
              {...form.register("course")}
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
            <Label htmlFor="summary" className="text-right text-gray-400">
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
