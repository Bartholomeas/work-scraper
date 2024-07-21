import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      "primary-light": "text-primary-light",
      success: "text-success",
      error: "text-error",
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
    transform: {
      default: "",
      uppercase: "uppercase",
    },
  },

  defaultVariants: {
    size: "md",
    weight: "normal",
    color: "default",
    align: "left",
    transform: "default",
  },
});

export type TextVariants = VariantProps<typeof textVariants>;
