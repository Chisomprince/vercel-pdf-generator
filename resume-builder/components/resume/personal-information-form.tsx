"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useResumeSubmit from "@/hooks/useResumeSubmit";
import { ProfileSchema, ProfileType } from "@/lib/validations/resume-schema";
import { useResumeStore } from "@/providers/resume-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiChevronUp,
} from "react-icons/bi";
import { Button } from "../ui/button";
import Loading from "../ui/loading";

export default function PersonalInformationForm() {
  const params = useParams();
  const [showAddtionalInfo, setShowAddtionalInfo] = useState<boolean>(false);
  const { personalInfo, setFormStep } = useResumeStore();
  const { onResumeSubmit, loading } = useResumeSubmit();

  const form = useForm<ProfileType>({
    mode: "onChange",
    resolver: zodResolver(ProfileSchema),
    defaultValues: personalInfo,
  });

  useEffect(() => {
    form.reset(personalInfo);
    //eslint-disable-next-line
  }, [personalInfo]);

  const onSubmit = async (data: ProfileType) => {
    const payload = {
      basics: data,
    };
    onResumeSubmit(+params.resumeId, payload);
  };

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <CardContent className="lg:grid lg:grid-cols-2 gap-4 space-y-4 lg:space-y-0">
            <FormField
              control={form.control}
              name={"jobTitle"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-sm">
                    Job Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      // placeholder={item.placeholder}
                      {...field}
                      className="bg-muted dark:bg-zinc-900"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"phone"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-sm">
                    Job Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      // placeholder={item.placeholder}
                      {...field}
                      className="bg-muted dark:bg-zinc-900"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"firstName"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-sm">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      // placeholder={item.placeholder}
                      {...field}
                      className="bg-muted dark:bg-zinc-900"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"lastName"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-sm">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      // placeholder={item.placeholder}
                      {...field}
                      className="bg-muted dark:bg-zinc-900"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-sm">Email</FormLabel>
                  <FormControl>
                    <Input
                      // placeholder={item.placeholder}
                      {...field}
                      className="bg-muted dark:bg-zinc-900"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"phone"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-sm">Phone</FormLabel>
                  <FormControl>
                    <Input
                      // placeholder={item.placeholder}
                      {...field}
                      className="bg-muted dark:bg-zinc-900"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"address"}
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <FormLabel className="text-gray-400 text-sm">
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      // placeholder={item.placeholder}
                      {...field}
                      className="bg-muted dark:bg-zinc-900"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"city"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-sm">City</FormLabel>
                  <FormControl>
                    <Input
                      // placeholder={item.placeholder}
                      {...field}
                      className="bg-muted dark:bg-zinc-900"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"postalCode"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-sm">
                    Postal Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      // placeholder={item.placeholder}
                      {...field}
                      className="bg-muted dark:bg-zinc-900"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2">
              <Button
                variant={"link"}
                className="px-0 gap-1"
                type="button"
                onClick={() => setShowAddtionalInfo(!showAddtionalInfo)}
              >
                Edit additional details{" "}
                {showAddtionalInfo ? <BiChevronUp /> : <BiChevronDown />}{" "}
              </Button>
            </div>

            {showAddtionalInfo && (
              <>
                <FormField
                  control={form.control}
                  name={"dob"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400 text-sm">
                        Date of Birth
                      </FormLabel>
                      <FormControl>
                        <Input
                          // placeholder={item.placeholder}
                          {...field}
                          className="bg-muted dark:bg-zinc-900"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"pob"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400 text-sm">
                        Place of Birth
                      </FormLabel>
                      <FormControl>
                        <Input
                          // placeholder={item.placeholder}
                          {...field}
                          className="bg-muted dark:bg-zinc-900"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"nationality"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400 text-sm">
                        Nationality
                      </FormLabel>
                      <FormControl>
                        <Input
                          // placeholder={item.placeholder}
                          {...field}
                          className="bg-muted dark:bg-zinc-900"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"linkedIn"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400 text-sm">
                        LinkedIn
                      </FormLabel>
                      <FormControl>
                        <Input
                          // placeholder={item.placeholder}
                          {...field}
                          className="bg-muted dark:bg-zinc-900"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"website"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400 text-sm">
                        Website
                      </FormLabel>
                      <FormControl>
                        <Input
                          // placeholder={item.placeholder}
                          {...field}
                          className="bg-muted dark:bg-zinc-900"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"dob"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400 text-sm">
                        Date of birth
                      </FormLabel>
                      <FormControl>
                        <Input
                          // placeholder={item.placeholder}
                          {...field}
                          className="bg-muted dark:bg-zinc-900"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </CardContent>
          <CardFooter className="flex justify-between mt-8">
            <Button
              onClick={() => setFormStep(1)}
              type="button"
              variant={"secondary"}
              className="gap-1"
            >
              <BiChevronLeft /> Previous
            </Button>
            <Button type="submit" className="gap-1">
              {loading ? (
                <Loading />
              ) : (
                <>
                  Next <BiChevronRight />
                </>
              )}
            </Button>
          </CardFooter>{" "}
        </form>
      </Form>
    </Card>
  );
}
