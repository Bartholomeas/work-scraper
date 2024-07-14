import { cva, type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button/Button.variants";

export const titleVariants = cva("", {
  variants: {
    type: {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
    },
    size: {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
    },
    color: {
      white: "text-white-200",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      right: "text-right",
      center: "text-center",
      justify: "text-justify",
    },
    fontFamily: {
      serif: "font-serif",
      sans: "font-sans",
    },
  },

  defaultVariants: {
    type: "h2",
    weight: "semibold",
    color: "white",
    align: "left",
    fontFamily: "serif",
  },
});

export type TitleVariants = VariantProps<typeof buttonVariants>;
