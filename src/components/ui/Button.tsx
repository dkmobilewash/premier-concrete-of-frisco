import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline-white" | "dark";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider text-sm px-8 py-4 rounded transition-all duration-200 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2";

  const variants = {
    primary: "bg-gold text-white hover:bg-gold-dark",
    secondary: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    "outline-white": "border-2 border-white text-white hover:bg-white hover:text-charcoal",
    dark: "bg-charcoal text-white hover:bg-black",
  };

  const classes = cn(base, variants[variant], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
