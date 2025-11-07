import {
  House,
  CirclePlus,
  Folders,
  PrinterCheck,
  CirclePlay,
  Scale,
  Camera,
} from "lucide-react";
import { ReactElement } from "react";

export type NavItem = {
  title: string;
  icon: ReactElement;
  url: string;
};

export const navigationData: Array<NavItem> = [
  {
    title: "Home",
    icon: <House />,
    url: "#",
  },
  {
    title: "Create",
    icon: <CirclePlus />,
    url: "#",
  },
  {
    title: "Projects",
    icon: <Folders />,
    url: "#",
  },
  {
    title: "Print-ready",
    icon: <PrinterCheck />,
    url: "#",
  },
  {
    title: "Playground",
    icon: <CirclePlay />,
    url: "#",
  },
  {
    title: "Design Judge",
    icon: <Scale />,
    url: "#",
  },
  {
    title: "Photoshoots",
    icon: <Camera />,
    url: "#",
  },
];
