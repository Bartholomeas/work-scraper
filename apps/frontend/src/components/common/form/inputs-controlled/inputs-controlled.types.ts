import type { HTMLAttributes, VNode } from "vue";

export interface ControlledProps {
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  labelSrOnly?: boolean;
  className?: HTMLAttributes["class"];
}

export interface CheckboxItem {
  id: string;
  label: string | VNode;
  value: string;
}
