import type { ReactNode } from "react";

export interface PopoverTriggerProps {
  open: boolean;
  toggle: () => void;
}

export interface PopoverProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  trigger: (props: PopoverTriggerProps) => ReactNode;
}
