import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-full border-2 border-gold text-gold-dark font-display text-sm font-semibold uppercase tracking-wider hover:bg-gold hover:text-white transition-colors min-h-[44px]",
        className
      )}
    >
      {children}
    </span>
  );
}
