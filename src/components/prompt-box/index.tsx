"use client";
import React from "react";
import { useSessionStore } from "@/stores/session-store";
import { Button } from "@/components/ui/button";

export const PromptBox = () => {
  // TODO: Testing
  const { activeUser } = useSessionStore();
  const { credits } = activeUser;
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
        disabled={credits < 20 ? true : false}
      >
        Generate (15)
      </Button>
    </div>
  );
};
