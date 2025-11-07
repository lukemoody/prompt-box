import {
  Brush,
  Box,
  BookHeart,
  Camera,
  Citrus,
  ImagePlus,
  Boxes,
  Package,
  CircleStar,
  TabletSmartphone,
  BookCopy,
} from "lucide-react";

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

export const promptOptions: Array<PromptOptionType> = [
  {
    heading: "Create Image",
    text: "Create AI imagery using state-of-the-art image models.",
    imgSrc: "/prompt-options/prompt-create-image.webp",
    type: "imageGen",
    status: "New",
    icon: <ImagePlus />,
  },
  {
    heading: "Packaging design",
    text: "Design packaging that looks ready for the shelf.",
    imgSrc: "/prompt-options/prompt-packaging-design.webp",
    type: "packagingDesign",
    status: null,
    icon: <Package />,
  },
  {
    heading: "Logo design",
    text: "Create a logo that feels right, fast.",
    imgSrc: "/prompt-options/logo-design.webp",
    type: "logoDesign",
    status: "New",
    icon: <CircleStar />,
  },
  {
    heading: "Edit image",
    text: "Select or upload an image to edit with our prompt editor.",
    imgSrc: "/prompt-options/prompt-edit-image.webp",
    type: "imageEdit",
    status: null,
    icon: <Brush />,
  },
  {
    heading: "AI photoshoot",
    text: "Create a studio-quality photoshoot for your product from your laptop.",
    imgSrc: "/prompt-options/prompt-ai-photoshoot.webp",
    type: "aiPhotoshoot",
    status: "New",
    icon: <Camera />,
  },
  {
    heading: "Packaging range",
    text: "Create a range of packaging types from an existing design.",
    imgSrc: "/prompt-options/prompt-packaging-range.webp",
    type: "packagingRange",
    status: null,
    icon: <Boxes />,
  },
  {
    heading: "Variant range",
    text: "Create a range of flavors, scents or product variants from an existing design.",
    imgSrc: "/prompt-options/prompt-variant-range.webp",
    type: "variantRange",
    status: "New",
    icon: <Citrus />,
  },
  {
    heading: "Social ads",
    text: "Create high-performing social content for your brand.",
    imgSrc: "/prompt-options/prompt-social-ads.webp",
    type: "socialAd",
    status: "Coming soon",
    icon: <TabletSmartphone />,
  },
  {
    heading: "Brand moodboard",
    text: "Visualise your brand's vibe in minutes.",
    imgSrc: "/prompt-options/prompt-brand-moodboard.webp",
    type: "brandMood",
    status: "Coming soon",
    icon: <BookHeart />,
  },
  {
    heading: "Packaging mockups",
    text: "Mockup existing artwork onto a packaging product.",
    imgSrc: "/prompt-options/prompt-packaging-mockups.webp",
    type: "packagingMocks",
    status: "New",
    icon: <Box />,
  },
  {
    heading: "Cards & posters",
    text: "Design a business cards, flyers, posters and other printed items that actually looks professional.",
    imgSrc: "/prompt-options/generate-new-cards-and-posters.webp",
    type: "cardsPosters",
    status: "New",
    icon: <BookCopy />,
  },
];
