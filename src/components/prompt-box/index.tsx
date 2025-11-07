"use client";
// import React from "react";
import { useSessionStore } from "@/stores/session-store";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const PromptBox = () => {
  const { activeUser } = useSessionStore();
  const { isAuthenticatied, credits } = activeUser;
  const updateCreditsBalance = useSessionStore(
    (state) => state.updateCreditsBalance
  );

  // TODO: Add form here

  return (
    <div
      data-testid="prompt-box"
      className="flex flex-col items-center justify-center rounded-4xl overflow-hidden max-w-[928px] w-full mx-auto p-32 lg:py-48 bg-background"
    >
      <p>TODO: PROMPT BOX HERE</p>
      <Button
        onClick={() => updateCreditsBalance()}
        disabled={isAuthenticatied && credits < 20 ? true : false}
      >
        {isAuthenticatied ? (
          "Generate"
        ) : (
          <>
            <Sparkles />
            Start for free
          </>
        )}
      </Button>
    </div>
  );
};
