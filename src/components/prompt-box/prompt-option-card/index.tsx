import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PromptOptionType } from "@/config/promptOptions";

interface PromptOptionCardProps {
  item: PromptOptionType;
}

export const PromptOptionCard = ({ item }: PromptOptionCardProps) => {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger className="flex flex-col items-center justify-center gap-2 rounded-2xl p-4 focus:bg-ui-grey-light hover:bg-ui-blue transition cursor-pointer">
          <div>{item.icon}</div>
          <h3 className="text-sm font-medium">{item.heading}</h3>
          {item.status && (
            <span className="text-sm font-regular">{item.status}</span>
          )}
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
