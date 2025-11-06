"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authentication-store";
import { PromptBox } from "@/components/prompt-box";

export default function DashboardPage() {
  const router = useRouter();
  const getAuthentication = useAuthStore((state) => state.getAuthentication);

  // Do not allow access for unauthenticated users
  React.useEffect(() => {
    if (getAuthentication() === undefined) {
      router.push("/login");
    }
  }, [getAuthentication, router]);

  return (
    <div
      data-testid="dashboard-page"
      className="flex flex-col items-start justify-between p-6"
    >
      <div className="flex flex-col items-center justify-center mx-auto max-w-[864px] w-full text-center space-y-8 mb-8">
        <h1 className="text-foreground font-space-grotesk leading-tight font-medium text-[34px]">
          Hi Luke Moody, create something
        </h1>
      </div>
      <PromptBox />
    </div>
  );
}
