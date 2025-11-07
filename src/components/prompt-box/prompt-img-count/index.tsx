"use client";
import { useSessionStore } from "@/stores/session-store";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Image as ImageIcon } from "lucide-react";

// TODO: NEED TO HOOK THIS TO STATE

export const PromptImgCount = () => {
  const { activeUser } = useSessionStore();
  const { isAuthenticatied } = activeUser;

  if (!isAuthenticatied) return false;

  return (
    <Popover>
      <PopoverTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              data-testid="prompt-img-count"
              className="inline-flex items-center justify-center gap-2 h-[36px] hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-full! [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 px-6"
            >
              <ImageIcon /> 12
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-[320px] text-center p-4 rounded-2xl bg-foreground">
            <h3 className="font-medium">Number of images</h3>
            <p className="text-ui-grey-light">
              Choose the number of images to generate
            </p>
          </TooltipContent>
        </Tooltip>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={10}
        className="bg-ui-grey-light border-ui-grey-light rounded-3xl max-w-[230px] shadow-xl"
      >
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-one"
              id="option-one"
              className="border-foreground"
            />
            <Label htmlFor="option-one">
              1 <ImageIcon />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-two"
              id="option-two"
              className="border-foreground"
            />
            <Label htmlFor="option-two">
              2 <ImageIcon /> <ImageIcon />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-three"
              id="option-three"
              className="border-foreground"
            />
            <Label htmlFor="option-three">
              3 <ImageIcon /> <ImageIcon /> <ImageIcon />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-four"
              id="option-four"
              className="border-foreground"
            />
            <Label htmlFor="option-four">
              4 <ImageIcon /> <ImageIcon /> <ImageIcon /> <ImageIcon />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-five"
              id="option-five"
              className="border-foreground"
            />
            <Label htmlFor="option-five">
              5 <ImageIcon /> <ImageIcon /> <ImageIcon /> <ImageIcon />{" "}
              <ImageIcon />
            </Label>
          </div>
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
};
