import skills from "@/data/skills.json";
import { SkillsSchemaType, resumeType } from "@/lib/validations/resume-schema";
import { useResumeStore } from "@/providers/resume-provider";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { Input } from "../ui/input";

type SkillsSearchProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>;
};
const SkillsSearch = ({ setShowForm }: SkillsSearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { sections, addItem, handleAddSection } = useResumeStore();

  const filteredOptions = useMemo(() => {
    if (!inputValue) {
      setIsOpen(false);
      return [];
    }
    setIsOpen(true);
    return skills.filter(({ keyskill }) =>
      keyskill.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue]);

  useEffect(() => {
    // Close the ComboBox when the user presses the "Escape" key
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const addSkill = (skill: string) => {
    const id = nanoid();
    const section = "skills";
    const data = {
      skill,
      id,
    } as SkillsSchemaType;

    if (section in sections) {
      addItem(section, data);
    } else {
      const payload = {
        name: "Skills",
        items: [data],
        type: section,
      } as resumeType["sections"]["skills"];
      handleAddSection(section, payload);
    }

    setInputValue("");
    setIsOpen(false);
    setShowForm(false);
  };

  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addSkill(inputValue);
        }}
      >
        <Input
          id="degree"
          placeholder={"Skill (eg. Project management)"}
          type="search"
          className="bg-muted"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      {isOpen && (
        <div className="mt-2 border rounded-lg max-h-64 absolute w-full bg-white overflow-scroll">
          <div
            className="text-sm p-2 hover:bg-muted cursor-pointer"
            onClick={() => addSkill(inputValue)}
          >
            {inputValue}
          </div>

          {filteredOptions.map((item) => (
            <div
              key={item.keyskill}
              className="text-sm p-2 hover:bg-muted cursor-pointer"
              onClick={() => addSkill(item.keyskill)}
            >
              {item.keyskill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsSearch;
