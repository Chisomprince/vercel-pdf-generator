"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TiptapEditor from "../tiptap-editor/tiptap-editor";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function ContentForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm({
    mode: "onChange",
  });

  async function onSubmit() {
    console.log("submited");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Create Template
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <Button type="submit">Save changes</Button>
        </div>
        <Separator />
        <div className="mt-4 grid grid-cols-8 gap-4">
          <Card className="col-span-5">
            <CardContent className="space-y-4 pt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Template body</FormLabel>
                    <FormControl>
                      <TiptapEditor />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardContent className="space-y-4 pt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To Email</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From Name</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From Email</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From Email</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reply To</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bcc</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cc</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>
      </form>
    </Form>
  );
}
