import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <Header />
      <main className="flex-1 overflow-x-clip">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
