export type PromptOptionType = {
  heading: string;
  text: string;
  imgSrc: string;
  type:
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
  status: string | null;
  icon: React.ReactNode;
};
