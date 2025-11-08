import React from "react";
import { useRef } from "react";
import { usePromptStore } from "@/stores/prompt-store";
import type { UseFormReturn } from "react-hook-form";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "@/components/ui/form";

export const ImageUploaderAction = ({
  form,
}: {
  form: UseFormReturn<{ query: string; referenceImage: File | undefined }>;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { promptRefImage } = usePromptStore();
  const setPromptRefImage = usePromptStore((state) => state.setPromptRefImage);

  // Update form value based on state change
  React.useEffect(() => {
    form.setValue("referenceImage", promptRefImage);
  }, [promptRefImage, form]);

  return (
    <FormField
      control={form.control}
      name="referenceImage"
      render={({ field }) => (
        <Tooltip>
          <TooltipTrigger asChild>
            <FormItem>
              <FormLabel className="sr-only">Image Uploader</FormLabel>
              <FormControl>
                <div className="relative inline-block">
                  <input
                    ref={(e) => {
                      fileInputRef.current = e;
                      field.ref(e);
                    }}
                    type="file"
                    accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml"
                    className="sr-only"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        field.onChange(e);
                        setPromptRefImage(file);
                      }
                    }}
                    disabled={promptRefImage ? true : false}
                  />
                  <Button
                    data-testid="image-uploader"
                    variant="secondary"
                    size="icon"
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={promptRefImage ? true : false}
                  >
                    <Plus />
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          </TooltipTrigger>
          <TooltipContent className="max-w-[320px] text-center p-4 rounded-2xl bg-foreground">
            <h3 className="font-medium">Reference image</h3>
            <p className="text-ui-grey-light">
              Upload a reference image to help the AI generate images that are
              similar to the reference image.
            </p>
          </TooltipContent>
        </Tooltip>
      )}
    />
  );
};
