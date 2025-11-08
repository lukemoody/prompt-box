"use client";
import React from "react";
import Image from "next/image";
import { usePromptStore } from "@/stores/prompt-store";
import { CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ImageUploaderPreview = () => {
  const { promptRefImage } = usePromptStore();
  const setPromptRefImage = usePromptStore((state) => state.setPromptRefImage);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (promptRefImage) {
      const url = URL.createObjectURL(promptRefImage);
      setPreviewUrl(url);

      // Cleanup function to revoke the object URL
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPreviewUrl(null);
    }
  }, [promptRefImage]);

  const deleteAsset = () => {
    setPromptRefImage(undefined);
  };

  if (!previewUrl) return false;

  return (
    <div className="relative ml-4 w-auto">
      <Image
        src={previewUrl}
        alt="Reference image preview"
        width={36}
        height={36}
        className="rounded-lg object-contain max-h-64"
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute -top-2 -right-2 z-10 flex items-center justify-center bg-white w-6 h-6 rounded-full! shadow-md"
        onClick={deleteAsset}
      >
        <CircleX />
      </Button>
    </div>
  );
};
