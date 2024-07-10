import type { HTMLAttributes } from "vue";

export interface ControlledProps {
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  labelSrOnly?: boolean;
  className?: HTMLAttributes["class"];
}
