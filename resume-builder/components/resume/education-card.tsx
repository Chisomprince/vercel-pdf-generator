import { EducationType } from "@/lib/validations/resume-schema";
import dayjs from "dayjs";
import { ResumeCardDropdown } from "./resume-card-dropdown";

type EducationCardProps = {
  education: EducationType;
};

export default function EducationCard({ education }: EducationCardProps) {
  const { date } = education;

  return (
    <div className="border rounded p-2 px-4 flex-1 flex">
      <div className="flex-1 space-y-1 font-medium text-sm">
        <h2>{education.institution}</h2>
        <p className="text-xs text-muted-foreground">
          {date?.startDate ? dayjs(date.startDate).format("MMM YYYY") : ""} -
          Aug 2023
        </p>
      </div>
      <ResumeCardDropdown data={education} section="education" />
    </div>
  );
}
