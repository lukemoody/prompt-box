"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/stores/session-store";
import { PromptContainer } from "@/components/prompt/prompt-container";
import { PillBG } from "@/components/pill-bg";

export default function DashboardPage() {
  const router = useRouter();
  const { activeUser } = useSessionStore();
  const { username } = activeUser;
  const getAuthentication = useSessionStore((state) => state.getAuthentication);

  // Do not allow access for unauthenticated users
  React.useEffect(() => {
    if (getAuthentication() === false || getAuthentication() === undefined) {
      router.push("/login");
    }
  }, [getAuthentication, router]);

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto max-w-[864px] w-full text-center space-y-8 mb-8">
        {username && (
          <h1 className="text-foreground font-space-grotesk leading-tight font-medium text-[34px]">
            Hi {username}, create something <PillBG>iconic</PillBG> today.
          </h1>
        )}
      </div>
      <PromptContainer />
    </>
  );
}
