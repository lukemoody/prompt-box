"use client";
import React from "react";
import { useSessionStore } from "@/stores/session-store";
import { usePromptStore } from "@/stores/prompt-store";
import { PromptSelector } from "@/components/prompt-box/prompt-selector";
import { PromptImgCount } from "@/components/prompt-box/prompt-img-count";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploader } from "@/components/image-uploader";
import { Sparkles, Coins } from "lucide-react";

export const PromptContainer = () => {
  const { activeUser } = useSessionStore();
  const { isAuthenticatied, credits } = activeUser;
  const updateCreditsBalance = useSessionStore(
    (state) => state.updateCreditsBalance
  );
  const promptType = usePromptStore((state) => state.promptType);
  const [type, setType] = React.useState("imageGen");

  React.useEffect(() => {
    if (promptType) {
      setType(promptType);
    }
  }, [promptType]);

  // TODO: Add form here

  const placeholderMap = {
    imageGen: "Describe the image you want to create...",
    packagingDesign: "Describe your ideal packaging vision...",
    logoDesign:
      "Describe your brand, target audience and any details about the logo you want...",
    // Others arent placeholder. Implement differently.
  };

  return (
    <div
      data-testid="prompt-box"
      data-element="prompt-box"
      className="flex flex-col items-center justify-center rounded-4xl overflow-hidden max-w-[928px] w-full mx-auto p-10 bg-background"
    >
      <PromptSelector />
      <div className="py-5 w-full">
        <Textarea
          placeholder={placeholderMap[type as keyof typeof placeholderMap]}
          className="border-transparent shadow-none"
        />
      </div>
      <div
        data-element="prompt-box-footer"
        className="flex items-center justify-between w-full mt-5"
      >
        <ImageUploader />
        <div className="space-x-4">
          <PromptImgCount />
          <Button
            onClick={() => updateCreditsBalance()}
            disabled={isAuthenticatied && credits < 20 ? true : false}
          >
            <Sparkles />
            {isAuthenticatied ? (
              <>
                Generate {credits} <Coins />
              </>
            ) : (
              <>Start for free</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
