import { cn } from "@/lib/utils";

const LOGO_SRC = "/urbanx-logo-removebg.png";

type BrandLogoProps = {
  alt?: string;
  className?: string;
  imageClassName?: string;
  variant?: "navbar" | "full";
};

export function BrandLogo({
  alt = "Urbanx logo",
  className,
  imageClassName,
  variant = "navbar",
}: BrandLogoProps) {
  if (variant === "navbar") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-[1.4rem] bg-white/94 p-1.5 shadow-card-luxe ring-1 ring-gold/20 backdrop-blur-sm",
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
          "inline-flex items-center justify-center rounded-[1.75rem] bg-white/95 p-3 shadow-card-luxe ring-1 ring-white/15 backdrop-blur-sm",
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
