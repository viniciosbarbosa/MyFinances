export interface ButtonProps {
  title: string;
  priority?: string | undefined;
  action?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disable?: boolean;
}
