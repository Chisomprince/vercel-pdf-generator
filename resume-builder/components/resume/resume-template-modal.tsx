import { updateResume } from "@/app/_actions/resume-actions";
import { getTemplate } from "@/app/_actions/templates";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useModalDrawerProvider } from "@/providers/modal-drawer-provider";
import { useResumeStore } from "@/providers/resume-provider";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import LoadingSpinner from "../ui/loading-spinner";
type ResumeTemplateModalProps = {
  templates: {
    id: string;
    name: string;
    file: string;
    image: StaticImageData;
  }[];
};
export default function ResumeTemplateModal({
  templates,
}: ResumeTemplateModalProps) {
  const params = useParams();
  const { closeDrawer, sheet, service } = useModalDrawerProvider();
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState("");
  const { personalInfo, sections } = useResumeStore();
  const [selectedTemplate, setSelectedTemplate] = useState<
    ResumeTemplateModalProps["templates"][0] | null
  >(null);
  const handleFetchTemplate = async (templateId: string) => {
    try {
      setLoading("fetching");
      const template = await getTemplate(templateId, {
        personalInfo,
        sections,
      });
      setPreview(template);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading("");
    }
  };

  const handleSaveTemplate = async () => {
    if (!selectedTemplate) return;
    try {
      setLoading("saving");
      const template = await updateResume(+params.resumeId, {
        basics: personalInfo,
        sections,
        metadata: {
          template: selectedTemplate.file,
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading("");
      closeDrawer();
    }
  };
  return (
    <div>
      <Dialog open={sheet.templateModal.open} onOpenChange={closeDrawer}>
        <DialogContent className="sm:max-w-5xl p-0 gap-0">
          <div className="flex justify-between border-b px-6 py-4 mr-8 ">
            <DialogHeader>
              <DialogTitle>Change template</DialogTitle>
            </DialogHeader>
            <Button
              onClick={handleSaveTemplate}
              variant="outline"
              className="gap-2"
              disabled={loading === "saving"}
            >
              Use Template {loading === "saving" && <LoadingSpinner />}
            </Button>
          </div>
          <div className="grid grid-cols-2 max-h-[70vh]">
            <div className="mx-auto px-6 py-6 overflow-hidden overflow-y-scroll bg-slate-50 w-full ">
              <div className="bg-white border px-2 lg:px-6 py-10 transform scale-50 lg:scale-75 origin-top-left w-[200%] lg:w-[130%] min-h-[795px]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: preview || (service as string),
                  }}
                />
                {loading && <p>Loading...</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-white p-6 overflow-y-scroll">
              {templates.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedTemplate(item);
                    handleFetchTemplate(item.file);
                  }}
                  className={`${
                    item.id === selectedTemplate?.id && "border-black border-2"
                  } h-64 border hover:border-black cursor-pointer relative`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-top object-cover"
                  />
                </div>
              ))}

              {/* <div className="h-64 border hover:border-2 hover:border-black cursor-pointer relative">
                <Image src={Temp2png} alt="" fill className="object-cover" />
              </div>
              <div className="h-64 border hover:border-2 hover:border-black cursor-pointer relative">
                <Image src={Temp3png} alt="" fill className="object-cover" />
              </div>
              <div className="h-64 border hover:border-2 hover:border-black cursor-pointer relative">
                <Image src={Temp4png} alt="" fill className="object-cover" />
              </div> */}
            </div>
          </div>
          {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
