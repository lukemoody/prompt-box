"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { promptOptions } from "@/config/promptOptions";
import { PromptOptionCard } from "@/components/prompt/prompt-option-card";
import { LayoutGrid } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEqualHeight } from "@/hooks/use-equal-height";
import { useIsMobile } from "@/hooks/use-mobile";

export const PromptSelector = () => {
  const isMobile = useIsMobile();
  const [isOpen, setOpen] = React.useState<boolean>(false);

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
        return <PromptOptionCard key={index} item={item} setOpen={setOpen} />;
      })}

      <Dialog open={isOpen} onOpenChange={setOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger data-testid="prompt-popover" asChild>
              <div
                data-element="prompt-option-card"
                className="flex flex-col items-center flex-1 justify-center gap-2 rounded-2xl px-4 py-2 bg-ui-brown hover:bg-ui-blue transition cursor-pointer h-full"
              >
                <LayoutGrid />
                <h3 className="text-xs font-medium">All options</h3>
              </div>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent className="max-w-[230px] text-center px-4 rounded-2xl bg-foreground">
            <h3 className="font-medium">All options</h3>
            <p className="text-ui-grey-light">
              A range of AI products to choose from
            </p>
          </TooltipContent>
        </Tooltip>
        <DialogContent
          className={cn(
            "bg-white border-ui-grey-light shadow-xl",
            "rounded-none lg:rounded-3xl py-20 lg:py-8",
            "h-full lg:h-auto lg:h-inherit min-w-screen lg:min-w-[928px] overflow-y-scroll"
          )}
        >
          <DialogHeader className="w-full">
            <DialogTitle className="text-center mb-2">
              Choose your AI option.
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {promptOptions.map((item, index) => {
              return (
                <PromptOptionCard key={index} item={item} setOpen={setOpen} />
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
