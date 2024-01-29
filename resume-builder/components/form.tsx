"use client";

import LoadingDots from "@/components/loading-dots";
import useAuthSubmit from "@/hooks/useAuthSubmit";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { onSubmit, register, handleSubmit, errors } = useAuthSubmit(type);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 bg-muted px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase"
        >
          Email Address
        </label>
        <input
          id="email"
          {...register("email")}
          type="email"
          placeholder="panic@thedis.co"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          {...register("password")}
          type="password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <p>{type === "login" ? "Sign In" : "Sign Up"}</p>
        )}
      </button>
      <button
        onClick={() => signIn("google", { callbackUrl: "/user" })}
        disabled={loading}
        type="button"
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-red-700 bg-red-700 text-white hover:bg-white hover:text-red-700"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        Sign in with Google
      </button>
      {type === "login" ? (
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="font-semibold text-gray-800">
            Sign up
          </Link>{" "}
          for free.
        </p>
      ) : (
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-gray-800">
            Sign in
          </Link>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
