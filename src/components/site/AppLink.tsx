import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  activeProps?: { className?: string };
  activeOptions?: { exact?: boolean };
  children: ReactNode;
}

export function Link({ to, activeProps, activeOptions, className = "", children, ...props }: LinkProps) {
  const path = typeof window === "undefined" ? "" : window.location.pathname;
  const isActive = activeOptions?.exact ? path === to : path === to || path.startsWith(`${to}/`);
  const activeClass = isActive ? activeProps?.className ?? "" : "";

  return (
    <a href={to} className={[className, activeClass].filter(Boolean).join(" ")} {...props}>
      {children}
    </a>
  );
}
