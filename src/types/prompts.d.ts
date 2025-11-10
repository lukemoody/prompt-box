export type PromptOptionType = {
  heading: string;
  text: string;
  imgSrc: string;
  type: AIOptionsType;
  status: string | null;
  icon: React.ReactNode;
};

type AIOptionsType =
  | "imageGen"
  | "packagingDesign"
  | "logoDesign"
  | "imageEdit"
  | "aiPhotoshoot"
  | "packagingRange"
  | "variantRange"
  | "socialAd"
  | "brandMood"
  | "packagingMocks"
  | "cardsPosters";
