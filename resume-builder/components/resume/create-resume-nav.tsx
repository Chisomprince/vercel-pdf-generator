import { cn } from "@/lib/utils";
import { useResumeStore } from "@/providers/resume-provider";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "../ui/button";

const resumesteps = [
  {
    id: 1,
    title: "Personal Information",
  },
  {
    id: 2,
    title: "Experience",
  },
  {
    id: 3,
    title: "Skills",
  },
  {
    id: 4,
    title: "Preview Resume",
  },
];

export default function CreateResumeNav() {
  const { formStep } = useResumeStore();
  return (
    <div className="sticky top-0">
      <div className="bg-whit dark:bg-background py-4">
        <div className="lg:max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">LOGO</p>
            <div className="hidden lg:flex gap-8 px-8 py-2 bg-gray-200 rounded-lg">
              {resumesteps.map((item, index) => (
                <div key={item.id} className="flex items-center gap-1">
                  <div
                    className={cn(
                      "flex justify-center items-center rounded-full w-5 h-5",
                      {
                        "bg-orange-500 ring-1 ring-orange-500":
                          item.id <= formStep,
                        "bg-slate-500": item.id > formStep,
                      }
                    )}
                  >
                    <span className="text-white text-xs">{item.id}</span>
                  </div>

                  <p className="font-medium text-sm">{item.title}</p>
                </div>
              ))}
            </div>
            <Button
              variant="link"
              className="bg-white rounded-full hover:bg-red-50"
            >
              <MdOutlineClose />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
