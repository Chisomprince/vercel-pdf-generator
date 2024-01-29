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
  EducationSchema,
  SkillsSchemaType,
  resumeType,
} from "@/lib/validations/resume-schema";
import { useModalDrawerProvider } from "@/providers/modal-drawer-provider";
import { useResumeStore } from "@/providers/resume-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsCheck } from "react-icons/bs";
import TiptapEditor from "../tiptap-editor/tiptap-editor";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
const defaultValues = {
  institution: "",
  degree: "",
  id: "",
  area: "",
  score: "",
  date: {
    startDate: "",
    endDate: "",
  },
  url: "",
  summary: "",
  courses: [],
};

export function SkillsSheet() {
  const { sections, handleAddSection, updateItem, addItem } = useResumeStore();
  const { sheet, closeDrawer, service } = useModalDrawerProvider();
  const form = useForm<SkillsSchemaType>({
    resolver: zodResolver(EducationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: SkillsSchemaType) => {
    const id = nanoid();
    const section = "skills";
    if (section in sections) {
      if (service) {
        updateItem(section, data);
      } else {
        addItem(section, { ...data, id });
      }
    } else {
      const payload = {
        name: "Skills",
        items: [{ ...data, id }],
        type: section,
      } as resumeType["sections"]["skills"];
      handleAddSection(section, payload);
    }

    form.reset(defaultValues);
    closeDrawer();
  };

  useEffect(() => {
    if (service) {
      form.reset(service as SkillsSchemaType);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  const handleSheetClose = () => {
    form.reset(defaultValues);
    closeDrawer();
  };

  return (
    <Sheet open={sheet.skills.open} onOpenChange={handleSheetClose}>
      <SheetContent className="w-full  lg:min-w-[580px] overflow-scroll">
        <SheetHeader>
          <SheetTitle>Skills </SheetTitle>
          <SheetDescription>
            Tell us about your education here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Input
              id="degree"
              placeholder={"Search"}
              type="search"
              className="bg-muted"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 10 }).map((item, i) => (
              <Badge
                key={i}
                variant="outline"
                className="gap-2 font-normal cursor-pointer hover:bg-muted"
              >
                Badge <BsCheck />
              </Badge>
            ))}
          </div>

          <Separator className="my-6" />

          <div className="">
            <Label htmlFor="username" className="text-right text-gray-400">
              My Skills
            </Label>
            <Controller
              control={form.control}
              render={({ field }) => (
                <TiptapEditor value={field.value} onChange={field.onChange} />
              )}
              name="skills"
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
