"use client";

import { EducationType } from "@/lib/validations/resume-schema";
import { useModalDrawerProvider } from "@/providers/modal-drawer-provider";
import { useResumeStore } from "@/providers/resume-provider";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DropResult,
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd";
import { BiPlus } from "react-icons/bi";
import { MdDragIndicator } from "react-icons/md";
import { Button } from "../ui/button";
import EducationCard from "./education-card";
export default function CoursesForm() {
  const { sections, personalInfo, handleProfessionalSummaryChange, onDragEnd } =
    useResumeStore();
  const { toggleSheet } = useModalDrawerProvider();

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;
    onDragEnd(result);
  }

  return (
    <div>
      <div className="px-6 mb-4">
        <h2 className="font-medium"> Courses</h2>
        <p className="text-sm text-muted-foreground">
          Please tell us about the courses you have taken.
        </p>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="courses">
          {(provided: DroppableProvided) => (
            <ul
              className="pt-4 space-y-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {sections?.courses?.items?.map((item, i) => (
                <Draggable key={item.id} draggableId={`${item.id}`} index={i}>
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
          Add more Courses
        </Button>
      </div>
    </div>
  );
}
