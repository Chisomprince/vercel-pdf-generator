import { useResumeStore } from "@/providers/resume-provider";
import TiptapEditor from "../tiptap-editor/tiptap-editor";

export default function HobbiesForm() {
  const { sections, handleSetHobbies } = useResumeStore();
  return (
    <div className="px-6">
      <div className=" mb-4">
        <h2 className="font-medium">Hobbies</h2>
        <p className="text-sm text-muted-foreground">
          Please provide some information about your hobbies
        </p>
      </div>

      <TiptapEditor
        value={sections.hobbies?.items?.[0]?.summary}
        onChange={handleSetHobbies}
      />
    </div>
  );
}
