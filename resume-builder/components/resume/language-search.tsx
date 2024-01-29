import language from "@/data/countries.json";
import { useResumeStore } from "@/providers/resume-provider";
import { Input } from "../ui/input";

import {
  LanguageSchemaType,
  resumeType,
} from "@/lib/validations/resume-schema";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

type LanguageSearchProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>;
};
const LanguageSearch = ({ setShowForm }: LanguageSearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { sections, addItem, handleAddSection } = useResumeStore();
  const filteredOptions = useMemo(() => {
    if (!inputValue) {
      setIsOpen(false);
      return [];
    }
    setIsOpen(true);

    const languages = language.map((country) => country.language.name);
    const inputArray = languages.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    return Array.from(new Set(inputArray));
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

  const addLanguage = (language: string) => {
    const id = nanoid();
    const section = "languages";
    const data = {
      language,
      id,
    } as LanguageSchemaType;

    if (section in sections) {
      addItem(section, data);
    } else {
      const payload = {
        name: "Languages",
        items: [data],
        type: section,
      } as resumeType["sections"]["languages"];
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
          addLanguage(inputValue);
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
          {/* <ScrollArea className="max-h-64 h-auto rounded-md border p-4"> */}
          {filteredOptions.map((item) => (
            <div
              key={item}
              className="text-sm p-2 hover:bg-muted cursor-pointer"
              onClick={() => addLanguage(item)}
            >
              {item}
            </div>
          ))}
          {/* </ScrollArea> */}
        </div>
      )}
    </div>
  );
};

export default LanguageSearch;
