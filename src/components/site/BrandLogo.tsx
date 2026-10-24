import { cn } from "@/lib/utils";

const LOGO_SRC = "/demarvel-logo-removebg.png";

type BrandLogoProps = {
  alt?: string;
  className?: string;
  imageClassName?: string;
  variant?: "navbar" | "full";
};

export function BrandLogo({
  alt = "D Marvel Infra Solutions logo",
  className,
  imageClassName,
  variant = "navbar",
}: BrandLogoProps) {
  if (variant === "navbar") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center",
          className,
        )}
      >
        <img
          src={LOGO_SRC}
          alt={alt}
          className={cn("h-full w-full object-contain", imageClassName)}
        />
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center",
          className,
        )}
      >
        <img
          src={LOGO_SRC}
          alt={alt}
          className={cn("h-auto w-full object-contain", imageClassName)}
        />
      </div>
    );
  }
}
