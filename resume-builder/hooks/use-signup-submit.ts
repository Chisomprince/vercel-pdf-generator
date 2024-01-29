import { authSchema } from "@/lib/schema/auth-schema";
import AuthService from "@/services/auth-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type formValues = z.infer<typeof authSchema>;
export default function useSignupSubmit() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<formValues>({
    resolver: zodResolver(authSchema),
  });
  const onSubmit = async (data: formValues) => {
    try {
      const res = AuthService.loginWithEmail(data.email);
    } catch (err) {
      console.log(err);
    }
  };
  return { form, onSubmit, isLoading };
}
