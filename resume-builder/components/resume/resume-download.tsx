import { Card, CardContent } from "@/components/ui/card";
import { useResumeStore } from "@/providers/resume-provider";
import { useState } from "react";
import { Button } from "../ui/button";
import LoadingSpinner from "../ui/loading-spinner";

export default function ResumeDownload() {
  const { sections, personalInfo } = useResumeStore();
  const [downloadingDocx, setDownloadingDocx] = useState(false);
  const [downloadingPDF, setDownloadingPDF] = useState(false);
  const handleDownloadDocx = async () => {
    try {
      setDownloadingDocx(true);
      const res = await fetch("/api/resume/docx", {
        method: "POST",
        body: JSON.stringify({
          sections,
          personalInfo,
        }),
      });

      const blob = await res.blob();
      const downlinkLink = document.createElement("a");
      downlinkLink.href = URL.createObjectURL(blob);
      downlinkLink.download = "resume.docx";
      downlinkLink.click();
      downlinkLink.remove();

      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setDownloadingDocx(false);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      setDownloadingPDF(true);
      const res = await fetch("/api/resume/pdf", {
        method: "POST",
        body: JSON.stringify({
          sections,
          personalInfo,
        }),
      });

      const blob = await res.blob();
      const downlinkLink = document.createElement("a");
      downlinkLink.href = URL.createObjectURL(blob);
      downlinkLink.download = "resume.pdf";
      downlinkLink.click();
      downlinkLink.remove();

      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setDownloadingPDF(false);
    }
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-12 pb-12">
        <div className="w-40 h-40 bg-muted rounded mx-auto"></div>
        <h2 className="text-center mt-1 font-medium">Download Resume</h2>
        <div className="space-y-2">
          <Button
            className="w-full gap-2"
            onClick={() => handleDownloadPDF()}
            disabled={downloadingPDF || downloadingDocx}
          >
            Download PDF
            {downloadingPDF && <LoadingSpinner />}
          </Button>
          <Button
            className="w-full gap-2"
            disabled={downloadingPDF || downloadingDocx}
            onClick={() => handleDownloadDocx()}
            variant={"secondary"}
          >
            Download Docx
            {downloadingDocx && <LoadingSpinner />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
