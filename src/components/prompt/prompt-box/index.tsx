"use client";
import React from "react";
import { useSessionStore } from "@/stores/session-store";
import { usePromptStore } from "@/stores/prompt-store";
import { PromptImgCount } from "@/components/prompt/prompt-img-count";
import { useRouter, usePathname } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploaderAction } from "@/components/image-uploader/image-uploader-action";
import { ImageUploaderPreview } from "@/components/image-uploader/image-uploader-preview";
import { Sparkles, Coins, CircleAlert } from "lucide-react";
import { useCredits } from "@/hooks/use-credits";
import { useCreditBalanceCheck } from "@/hooks/use-credit-balance-check";
import { Alert, AlertTitle } from "@/components/ui/alert";

// Defined schema for login form
const formSchema = z.object({
  query: z.string().min(1, {
    message: "Please enter a prompt query",
  }),
  referenceImage: z.any(), // TODO: tbc schema.
});

export const PromptBox = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Session state
  const { activeUser } = useSessionStore();
  const { isAuthenticatied, credits } = activeUser;
  const updateCreditsBalance = useSessionStore(
    (state) => state.updateCreditsBalance
  );

  // Prompt state
  const { promptImgQty, promptQuery } = usePromptStore();
  const promptType = usePromptStore((state) => state.promptType);
  const setPromptQuery = usePromptStore((state) => state.setPromptQuery);

  // Hooks
  const creditCost = useCredits(promptImgQty);
  const creditsAvailable = useCreditBalanceCheck({
    balance: credits,
    creditCost: creditCost,
  });

  // Display correct placeholder copy based on chosen type
  const placeholderMap = {
    imageGen: "Describe the image you want to create...",
    packagingDesign: "Describe your ideal packaging vision...",
    logoDesign:
      "Describe your brand, target audience and any details about the logo you want...",
    imageEdit:
      "Pick from one of your previous designs or upload a new image from your device.",
    aiPhotoshoot:
      "Click start photoshoot brief to add your specific shot details.",
    packagingRange:
      "Click start packaging range to add your reference design and choose your packaging types.",
    variantRange:
      "Click start variant range to add your reference design and describe your variants.",
    socialAd: "This tool is coming soon! Choose another tool to continue.",
    brandMood: "This tool is coming soon! Choose another tool to continue.",
    packagingMocks:
      "This tool is coming soon! Choose another tool to continue.",
    cardsPosters: "This tool is coming soon! Choose another tool to continue.",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
      referenceImage: undefined,
    },
  });

  // Watch the query field to enable/disable submit button
  const queryValue = useWatch({
    control: form.control,
    name: "query",
  });

  const isQueryEmpty = !queryValue || queryValue.trim().length === 0;

  // Disable button if query is empty OR if user is authenticated but doesn't have enough credits
  const isDisabled = isQueryEmpty || (isAuthenticatied && !creditsAvailable);

  // Set existing values on mount
  React.useEffect(() => {
    form.setValue("query", promptQuery);
  }, [promptQuery, form]);

  // Submit prompt query
  const submitPrompt = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setPromptQuery(data.query);

    if (isAuthenticatied) {
      updateCreditsBalance(creditCost);
    }

    // If user submitted on homepage and is not authenticated,
    // redirect to login
    if (pathname === "/" && !isAuthenticatied) {
      router.push("/login");
    }

    // If user submitted on homepage and is authenticated,
    // redirect to dashboard
    if (pathname === "/" && isAuthenticatied) {
      router.push("/dashboard");
    }
  };

  return (
    <Form {...form}>
      <form
        data-testid="prompt-box"
        onSubmit={form.handleSubmit(submitPrompt)}
        className="space-y-8 w-full"
      >
        <div className="py-5 w-full">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="sr-only">Prompt query</FormLabel>
                  <FormControl>
                    {promptType !== "imageGen" &&
                    promptType !== "packagingDesign" &&
                    promptType !== "logoDesign" ? (
                      <Alert
                        variant="default"
                        className="bg-ui-grey-light border-transparent! rounded-full! py-2"
                      >
                        <AlertTitle className="flex items-center gap-2">
                          <CircleAlert className="text-ui-blue-dark" />
                          {
                            placeholderMap[
                              promptType as keyof typeof placeholderMap
                            ]
                          }
                        </AlertTitle>
                      </Alert>
                    ) : (
                      <Textarea
                        placeholder={
                          promptType === "imageGen" ||
                          promptType === "packagingDesign" ||
                          promptType === "logoDesign"
                            ? placeholderMap[
                                promptType as keyof typeof placeholderMap
                              ]
                            : ""
                        }
                        className="border-transparent shadow-none focus-visible:ring-0!"
                        {...field}
                      />
                    )}
                  </FormControl>
                </FormItem>
              </>
            )}
          />
        </div>
        <div
          data-element="prompt-box-footer"
          className="flex items-center justify-between w-full mt-5 rounded-full shadow-sm p-4"
        >
          <div className="flex items-center justify-between">
            <ImageUploaderAction form={form} />
            <ImageUploaderPreview />
          </div>
          <div className="space-x-4">
            <PromptImgCount />
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  className={
                    isDisabled ? "inline-block cursor-not-allowed" : ""
                  }
                >
                  <Button disabled={isDisabled}>
                    <Sparkles />
                    {isAuthenticatied ? (
                      <>
                        <span className="hidden md:block">Generate</span>{" "}
                        {creditCost} <Coins />
                      </>
                    ) : (
                      <>Start for free</>
                    )}
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent className="text-center px-4 rounded-2xl bg-foreground">
                <h3 className="font-medium">Generate</h3>
                <p className="text-ui-grey-light">
                  {creditCost} credits required
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </form>
    </Form>
  );
};
