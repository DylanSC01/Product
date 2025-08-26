import type { ButtonVariant } from "@/types/types";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const LinkButton = ({
  variant = "primary",
  href,
  children,
  className = "",
}: LinkButtonProps) => {
  const variants = {
    primary: "bg-blue-violet",
    outline: "border border-button-border bg-button-gradient",
    secondary: "p-0",
  };

  return (
    <a href={href} className={`btn ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};
