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
    <Image
      src="/images/logo.png"
      alt="AAR Insights & Research"
      width={isHeader ? 138 : 144}
      height={isHeader ? 92 : 96}
      quality={100}
      unoptimized
      priority={priority}
      sizes={isHeader ? "(min-width: 1024px) 69px, 60px" : "72px"}
      className={cn(
        "object-contain",
        isHeader
          ? "h-10 w-[60px] rounded-[6px] lg:h-[46px] lg:w-[69px]"
          : "h-12 w-[72px] rounded-[6px]",
        className,
      )}
    />
  );
}
