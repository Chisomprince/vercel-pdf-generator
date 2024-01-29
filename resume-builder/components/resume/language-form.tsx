import { LanguageSchemaType } from "@/lib/validations/resume-schema";
import { useResumeStore } from "@/providers/resume-provider";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import LanguageSearch from "./language-search";
export default function LanguageForm() {
  const [showForm, setShowForm] = useState(false);
  const { sections, deleteItem } = useResumeStore();
  return (
    <div>
      <div className="px-6 mb-4">
        <h2 className="font-medium">Language</h2>
        <p className="text-sm text-muted-foreground">
          Please tell us about the languages you speak.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 px-6">
        {sections?.languages?.items.map((item: LanguageSchemaType, i) => (
          <Badge
            key={item.id}
            variant="outline"
            className="gap-2 font-normal cursor-pointer hover:bg-muted"
          >
            {item.language}
            <Button
              variant={"ghost"}
              className="p-0 h-auto"
              onClick={() => deleteItem("languages", item.id)}
            >
              <IoIosClose />
            </Button>
          </Badge>
        ))}
      </div>

      {showForm ? (
        <div className="px-6 mt-6">
          <LanguageSearch setShowForm={setShowForm} />
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
