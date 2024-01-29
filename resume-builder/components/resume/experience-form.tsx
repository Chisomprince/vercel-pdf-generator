"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useResumeSubmit from "@/hooks/useResumeSubmit";
import {
  EducationType,
  WorkExperienceType,
} from "@/lib/validations/resume-schema";
import { useModalDrawerProvider } from "@/providers/modal-drawer-provider";
import { useResumeStore } from "@/providers/resume-provider";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DropResult,
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd";
import { BiChevronLeft, BiChevronRight, BiPlus } from "react-icons/bi";
import { MdDragIndicator } from "react-icons/md";
import { CoursesSheet } from "../sheets/courses-sheet";
import { CustomSectionSheet } from "../sheets/custom-section-sheet";
import { EducationSheet } from "../sheets/education-sheet";
import { ExperienceSheet } from "../sheets/experience-sheet";
import { SkillsSheet } from "../sheets/skills-sheet";
import TiptapEditor from "../tiptap-editor/tiptap-editor";
import { Button } from "../ui/button";
import Loading from "../ui/loading";
import { Separator } from "../ui/separator";
import CoursesForm from "./courses-form";
import EducationCard from "./education-card";
import ExperienceCard from "./experience-card";
import HobbiesForm from "./hobbies-form";
import LanguageForm from "./language-form";
import SkillsForm from "./skills-form";
export default function ExperienceForm() {
  const params = useParams();

  const {
    sections,
    personalInfo,
    handleProfessionalSummaryChange,
    onDragEnd,
    setFormStep,
  } = useResumeStore();
  const { toggleSheet } = useModalDrawerProvider();
  const [showHobbies, setShowHobbies] = useState(false);
  const { onResumeSubmit, loading } = useResumeSubmit();

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;
    onDragEnd(result);
  }

  const onSubmit = async () => {
    const payload = {
      basics: personalInfo,
      sections: sections,
    };
    onResumeSubmit(+params.resumeId, payload);
  };
  return (
    <>
      <ExperienceSheet />
      <EducationSheet />
      <SkillsSheet />
      <CustomSectionSheet />
      <CoursesSheet />

      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="px-6">
            <div className=" mb-4">
              <h2 className="font-medium">Professional Experience</h2>
              <p className="text-sm text-muted-foreground">
                Please provide some information about the positions you have
                held in the past or present.
              </p>
            </div>

            <TiptapEditor
              value={personalInfo.summary}
              onChange={handleProfessionalSummaryChange}
            />
          </div>

          <Separator className="my-6" />

          {/* Work Experience Form  */}
          <div>
            <div className="px-6 mb-4">
              <h2 className="font-medium"> Work Experience</h2>
              <p className="text-sm text-muted-foreground">
                Please provide some information about the positions you have
                held in the past or present.
              </p>
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="experience">
                {(provided: DroppableProvided) => (
                  <ul
                    className="pt-4 space-y-4"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {sections?.experience?.items?.map((item, i) => (
                      <Draggable
                        key={item.id}
                        draggableId={`${item.id}`}
                        index={i}
                      >
                        {(provided: DraggableProvided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            key={item.id}
                            className="flex items-center gap-2 px-6"
                          >
                            <div {...provided.dragHandleProps}>
                              <MdDragIndicator className="w-6 h-12" />
                            </div>
                            <ExperienceCard
                              experience={item as WorkExperienceType}
                            />
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
            <div className="col-span-2 px-12 pt-4 ">
              <Button
                onClick={() => toggleSheet("experience")}
                variant={"link"}
                className="px-0 gap-1"
              >
                <BiPlus />
                Add more experience
              </Button>
            </div>
          </div>
          <Separator className="my-6" />

          {/* EducationForm  */}
          <div>
            <div className="px-6 mb-4">
              <h2 className="font-medium"> Education</h2>
              <p className="text-sm text-muted-foreground">
                Please tell us about the courses you have taken.
              </p>
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="education">
                {(provided: DroppableProvided) => (
                  <ul
                    className="pt-4 space-y-4"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {sections?.education?.items?.map((item, i) => (
                      <Draggable
                        key={item.id}
                        draggableId={`${item.id}`}
                        index={i}
                      >
                        {(provided: DraggableProvided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            key={item.id}
                            className="flex items-center gap-2 px-6"
                          >
                            <div {...provided.dragHandleProps}>
                              <MdDragIndicator className="w-6 h-12" />
                            </div>
                            <EducationCard education={item as EducationType} />
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
            <div className="col-span-2 px-12 pt-4 ">
              <Button
                onClick={() => toggleSheet("education")}
                variant={"link"}
                className="px-0 gap-1"
              >
                <BiPlus />
                Add more education
              </Button>
            </div>
          </div>

          <Separator className="my-6" />

          <SkillsForm />

          <Separator className="my-6" />

          {/* Languages Form  */}
          <LanguageForm />

          <Separator className="my-6" />
          {/* Addtiona Section  */}

          {showHobbies ? (
            <>
              <HobbiesForm />
              <Separator className="my-6" />
            </>
          ) : null}

          {sections?.courses?.items?.length > 0 && (
            <>
              <CoursesForm />
              <Separator className="my-6" />
            </>
          )}

          <div>
            <div className="px-6 mb-4">
              <h2 className="font-medium">Add Section</h2>
              <p className="text-sm text-muted-foreground">
                Please tell us about the skills you have acquired
              </p>
            </div>

            <div className="grid px-12 pt-4 ">
              {/* <div>
                <Button
                  onClick={() => toggleSheet("custom")}
                  variant={"link"}
                  className="px-0 gap-1"
                >
                  <BiPlus />
                  Custom Section
                </Button>
              </div> */}

              <div>
                <Button
                  onClick={() => setShowHobbies(true)}
                  variant={"link"}
                  className="px-0 gap-1"
                  disabled={showHobbies}
                >
                  <BiPlus />
                  Hobbies
                </Button>
              </div>

              <div>
                <Button
                  onClick={() => toggleSheet("courses")}
                  variant={"link"}
                  className="px-0 gap-1"
                  disabled={sections?.courses?.items?.length > 0}
                >
                  <BiPlus />
                  Courses
                </Button>
              </div>

              {/* <div>
                <Button
                  onClick={() => toggleSheet("skills")}
                  variant={"link"}
                  className="px-0 gap-1"
                >
                  <BiPlus />
                  Internships
                </Button>
              </div> */}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mt-12">
          <Button
            onClick={() => setFormStep(1)}
            type="button"
            variant={"secondary"}
            className="gap-1"
          >
            <BiChevronLeft /> Previous
          </Button>

          <Button onClick={onSubmit} type="button" className="gap-1">
            {loading ? (
              <Loading />
            ) : (
              <>
                Next <BiChevronRight />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
