import { PromptSelector } from "@/components/prompt/prompt-selector";
import { PromptBox } from "@/components/prompt/prompt-box";

export const PromptContainer = () => {
  return (
    <div
      data-testid="prompt-container"
      className="flex flex-col items-center justify-center rounded-4xl overflow-hidden md:max-w-[720px] xl:max-w-[928px] w-full mx-auto p-5 md:p-10 bg-background"
    >
      <PromptSelector />
      <PromptBox />
    </div>
  );
};
