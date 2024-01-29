"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import jsPDF from "jspdf";
import { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Button } from "../ui/button";

type ResumePreviewType = {
  previewHtml: string;
};
export default function ResumeDisplay({ previewHtml }: ResumePreviewType) {
  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts
    doc.setFont("Inter-Regular", "normal");
    doc.setFont("Rockwell");

    doc.html(reportTemplateRef.current, {
      callback: function (doc) {
        // Save the PDF
        doc.save("sample-document.pdf");
      },
      // margin: [10, 10, 10, 10],
      autoPaging: "text",
      x: 30,
      y: 30,
      width: 390, //target width in the PDF document
      windowWidth: 650, //window width in CSS pixels
    });
  };
  return (
    <div>
      <Card>
        <CardContent className="px-0 pt-8 pb-0 h-[480px] lg:h-auto">
          <Button onClick={handleGeneratePdf}>Download pdf</Button>

          <div className="mx-auto px-9 overflow-hidden ">
            {/* <div className="shadow-xl border px-6 lg:px-12 py-10 transform scale-50 lg:scale-90 origin-top-left w-[200%] lg:w-[110%] min-h-[795px]">
              <div
                ref={reportTemplateRef}
                dangerouslySetInnerHTML={{ __html: previewHtml }}
              />
            </div> */}
            <TransformWrapper
              centerOnInit
              minScale={0.25}
              initialScale={0.95}
              limitToBounds={false}
              centerZoomedOut={false}
              pinch={{ step: 1 }}
              wheel={{ step: 0.1 }}
            >
              {(controllerProps) => (
                <>
                  <TransformComponent wrapperClass=" h-full w-full overflow-visible ">
                    <div
                      // style={{
                      //   width: "210mm",
                      //   minHeight: "297mm",
                      // }}
                      ref={reportTemplateRef}
                      dangerouslySetInnerHTML={{ __html: previewHtml }}
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-0">
          <Button
            // onClick={() => setFormStep(2)}
            type="button"
            variant={"secondary"}
            className="gap-1"
          >
            <BiChevronLeft /> Previous
          </Button>
          <Button
            // onClick={() => setFormStep(3)}
            type="button"
            className="gap-1"
          >
            Next <BiChevronRight />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
