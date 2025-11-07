"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/stores/session-store";
import { signInWithEmail } from "@/actions/auth/sign-in-with-email";
import { useMutation } from "@tanstack/react-query";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Defined schema for login form
const formSchema = z.object({
  emailAddress: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export default function LoginPage() {
  const router = useRouter();
  const [isValidating, setValidating] = React.useState<boolean>(false);
  const setAuthenticatied = useSessionStore((state) => state.setAuthenticatied);
  const setProfile = useSessionStore((state) => state.setProfile);
  const setAvailableCredits = useSessionStore(
    (state) => state.setAvailableCredits
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
    },
  });

  const handleLogin = (data: z.infer<typeof formSchema>) => {
    const { emailAddress } = data;
    loginMutation.mutate(emailAddress);
  };

  const loginMutation = useMutation({
    mutationFn: async (email: string) => {
      setValidating(true);
      return await signInWithEmail(email);
    },
    onSuccess: (response) => {
      if (response.status === 200 && response.data) {
        setProfile(response.data?.name);
        setAvailableCredits(response.data?.credits);
        setAuthenticatied(true);
        router.push("/dashboard");
      } else {
        form.setError("emailAddress", {
          type: "server",
          message: response.message,
        });
      }
      setValidating(false);
    },
    onError: (error) => {
      console.error(error);
      form.setError("emailAddress", {
        type: "server",
        message: "An error occurred. Please try again.",
      });
      setValidating(false);
    },
  });

  return (
    <>
      <Header hideElements={true} logoReduced={true} />
      <div
        data-testid="login-page"
        className="h-screen w-full flex items-center justify-center px-5"
      >
        <div className="flex flex-col items-center justify-center text-center rounded-4xl overflow-hidden max-w-[800px] w-full p-10 bg-background">
          <div className="flex flex-col gap-4 mb-14">
            <h1 className="text-[26px] md:text-3xl font-medium text-foreground">
              Log in or sign up in seconds
            </h1>
            <p className="tracking-normal text-base text-ui-grey font-medium px-24">
              Welcome to Sourceful, sign in to your account..
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleLogin)}
              className="space-y-8 w-full"
            >
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email here..."
                        className="h-15 rounded-2xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg">
                {isValidating && <Spinner />}
                Login or sign up
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
