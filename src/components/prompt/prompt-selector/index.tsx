"use client";

import { promptOptions } from "@/config/promptOptions";
import { PromptOptionCard } from "@/components/prompt/prompt-option-card";
import { LayoutGrid } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEqualHeight } from "@/hooks/use-equal-height";
import { useIsMobile } from "@/hooks/use-mobile";

export const PromptSelector = () => {
  const isMobile = useIsMobile();

  const responsiveCardTotal = () => {
    if (isMobile) {
      return 1;
    }
    return 5;
  };

  useEqualHeight('[data-element="prompt-option-card"]');

  return (
    <div
      data-testid="prompt-selector"
      className="flex items-start justify-between gap-4 w-full"
    >
      {promptOptions.slice(0, responsiveCardTotal()).map((item, index) => {
        return <PromptOptionCard key={index} item={item} />;
      })}
      <Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger data-testid="toolbar-popover" asChild>
              <div
                data-element="prompt-option-card"
                className="flex flex-col items-center flex-1 justify-center gap-2 rounded-2xl px-4 py-2 bg-ui-brown hover:bg-ui-blue transition cursor-pointer h-full"
              >
                <LayoutGrid />
                <h3 className="text-xs font-medium">All options</h3>
              </div>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent className="max-w-[230px] text-center px-4 rounded-2xl bg-foreground">
            <h3 className="font-medium">All options</h3>
            <p className="text-ui-grey-light">
              A range of AI products to choose from
            </p>
          </TooltipContent>
        </Tooltip>

        <PopoverContent
          align={"end"}
          sideOffset={0}
          className="grid grid-cols-3 lg:grid-cols-4 gap-4 bg-white border-ui-grey-light rounded-3xl min-w-screen lg:min-w-[928px] shadow-xl"
        >
          {promptOptions.map((item, index) => {
            return <PromptOptionCard key={index} item={item} />;
          })}
        </PopoverContent>
      </Popover>
    </div>
  );
};
