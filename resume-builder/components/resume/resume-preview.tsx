"use client";

import CreateResumeNav from "@/components/resume/create-resume-nav";
import { resumeType } from "@/lib/validations/resume-schema";
import { useModalDrawerProvider } from "@/providers/modal-drawer-provider";
import { useResumeStore } from "@/providers/resume-provider";
import { StaticImageData } from "next/image";
import { useEffect } from "react";
import { Button } from "../ui/button";
import ResumeDisplay from "./resume-display";
import ResumeDownload from "./resume-download";
import ResumeTemplateModal from "./resume-template-modal";

type ResumePreviewPage = {
  templates: {
    id: string;
    name: string;
    file: string;
    image: StaticImageData;
  }[];
  resume: {
    basics: resumeType["personalInfo"];
    sections: resumeType["sections"];
  };
  reseumepreview: string;
};
export function ResumePreviewPage({
  templates,
  resume,
  reseumepreview,
}: ResumePreviewPage) {
  const { handleSetPersonalInfo, handleSetSection } = useResumeStore();

  useEffect(() => {
    handleSetPersonalInfo(resume.basics);
    handleSetSection(resume.sections);
    //eslint-disable-next-line
  }, [resume]);

  const { toggleSheet } = useModalDrawerProvider();

  return (
    <div>
      <CreateResumeNav />
      <ResumeTemplateModal templates={templates} />

      <div className="lg:max-w-6xl mx-auto w-full pt-6 px-4 lg:px-0">
        <div className="flex justify-end">
          <Button
            onClick={() => toggleSheet("templateModal", reseumepreview)}
            variant={"outline"}
          >
            Change Template
          </Button>
        </div>
        <div className="mt-4 grid lg:grid-cols-8 gap-4">
          <div className="lg:col-span-5">
            <div>
              <ResumeDisplay previewHtml={reseumepreview} />
            </div>
          </div>
          <div className="lg:col-span-3">
            <ResumeDownload />
          </div>
        </div>
      </div>
    </div>
  );
}
