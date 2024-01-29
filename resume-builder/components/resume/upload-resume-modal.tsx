import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parseResumeFromPdf } from "@/lib/parse-resume-from-pdf";
import { resumeType } from "@/lib/validations/resume-schema";
import { useResumeStore } from "@/providers/resume-provider";
import { useRouter } from "next/navigation";
import { useState } from "react";

type UploadResumeDialogProps = {
  open: boolean | undefined;
  onClose: () => void;
};

const defaultFileState = {
  name: "",
  size: 0,
  fileUrl: "",
};

export function UploadResumeDialog({ open, onClose }: UploadResumeDialogProps) {
  const [file, setFile] = useState(defaultFileState);
  const { handleSetSection, handleSetPersonalInfo } = useResumeStore();
  const router = useRouter();
  const hasFile = Boolean(file.name);

  const setNewFile = (newFile: File) => {
    if (file.fileUrl) {
      URL.revokeObjectURL(file.fileUrl);
    }

    const { name, size } = newFile;
    const fileUrl = URL.createObjectURL(newFile);
    setFile({ name, size, fileUrl });
    // onFileUrlChange(fileUrl);
  };
  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFile = files[0];
    setNewFile(newFile);
  };

  const onImportClick = async () => {
    const resume = await parseResumeFromPdf(file.fileUrl);
    console.log("resume:", resume);

    const educations = {
      name: "Education",
      items: resume.educations,
      type: "education",
    } as resumeType["sections"]["education"];
    handleSetSection({
      educations,
    });
    const profile = {
      jobTitle: "",
      firstName: resume.profile.name?.split(" ")[0], //TODO
      lastName: resume.profile.name?.split(" ")[1], //TODO
      summary: resume.profile.summary,
      id: "",
      photo: "",
      email: resume.profile.email,
      phone: resume.profile.phone,
      address: resume.profile.location,
    };

    console.log("profile", profile);
    handleSetPersonalInfo(profile);
    router.push("/user/resume/create/form?option=new");
    // const settings = deepClone(initialSettings);
    // console.log("settings:", settings);
    // Set formToShow settings based on uploaded resume if users have used the app before
    // if (getHasUsedAppBefore()) {
    //   const sections = Object.keys(settings.formToShow) as ShowForm[];
    //   const sectionToFormToShow: Record<ShowForm, boolean> = {
    //     workExperiences: resume.workExperiences.length > 0,
    //     educations: resume.educations.length > 0,
    //     projects: resume.projects.length > 0,
    //     skills: resume.skills.descriptions.length > 0,
    //     custom: resume.custom.descriptions.length > 0,
    //   };
    //   for (const section of sections) {
    //     settings.formToShow[section] = sectionToFormToShow[section];
    //   }
    // }

    // saveStateToLocalStorage({ resume, settings });
    // router.push("/resume-builder");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Upload Resume</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload a resume</DialogTitle>
          <DialogDescription>
            Upload your existing resume here
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Resume
            </Label>
            <Input
              type="file"
              id="name"
              className="col-span-3"
              accept=".pdf"
              onChange={onInputChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onImportClick}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
