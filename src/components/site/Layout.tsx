import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { ChatWidget } from "./ChatWidget";
import { Breadcrumbs } from "./Breadcrumbs";

export const Layout = ({
  children,
  hideFooter = false,
}: {
  children: ReactNode;
  /** When true, the global Footer is not rendered (the wrapping layout will provide its own). */
  hideFooter?: boolean;
}) => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }), [pathname]);
  // Home page hero is full-bleed under the transparent navbar; other pages
  // need top padding equal to navbar height so content does not get hidden.
  const isHome = pathname === "/";
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main
        key={pathname}
        className={`flex-1 animate-page-in ${isHome ? "" : "pt-20 lg:pt-[116px]"}`}
      >
        {!isHome && <Breadcrumbs />}
        {children}
      </main>
      {!hideFooter && <Footer />}
      <CookieBanner />
      <ChatWidget />
    </div>
  );
};
