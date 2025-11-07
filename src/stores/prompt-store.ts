import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { PromptOptionType } from "@/types/prompts";

interface PromptStoreType {
  promptType: PromptOptionType["type"];
  promptImgQty: number;
  setPromptType: (type: PromptOptionType["type"]) => void;
  setPromptImgQty: (qty: number) => void;
}

export const usePromptStore = create<PromptStoreType>()(
  devtools(
    (set) => ({
      promptType: "imageGen", // DEFAULT
      promptImgQty: 5, // DEFAULT
      setPromptType: (type) =>
        set({ promptType: type }, undefined, "prompt/setPromptType"),
      setPromptImgQty: (qty) =>
        set({ promptImgQty: qty }, undefined, "prompt/setPromptImgQty"),
    }),
    { name: "PromptStore" }
  )
);
