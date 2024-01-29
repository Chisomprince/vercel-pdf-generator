"use client";

import * as React from "react";

import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useSignupSubmit from "@/hooks/use-signup-submit";
import { cn } from "@/lib/utils";
import AuthService from "@/services/auth-service";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { form, onSubmit, isLoading } = useSignupSubmit();

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              {...form.register("email")}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            {form.formState.errors.email && (
              <p className="text-xs text-red-600">Email address is required</p>
            )}
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        onClick={() => AuthService.loginWithGoogle()}
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
      <Button
        onClick={() => AuthService.signUpWithLinkedIn()}
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        LinkinedIn
      </Button>
    </div>
  );
}
