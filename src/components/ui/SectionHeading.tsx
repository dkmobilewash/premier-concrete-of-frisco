import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl font-semibold tracking-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <div className="w-16 h-1 bg-gold mt-4 mb-4 mx-auto rounded-full" />
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-mid"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
