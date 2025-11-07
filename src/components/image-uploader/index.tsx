import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const ImageUploader = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button data-testid="image-uploader" variant="secondary" size="icon">
          <Plus />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-[320px] text-center p-4 rounded-2xl bg-foreground">
        <h3 className="font-medium">Reference image</h3>
        <p className="text-ui-grey-light">
          Upload a reference image to help the AI generate images that are
          similar to the reference image.
        </p>
      </TooltipContent>
    </Tooltip>
  );
};
