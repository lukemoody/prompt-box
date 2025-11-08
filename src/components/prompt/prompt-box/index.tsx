"use client";
import { useSessionStore } from "@/stores/session-store";
import { usePromptStore } from "@/stores/prompt-store";
import { PromptImgCount } from "@/components/prompt/prompt-img-count";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploader } from "@/components/image-uploader";
import { Sparkles, Coins } from "lucide-react";
import { useCredits } from "@/hooks/use-credits";
import { useCreditBalanceCheck } from "@/hooks/use-credit-balance-check";

// Defined schema for login form
const formSchema = z.object({
  query: z.string().min(1, {
    message: "Please enter a prompt query",
  }),
});

export const PromptBox = () => {
  // Session state
  const { activeUser } = useSessionStore();
  const { isAuthenticatied, credits } = activeUser;
  const updateCreditsBalance = useSessionStore(
    (state) => state.updateCreditsBalance
  );

  // Prompt state
  const { promptImgQty } = usePromptStore();
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
    // TODO: Others arent placeholder. Implement differently...
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
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

  // Submit prompt query
  const submitPrompt = (data: z.infer<typeof formSchema>) => {
    setPromptQuery(data.query);
    updateCreditsBalance(creditCost);
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
                    <Textarea
                      placeholder={
                        placeholderMap[
                          promptType as keyof typeof placeholderMap
                        ]
                      }
                      className="border-transparent shadow-none focus-visible:ring-0!"
                      {...field}
                    />
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
          <ImageUploader />
          <div className="space-x-4">
            <PromptImgCount />
            <Button disabled={isDisabled}>
              <Sparkles />
              {isAuthenticatied ? (
                <>
                  <span className="hidden md:block">Generate</span> {creditCost}{" "}
                  <Coins />
                </>
              ) : (
                <>Start for free</>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
