import { Badge } from "./Badge";
import { GradientText } from "./GradientText";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  badge?: string;
  title: React.ReactNode;
  gradientText?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  badgeVariant?: "peach" | "dark" | "outline";
};

export function SectionHeading({
  badge,
  title,
  gradientText,
  description,
  align = "left",
  className,
  badgeVariant = "peach",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {badge && (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="font-display text-[clamp(1.75rem,4vw,2.562rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text-dark">
        {title}
        {gradientText && (
          <>
            {" "}
            <GradientText>{gradientText}</GradientText>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-[15.2px] md:leading-[28px]">
          {description}
        </p>
      )}
    </div>
  );
}
