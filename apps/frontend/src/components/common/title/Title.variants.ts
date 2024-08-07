import { cva, type VariantProps } from "class-variance-authority";

export const titleVariants = cva("", {
  variants: {
    size: {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
    },
    color: {
      default: "text-foreground",
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
  },

  defaultVariants: {
    weight: "semibold",
    color: "default",
    align: "left",
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;
