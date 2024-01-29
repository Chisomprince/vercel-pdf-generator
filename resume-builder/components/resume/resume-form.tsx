"use client";

import { useEffect, useState } from "react";
import ExperienceForm from "./experience-form";
import PersonalInformationForm from "./personal-information-form";

import { resumeType } from "@/lib/validations/resume-schema";
import { useResumeStore } from "@/providers/resume-provider";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoGridOutline } from "react-icons/io5";
import { Button } from "../ui/button";
type ResumeFormProps = {
  resume: {
    basics: resumeType["personalInfo"];
    sections: resumeType["sections"];
  };
};
export function ResumeForm({ resume }: ResumeFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSetPersonalInfo, handleSetSection, formStep } =
    useResumeStore();

  useEffect(() => {
    handleSetPersonalInfo(resume.basics);
    handleSetSection(resume.sections);
    //eslint-disable-next-line
  }, [resume]);

  return (
    <div>
      {/* <CreateResumeNav /> */}
      <div className="lg:max-w-7x mx-auto ">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-6">
            <div className="sticky top-0 ">
              {/* <ResumeTips /> */}
              <div className="px-24 flex justify-between pt-6">
                <div className="flex divide-x ">
                  <Button variant={"link"} className="pl-0">
                    <IoGridOutline className="mr-2" />
                    Select template
                  </Button>

                  <div className="flex items-center gap-3 px-4">
                    <Button variant={"link"} className="px-0">
                      <FaMinus />
                    </Button>
                    <span className="font-normal">Aa</span>
                    <Button variant={"link"} className="px-0">
                      <FaPlus />
                    </Button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button>Download PDF</Button>
                  <Button>
                    <HiOutlineDotsHorizontal />
                  </Button>
                </div>
              </div>
              <div className=" px-24 py-10">
                <div className="bg-white aspect-square"></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            {formStep === 1 && <PersonalInformationForm />}
            {formStep === 2 && <ExperienceForm />}
            {/* {formStep === 3 && <ResumePreviewPage />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
