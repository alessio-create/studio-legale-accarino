import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }), [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};
