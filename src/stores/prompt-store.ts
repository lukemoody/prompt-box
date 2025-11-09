import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { PromptOptionType } from "@/types/prompts";

interface PromptStoreType {
  promptType: PromptOptionType["type"];
  promptImgQty: number;
  promptQuery: string;
  promptRefImage: File | undefined;
  setPromptType: (type: PromptOptionType["type"]) => void;
  setPromptImgQty: (qty: number) => void;
  setPromptQuery: (query: string) => void;
  setPromptRefImage: (file: File | undefined) => void;
  clearPrompt: () => void;
}

export const usePromptStore = create<PromptStoreType>()(
  devtools(
    (set) => ({
      promptType: "imageGen", // DEFAULT
      promptImgQty: 5, // DEFAULT
      promptQuery: "",
      promptRefImage: undefined,
      setPromptType: (type) =>
        set({ promptType: type }, undefined, "prompt/setPromptType"),
      setPromptImgQty: (qty) =>
        set({ promptImgQty: qty }, undefined, "prompt/setPromptImgQty"),
      setPromptQuery: (query) =>
        set({ promptQuery: query }, undefined, "prompt/setPromptQuery"),
      setPromptRefImage: (file) =>
        set({ promptRefImage: file }, undefined, "prompt/setPromptRefImage"),
      clearPrompt: () =>
        set(
          () => ({
            promptQuery: "",
            promptImgQty: 5,
            promptType: "imageGen",
            promptRefImage: undefined,
          }),
          undefined,
          "session/clearPrompt"
        ),
    }),
    { name: "PromptStore" }
  )
);
