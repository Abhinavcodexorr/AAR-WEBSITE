import Image from "next/image";
import { cn } from "@/lib/cn";

type SiteLogoProps = {
  variant?: "header" | "footer";
  priority?: boolean;
  className?: string;
};

export function SiteLogo({
  variant = "header",
  priority = false,
  className,
}: SiteLogoProps) {
  const isHeader = variant === "header";

  return (
    <span
      className={cn(
        "relative block shrink-0 overflow-hidden",
        isHeader ? "h-9 w-[54px] lg:h-[46px] lg:w-[69px]" : "h-12 w-[72px]",
        className,
      )}
    >
      <Image
        src="/images/logo.png"
        alt="AAR Insights & Research"
        fill
        quality={100}
        unoptimized
        priority={priority}
        sizes={isHeader ? "(min-width: 1024px) 69px, 54px" : "72px"}
        className="rounded-[6px] object-contain"
      />
    </span>
  );
}
