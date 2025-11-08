"use client";
import { useSessionStore } from "@/stores/session-store";
import { usePromptStore } from "@/stores/prompt-store";
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

export const PromptImgCount = () => {
  // Session state
  const { activeUser } = useSessionStore();
  const { isAuthenticatied } = activeUser;

  // Prompt state
  const { promptImgQty } = usePromptStore();
  const setPromptImgQty = usePromptStore((state) => state.setPromptImgQty);

  if (!isAuthenticatied) return false;

  return (
    <Popover>
      <PopoverTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              data-testid="prompt-img-count"
              className="inline-flex items-center justify-center gap-2 h-[36px] bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-full! [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 px-6"
            >
              <ImageIcon /> {promptImgQty}
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
        <RadioGroup
          value={String(promptImgQty)}
          onValueChange={(value) => setPromptImgQty(Number(value))}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="1"
              id="option-one"
              className="border-foreground"
            />
            <Label htmlFor="option-one">
              1 <ImageIcon />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option-two"
              className="border-foreground"
            />
            <Label htmlFor="option-two">
              2 <ImageIcon /> <ImageIcon />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="3"
              id="option-three"
              className="border-foreground"
            />
            <Label htmlFor="option-three">
              3 <ImageIcon /> <ImageIcon /> <ImageIcon />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="4"
              id="option-four"
              className="border-foreground"
            />
            <Label htmlFor="option-four">
              4 <ImageIcon /> <ImageIcon /> <ImageIcon /> <ImageIcon />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="5"
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
