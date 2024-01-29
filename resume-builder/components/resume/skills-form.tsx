import { SkillsSchemaType } from "@/lib/validations/resume-schema";
import { useResumeStore } from "@/providers/resume-provider";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import SkillsSearch from "./skills-search";

export default function SkillsForm() {
  const [showForm, setShowForm] = useState(false);
  const { sections, deleteItem } = useResumeStore();

  return (
    <div>
      <div className="px-6 mb-4">
        <h2 className="font-medium">Skills</h2>
        <p className="text-sm text-muted-foreground">
          Please tell us about the skills you have acquired
        </p>
      </div>

      <div className="flex flex-wrap gap-2 px-6">
        {sections?.skills?.items.map((item: SkillsSchemaType, i) => (
          <Badge
            key={item.id}
            variant="outline"
            className="gap-2 font-normal cursor-pointer hover:bg-muted"
          >
            {item.skill}
            <Button
              variant={"ghost"}
              className="p-0 h-auto"
              onClick={() => deleteItem("skills", item.id)}
            >
              <IoIosClose />
            </Button>
          </Badge>
        ))}
      </div>

      {showForm ? (
        <div className="px-6 mt-6">
          <SkillsSearch setShowForm={setShowForm} />
        </div>
      ) : (
        <div className="col-span-2 px-12 pt-4 ">
          <Button
            onClick={() => setShowForm(true)}
            variant={"link"}
            className="px-0 gap-1"
          >
            <BiPlus />
            Add More Skills
          </Button>
        </div>
      )}
    </div>
  );
}
