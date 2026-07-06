import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "peach" | "dark" | "outline" | "hero-dark";
  showDot?: boolean;
};

export function Badge({
  children,
  className,
  variant = "peach",
  showDot = true,
}: BadgeProps) {
  const variants = {
    peach: "bg-peach-soft text-orange-dark",
    dark: "bg-dark-alt/80 text-orange-soft border border-white/10",
    outline: "bg-transparent border border-orange/20 text-orange",
    "hero-dark":
      "border border-orange/30 bg-orange/14 text-orange-soft tracking-[1.184px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.92px]",
        variants[variant],
        className,
      )}
    >
      {showDot && (
        <span className="size-1.5 shrink-0 rounded-full bg-orange" aria-hidden />
      )}
      {children}
    </span>
  );
}
