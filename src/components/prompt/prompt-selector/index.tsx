import { promptOptions } from "@/config/promptOptions";
import { PromptOptionCard } from "@/components/prompt/prompt-option-card";
import { LayoutGrid } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const PromptSelector = () => {
  return (
    <div
      data-testid="prompt-selector"
      className="flex items-start justify-between gap-4 w-full"
    >
      {promptOptions.slice(0, 5).map((item, index) => {
        return <PromptOptionCard key={index} item={item} />;
      })}
      <Popover>
        <PopoverTrigger data-testid="toolbar-popover" asChild>
          <div className="flex flex-col items-center justify-center gap-2 rounded-2xl p-4 bg-ui-brown hover:bg-ui-blue transition cursor-pointer">
            <LayoutGrid />
            <h3 className="font-medium">All options</h3>
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          sideOffset={0}
          className="grid grid-cols-4 bg-ui-grey-light border-ui-grey-light rounded-3xl min-w-[928px] shadow-xl"
        >
          {promptOptions.map((item, index) => {
            return <PromptOptionCard key={index} item={item} />;
          })}
        </PopoverContent>
      </Popover>
    </div>
  );
};
