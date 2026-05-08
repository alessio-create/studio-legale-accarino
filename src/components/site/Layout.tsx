import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { ChatWidget } from "./ChatWidget";
import { Breadcrumbs } from "./Breadcrumbs";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }), [pathname]);
  // Home page hero is full-bleed under the transparent navbar; other pages
  // need top padding equal to navbar height so content does not get hidden.
  const isHome = pathname === "/";
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main
        className={`flex-1 ${
          isHome ? "" : "pt-20 lg:pt-[116px] bg-surface-container-low"
        }`}
      >
        {!isHome && <Breadcrumbs />}
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <ChatWidget />
    </div>
  );
};
