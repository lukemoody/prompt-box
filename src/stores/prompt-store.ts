import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { PromptOptionType } from "@/types/prompts";

interface PromptStoreType {
  promptType: PromptOptionType["type"];
  promptImgQty: number;
  promptQuery: string;
  setPromptType: (type: PromptOptionType["type"]) => void;
  setPromptImgQty: (qty: number) => void;
  setPromptQuery: (query: string) => void;
  clearPrompt: () => void;
}

export const usePromptStore = create<PromptStoreType>()(
  devtools(
    (set) => ({
      promptType: "imageGen", // DEFAULT
      promptImgQty: 5, // DEFAULT
      promptQuery: "",
      setPromptType: (type) =>
        set({ promptType: type }, undefined, "prompt/setPromptType"),
      setPromptImgQty: (qty) =>
        set({ promptImgQty: qty }, undefined, "prompt/setPromptImgQty"),
      setPromptQuery: (query) =>
        set({ promptQuery: query }, undefined, "prompt/setPromptQuery"),
      clearPrompt: () =>
        set(
          () => ({
            promptQuery: "",
            promptImgQty: 5,
            promptType: "imageGen",
          }),
          undefined,
          "session/clearPrompt"
        ),
    }),
    { name: "PromptStore" }
  )
);
