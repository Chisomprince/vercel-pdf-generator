"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { createResume } from "@/app/_actions/resume-actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { MdOutlineCloudUpload } from "react-icons/md";
import CreateResumeCard from "./create-resume-card";
import { UploadResumeDialog } from "./upload-resume-modal";

const appearanceFormSchema = z.object({
  create_option: z.enum(["new", "existing"], {
    required_error: "Please click on the boxes to select an option.",
  }),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

export function CreateResumeForm() {
  const router = useRouter();
  const [showUploadResumeModal, setShowUploadResumeModal] = useState(false);
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      create_option: "new",
    },
  });

  async function onSubmit(data: AppearanceFormValues) {
    try {
      if (data.create_option === "new") {
        const payload = {
          name: "default",
          slug: "default",
          basics: {
            jobTitle: "",
            firstName: "Moses",
            lastName: "Chisom",
            summary: "",
            photo: "",
            email: "",
            phone: "",
            address: "",
          },
          sections: {},
        };
        const resume = await createResume(payload);
        // console.log("resume:", resume);
        router.push(`/resume/${resume.id}`);
        return;
      } else {
        setShowUploadResumeModal(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <UploadResumeDialog
        open={showUploadResumeModal}
        onClose={() => setShowUploadResumeModal(false)}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="create_option"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid lg:grid-cols-2 gap-4 "
                >
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary ">
                      <FormControl>
                        <RadioGroupItem value="new" className="sr-only" />
                      </FormControl>
                      <CreateResumeCard
                        title="Create a new resume"
                        description="We will walk you through creating a new rewarding resume."
                        icon={HiOutlineDocumentPlus}
                      />
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary ">
                      <FormControl>
                        <RadioGroupItem value="existing" className="sr-only" />
                      </FormControl>
                      <CreateResumeCard
                        title="Create from existing resume"
                        description=" We will refill your resume with information from your old resume"
                        icon={MdOutlineCloudUpload}
                      />
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" className="px-6">
              {form.formState.isSubmitting ? "Loading..." : "Continue"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
