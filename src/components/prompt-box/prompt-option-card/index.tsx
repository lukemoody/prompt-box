"use client";
import Image from "next/image";
import { usePromptStore } from "@/stores/prompt-store";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PromptOptionType } from "@/types/prompts";

interface PromptOptionCardProps {
  item: PromptOptionType;
}

export const PromptOptionCard = ({ item }: PromptOptionCardProps) => {
  const promptType = usePromptStore((state) => state.promptType);
  const setPromptType = usePromptStore((state) => state.setPromptType);
  const isActive = item.type === promptType;

  return (
    <div>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => setPromptType(item.type)}
            className={cn(
              "flex flex-col items-center justify-center gap-2 rounded-2xl p-4 hover:bg-ui-grey-light transition cursor-pointer",
              isActive && "bg-ui-blue!"
            )}
          >
            <div>{item.icon}</div>
            <h3 className="text-sm font-medium">{item.heading}</h3>
            {item.status && (
              <span className="text-sm font-regular">{item.status}</span>
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-[230px] text-center p-4 rounded-2xl bg-foreground">
          {item.imgSrc && (
            <Image
              src={item.imgSrc}
              alt={item.heading}
              fill
              className="relative! w-full mb-2"
            />
          )}
          <h3 className="font-medium">{item.heading}</h3>
          <p className="text-ui-grey-light">{item.text}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
