import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { PromptOptionType } from "@/types/prompts";

interface PromptStoreType {
  promptType: PromptOptionType["type"] | null;
  setPromptType: (type: PromptOptionType["type"]) => void;
}

export const usePromptStore = create<PromptStoreType>()(
  persist(
    devtools(
      (set) => ({
        promptType: null,
        setPromptType: (type: PromptOptionType["type"]) => {
          set(
            {
              promptType: type,
            },
            undefined,
            "prompt/setPromptType"
          );
        },
      }),
      { name: "PromptStore" }
    ),
    {
      name: "prompt",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
