import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactElement } from "react";
import { cn } from "@/lib/utils";

interface ToolbarPopoverProps {
  children: React.ReactNode;
  trigger: ReactElement | string;
  triggerClassName?: string;
}

export const ToolbarPopover = ({
  children,
  trigger,
  triggerClassName,
}: ToolbarPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "transition hover:bg-ui-brown data-[state=open]:bg-ui-blue cursor-pointer",
          triggerClassName
        )}
      >
        {trigger}
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={10}
        className="bg-background border-background rounded-3xl"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};
