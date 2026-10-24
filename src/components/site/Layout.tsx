import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { Seo } from "./Seo";

export function SiteLayout({
  children,
  seo,
}: {
  children: ReactNode;
  seo?: { title?: string; description?: string };
}) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <Seo {...seo} />
      <Header />
      <main className="flex-1 overflow-x-clip">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
